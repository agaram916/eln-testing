'use client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from "@/lib/imageUrlBuilder";
import { useEffect, useState, useRef } from 'react';
import '../blog.css';
import Header from '@/components/header';
import blog_new_img from '@/public/assets/images/blog/blog_new_img.svg';
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../public/assets/images/publication/placeholder.svg";
import back_arrow from "../../public/assets/images/blog/back-arrow.svg";
import placeholder_img1 from "../../public/assets/images/publication/placeholder1.png";
import whitepaper from "../../public/assets/images/blog/featured.svg";
import blog_banner_ad from "../../public/assets/images/blog/blog_banner_ad.svg";
import blog_banner_ad_two from "../../public/assets/images/blog/blog_banner_ad_two.svg";
import backto_top from "../../public/assets/images/blog/backto_top.svg";
import blog_banner_ad_three from "../../public/assets/images/blog/blog_banner_ad_three.svg";
import recent from "../../public/assets/images/publication/recent.svg";
import search from "../../public/assets/images/publication/search.svg"
import Footer from '../footer';
import { FaAngleRight } from 'react-icons/fa';
import BannerCard from '../publication/banner-card/banner-card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/navigation';

const blogsPerPage = 6;
import { client } from "@/lib/sanity";
const categories = [
  'General',
  'Product',
  'All articles',
  'News & Event',
  'Blog of the Month',
  'Blog of the week',
];
// Desired order for "All articles"


const blogsQuery = `*[_type == "blog"] | order(publishedAt desc){
  title,
  summary,
  slug,
  category,
  author,
  usernameTags,
  publishedAt,
  "mainImage": mainImage.asset->url
}`;

const adsQuery = `*[_type == "adImage"]{
  image,
  url
}`;
const desiredOrder = ['general', 'product', 'news'];



const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All articles');
  const [hideCategoryBox, setHideCategoryBox] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const SearchRef = useRef<HTMLDivElement>(null);
  const BannerRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  const [touchedTop, setTouchedTop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [featuredBlog, setFeaturedBlog] = useState(null);
  const [randomAd, setRandomAd] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);






  useEffect(() => {
    async function fetchAds() {
      const ads = await client.fetch(adsQuery);
      if (ads.length > 0) {
        const random = ads[Math.floor(Math.random() * ads.length)];
        setRandomAd(random);
      }
    }
    fetchAds();
  }, []);




  useEffect(() => {
    client.fetch(blogsQuery).then(setBlogs);
  }, []);


  useEffect(() => {
    client.fetch(blogsQuery).then((data) => {
      setBlogs(data);
      const feat = data.find((blog) => blog.category === 'featured');
      setFeaturedBlog(feat || null);
    });
  }, []);


  // Handle category box overlap with footer
  useEffect(() => {
    const handleScroll = () => {
      const categoryBox = document.getElementById('category-box');
      const footer = document.getElementById('footer');

      if (!categoryBox || !footer) return;

      const categoryBoxRect = categoryBox.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      if (categoryBoxRect.bottom > footerRect.top) {
        setHideCategoryBox(true);
      } else {
        setHideCategoryBox(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle sticky menu & back to top
  useEffect(() => {
    const scrollFunction = () => {
      setShowButton(window.scrollY > 20);

      const protocolmenu = document.querySelector('.protocolmenu');
      if (protocolmenu) {
        const offset = protocolmenu.getBoundingClientRect().top;
        const top = window.scrollY;
        setIsFixed(top >= offset);
      }
    };

    window.addEventListener('scroll', scrollFunction);
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const search = SearchRef.current;
      const banner = BannerRef.current;
      if (!search || !banner) return;

      const bannerRect = banner.getBoundingClientRect();
      const isTouchingTop = bannerRect.bottom <= 100;

      setTouchedTop(isTouchingTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [])


  useEffect(() => {
    const handleScroll = () => {
      if (!popupClosed && window.scrollY > 20) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [popupClosed]);

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupClosed(true);
  }
  const filteredBlogs = blogs.filter(blog => {
    const lowerSearch = searchTerm.toLowerCase();

    const titleMatch = blog.title?.toLowerCase().includes(lowerSearch);
    const summaryMatch = blog.summary?.toLowerCase().includes(lowerSearch);
    const authorMatch = blog.author?.toLowerCase().includes(lowerSearch);
    const usernameTagsMatch = blog.usernameTags?.some(tag => tag.toLowerCase().includes(lowerSearch));
    const categoryMatch = blog.category?.toLowerCase().includes(lowerSearch);

    // If "All articles", include everything that matches search except featured
    if (activeCategory === "All articles") {
      return (blog.category !== 'featured') && (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    // Blog of the Month
    if (activeCategory === "Blog of the Month") {
      const blogDate = new Date(blog.publishedAt);
      const now = new Date();
      return (
        blogDate.getMonth() === now.getMonth() &&
        blogDate.getFullYear() === now.getFullYear() &&
        (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch)
      );
    }

    // Blog of the Week
    if (activeCategory === "Blog of the week") {
      const blogDate = new Date(blog.publishedAt);
      const now = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(now.getDate() - 7);
      return blogDate >= oneWeekAgo && blogDate <= now &&
        (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    // Normal category filtering
    const categoryMap: { [key: string]: string } = {
      "General": "general",
      "Product": "product",
      "News & Event": "news",
    };

    const catKey = categoryMap[activeCategory];
    if (catKey) {
      return blog.category === catKey &&
        (titleMatch || summaryMatch || authorMatch || usernameTagsMatch || categoryMatch);
    }

    return false;
  });


  // ✅ Apply pagination only for specific categories
  const paginatedBlogs = (() => {
    if (["General", "Product", "News & Event"].includes(activeCategory)) {
      const start = (currentPage - 1) * blogsPerPage;
      const end = start + blogsPerPage;
      return filteredBlogs.slice(start, end);
    }
    return filteredBlogs;
  })();



  // Group blogs by category
  const groupedBlogs = blogs.reduce((acc, blog) => {
    if (blog.category === 'featured') return acc; // skip featured

    const cat = blog.category || 'General';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(blog);
    acc[cat].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)); // newest first
    return acc;
  }, {});



  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);




  return (
    <div>
      {/* Optional Protocolmenu */}
      {/* <div className={`protocolmenu ${isFixed ? 'fixed' : ''}`}>Sticky Content</div> */}

      <div className="blog-container">
        {showPopup && (
          <div className="popup-ad">
            <div className="popup-content">
              <div className="popup-header">
                <button className="popup-close" onClick={handleClosePopup}>×</button>
              </div>
              <button className="popup-subscribe">Subscription</button>
            </div>
          </div>
        )}

        <div className="publication-banner" >
          <div className="container">
            <div className="row mt-5" ref={BannerRef}>
              <div className="col-md-6 position-relative">
                {featuredBlog ? (
                  <div
                    className="featured-blog-card"
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push(`/blog/${featuredBlog.slug.current}`)}
                  >
                    <Image
                      src={featuredBlog.mainImage || placeholder_img1}
                      alt="Featured Blog Image"
                      className="img-fluid placeholder1"
                      width={260}
                      height={50}
                    />
                    <div className="d-flex align-items-center">
                      <h6>blog</h6>
                      <button
                        className="back-arrow-btn"
                        onClick={(e) => {
                          e.stopPropagation(); // prevent navigating to blog on back click
                          router.back();
                        }}
                      >
                        <Image src={back_arrow} alt="Back" width={20} height={20} />
                      </button>
                      <span className="line ms-2"></span>
                    </div>
                    <h1>{featuredBlog.title}</h1>
                    <p>{featuredBlog.summary}</p>
                    <p>{new Date(featuredBlog.publishedAt).toLocaleDateString()}</p>
                  </div>
                ) : (
                  <>
                    <Image src={placeholder_img1} alt="placeholder" className="img-fluid placeholder1" />
                    <div className="d-flex align-items-center">
                      <h6>blog</h6>
                      <button className="back-arrow-btn" onClick={() => router.back()}>
                        <Image src={back_arrow} alt="Back" width={20} height={20} />
                      </button>
                      <span className="line ms-2"></span>
                    </div>
                    <h1>Stay Updated with the latest in lab digitization and ELN advancements.</h1>
                    <p>GxP is a set of regulations and quality guidelines formulated to ensure the safety of life sciences products while maintaining the quality of processes throughout every stage of manufacturing...</p>
                    <p>Dec 22, 2025</p>
                  </>
                )}
              </div>
              <div className="col-md-6">
                {!featuredBlog && (
                  <Image src={placeholder_img1} alt="placeholder" className="img-fluid placeholder1" />
                )}
              </div>
            </div>

            <div ref={SearchRef} className={`search_bar w-75 mx-auto ${touchedTop ? 'fixed' : ''}`}>
              <div className="search-icon">
                <Image src={search} alt="search" width={16} />
              </div>
              <input
                type="text"
                placeholder="Start searching here"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />

            </div>
            {touchedTop && <div style={{ height: '180px' }} />}
          </div>
        </div>

        <div className="container">
          <div className='row mt-5'>
            <div className='col-md-3'>
              <div
                id="category-box"
                className={`category-box transition ${hideCategoryBox ? 'hidden-box' : 'sticky-box'}`}
              >
                <div className="p-3" style={{ width: '200px' }}>
                  <h5 className="">Category</h5>
                  <ul className="list-unstyled mt-3 mb-0">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className={`d-flex align-items-center cursor-pointer  ${category === activeCategory ? 'text-primary fw-semibold' : 'text-secondary-li'
                          }`}
                        onClick={() => setActiveCategory(category)}
                        style={{ cursor: 'pointer' }}
                      >
                        {category === activeCategory ? (
                          <FaAngleRight className="me-2 text-primary" />
                        ) : (
                          <span className="me-4" />
                        )}
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='blog-sub-jotform'>
                  <iframe
                    id="JotFormIFrame-241490785757470"
                    src="https://form.jotform.com/241490785757470"
                    frameBorder="0"
                    style={{
                      width: "80%",
                      height: "350px",
                      border: "none",
                    }}
                    scrolling="no"
                    title="Download Form"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className='col-md-9 blogs-section '>
              <div className="d-flex justify-content-between align-items-center">
                <div className='recent'>
                  <label>Featured</label>
                  <h2 className="recent-post-heading">
                    <span className="highlight-bg">Recent Post</span>
                  </h2>
                </div>
                <div className="col-4 text-end recent">
                  <Image src={recent} alt="recent" />
                  <p className="mt-4">Explore the latest insights, tips, and updates on lab digitization and ELN systems.</p>
                </div>
              </div>

              <div className="container">
                <div className="container">
                  <div className="row">
                    {activeCategory === "All articles" ? (
                      desiredOrder
                        .filter(cat => groupedBlogs[cat]) // only show categories that exist
                        .map(cat => (

                          <div key={cat} className="mb-5">
                            {/* Category Title */}
                            <h4 className="recent-post-heading mb-4">{cat}</h4>

                            {/* 2 recent posts under each category */}
                            <div className="row">
                              {groupedBlogs[cat].slice(0, 2).map((blog, idx) => (
                                <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                                  <BannerCard
                                    img={blog.mainImage || placeholder_img}
                                    alt={blog.title}
                                    label={blog.category || "General"}
                                    title={blog.title}
                                    desc={blog.summary}
                                    author={blog.author}
                                    usernameTags={blog.usernameTags}
                                    publishedAt={blog.publishedAt}
                                    slug={blog.slug.current}
                                  />
                                </div>
                              ))}
                            </div>

                            {/* Show more under the posts */}
                            <div className="text-center mt-2">
                              <div style={{ textAlign: "right", marginTop: "10px" }}>
                                <button
                                  onClick={() => {
                                    const matchedCategory = categories.find(c =>
                                      c.toLowerCase().includes(cat.toLowerCase())
                                    );
                                    setActiveCategory(matchedCategory || "General");
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }}
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 18px",
                                    borderRadius: "25px",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3399ff")}
                                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                                >
                                  Show more →
                                </button>
                              </div>

                            </div>

                            <hr className="mt-4" />
                          </div>
                        ))
                    ) : (
                      paginatedBlogs.map((blog, idx) => (
                        <div key={blog.slug.current || idx} className="col-md-6 px-3 mb-4">
                          <BannerCard
                            img={blog.mainImage || placeholder_img}
                            alt={blog.title}
                            label={blog.category || "General"}
                            title={blog.title}
                            desc={blog.summary}
                            author={blog.author}
                            usernameTags={blog.usernameTags}
                            publishedAt={blog.publishedAt}
                            slug={blog.slug.current}
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>



              </div>

              <div className='container mt-5'>
                {randomAd ? (
                  randomAd.url ? (
                    <a href={randomAd.url} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={urlFor(randomAd.image).url()}
                        alt="Advertisement"
                        className="img-fluid w-100"
                        width={1200}
                        height={400}
                      />
                    </a>
                  ) : (
                    <Image
                      src={urlFor(randomAd.image).url()}
                      alt="Advertisement"
                      className="img-fluid w-100"
                      width={1200}
                      height={400}
                    />
                  )
                ) : (
                  <Image src={blog_banner_ad} alt="recent" className="img-fluid w-100" />
                )}

              </div>
              {["General", "Product", "News & Event"].includes(activeCategory) && filteredBlogs.length > blogsPerPage && (
                <div className='py-5'>
                  <Pagination
                    totalItems={filteredBlogs.length}
                    itemsPerPage={blogsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}

            </div>
          </div>
        </div>

        <div className="hero-section container">
          <div className="d-flex justify-content-between text-white px-4">
            <div className="d-flex flex-column">
              <h1 className="text-white">
                Digitize <span className="text-white">.</span> Simplify <span className="text-white">.</span> Organize <span className="text-white">.</span>
              </h1>
              <p className="lead text-white">
                Kickstart your paperless lab with Logilab ELN
              </p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Link href="#" passHref legacyBehavior>
                <a className="btn  rounded-pill">Request a Demo</a>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <a className="btn rounded-pill ms-3">Book A Demo</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <Footer />
      </footer>
      {/* ✅ Back to Top Button */}
      {showButton && (
        <button onClick={backToTop} className="back-to-top">
          <Image src={backto_top} alt="recent" className='img-fluid w-50' />
        </button>
      )}
    </div>
  );
};

export default Blog;
