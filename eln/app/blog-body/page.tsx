"use client"; // Add this directive to mark the component as a client component

import React, { useState ,useEffect } from "react";
import Header from "@/components/header";
import '../publication.css'
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import placeholder_img from "../../public/assets/images/blog-body-banner.svg";
import comments_profile from "../../public/assets/images/blog/comments_profile.svg";
import handright from "../../public/assets/images/right-hand.svg";
import starimage from "../../public/assets/images/star.svg";
import arrow from "../../public/assets/images/arrowsimple.svg";
import search from "../../public/assets/images/publication/search.svg"
import back_arrow from "../../public/assets/images/blog/back-arrow.svg"; 
import dotted_line from "../../public/assets/images/blog/blog-body-round.svg"
 import star_rating from "../../public/assets/images/blog/star_rating.svg"
  import halfstar from "../../public/assets/images/blog/halfstar.svg" 
    import right_arrow_coments from "../../public/assets/images/blog/right_arrow_coments.svg"  
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { FaAngleRight } from 'react-icons/fa';
import BannerCard from '../publication/banner-card/banner-card';
import { useRouter } from 'next/navigation';
const categories = [
  'All articles',
  'Blog of the Month',
  'Blog of the week',
  'General',
  'Product',
  'News & Event',
];
interface BannerCardProps {
    img: string;
    alt?: string;
    label: string;
    title: string;
    desc: string;
    author: string;       // required
    usernameTags?: string[];
    publishedAt?: string;
    slug: string;         // required
}



function Productdownload(){
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState('Newest');
      const [activeCategory, setActiveCategory] = useState('All articles');
  const [hideCategoryBox, setHideCategoryBox] = useState(false);
  const router = useRouter();
  const handleSelect = (option: string) => {
    setSelected(option);
  };
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
     return (
    <>
         {/* <Header whiteHeader/> */}
         <div className="publication-banner blog-body">
            <Image 
    src={dotted_line}
    alt="Decorative dotted curve" 
    className="dotted-line"
  />
                <div className="container">
                        <button className="back-arrow-btn back-arrow-btn-body" onClick={() => router.back()}>
                                                             <Image src={back_arrow} alt="Back" width={20} height={20} />
                                                         </button>
                    <div className=" mt-5">                        
                        <div className="text-center" style={{margin:"auto", maxWidth:"820px"}}>
                                           
                            <h1 className="text-left">Stay Updated with the latest in lab digitization and ELN advancements.</h1>
                            <Image src={placeholder_img} alt="placeholder" className="img-fluid"/>
                        </div>
                    </div>
                    
                </div>
            </div>
         <div className="container">
                <div className="row">
                          <div className="col-lg-3">
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
                                                        className={`d-flex align-items-center cursor-pointer  ${
                                                          category === activeCategory ? 'text-primary fw-semibold' : 'text-secondary-li'
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
                              <div className="col-lg-9">
                                           <div className="admin-tag">
                <p>In pretty much all laboratories, data capture from different types of instruments plays a vital role in their operations in termsof quality and compliance 
                with requirements, standards and regulations. Traditionally, lab personnel recorded instrument data manually. But as the number of instruments used 
                started to increase, and the volume of instrument data generated started to exponentially increase, human errors arising in the process of manual 
                recording became inevitable. </p>
                <div className="post-meta">
                    <span className="author">Admin</span>
                    <span className="">•</span>
                    <span className="date">Dec 22, 2025</span>
                    <span className="tag-btn tag-btn-green ms-2">Tag</span>
                    <span className="tag-btn tag-btn-purple ms-1">Tag</span>
                </div>
            </div> 
                <div className="stats-bar">
                    <div className="stats-left">
                        <span className="stat-item">
                            <Image src={handright} alt="placeholder" className="img-fluid"  style={{width:'18px'}}/> <span className="mt-1">15,000 Likes</span>
                        </span>
                        <span className="stat-item">
                         <Image src={starimage} alt="placeholder" className="img-fluid" style={{width:'18px'}}/> <span className="mt-1"> 4.9</span> <span className="reviews mt-1"> (275 reviews)</span>
                        </span>
                    </div>
                    <div className="stats-right">
                         <Image src={arrow} alt="placeholder" className="img-fluid" style={{width:'18px'}}/> Share
                    </div>
                    </div>

                <div className="mt-4 blog-content">
                    <h3 className="mb-4 main-header py-2">Core Features Every Modern LIMS Should Have</h3>
                    <h5 className="sub-title my-4">1. Configurability: The Key to a Flexible LIMS</h5>
                    <p className="mt-2 blog-content-p">A configurable LIMS allows laboratories to tailor workflows, data fields, and reports to their specific needs. Unlike rigid systems, it enables modifications to sample registration templates, ensuring seamless data entry for various sample types. This adaptability helps labs stay compliant with evolving regulations without requiring extensive software changes. By streamlining processes based on operational requirements, configurable enhances scalability, efficiency, and workflow management.</p>
                    <h5 className="sub-title mb-3 mt-5">2. Automated Workflow Management: Streamlining Lab Processes</h5>
                    <p className="mt-2 blog-content-p">Automation eliminates manual bottlenecks by structuring workflows and guiding lab personnel through each step. This reduces errors, accelerates turnaround times, and ensures compliance with Standard Operating Procedures (SOPs). With automated approvals, real-time data transfers, and systematic task tracking, laboratories can optimize productivity while maintaining data accuracy and regulatory compliance.</p>
                    <h5 className="sub-title mb-3 mt-5">3. Bulletproof Data Security & Compliance</h5>
                    <p className="mt-2 blog-content-p">Security is a top priority in laboratory management. A modern LIMS ensures data integrity through features like electronic signatures, audit trails, and role-based access controls. Encryption safeguards sensitive information, while compliance with HIPAA and other regulations ensures data privacy. Additionally, two-factor authentication (2FA) adds an extra layer of security, preventing unauthorized access and breaches.</p>
                    <h5 className="sub-title mb-3 mt-5">4. Quality Control (QA/QC) Management: Ensuring Accuracy</h5>
                    <p className="mt-2 blog-content-p">Accurate test results are critical for laboratory reliability. A robust LIMS simplifies quality control by allowing validation of multiple tests simultaneously, setting predefined acceptance criteria, and automatically comparing QC sample results with test samples. This minimizes errors, ensures consistency, and enables quick corrective actions when discrepancies arise.</p>
                    <h5 className="sub-title mb-3 mt-5">5. Sample Lifecycle Tracking & Storage Management</h5>
                    <p className="mt-2 blog-content-p">A modern LIMS provides full sample traceability, tracking each sample from entry to disposal while prioritizing urgent ones for faster processing. Advanced storage management allows precise tracking of sample locations, down to the box level, reducing misplacement risks. Automated chain-of-custody monitoring prevents unauthorized access, ensuring compliance and security. Additionally, seamless inventory integration ensures reagents and consumables are available when needed, preventing workflow disruptions.</p>
                </div>
                
                <div className="review-box">
               <div className="review-container">
  <div className="review-text">
    <h2>Add a Review</h2>
    <p className="subtext">Be the first to review</p>
  </div>

  <div className="star-rating">
    {/* ★ ★ ★ ★ ☆ */}
     <Image src={star_rating} alt="placeholder" className="img-fluid me-1" /> 
      <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
       <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
        <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
         <Image src={halfstar} alt="placeholder" className="img-fluid ms-1"/> 
  </div>
</div>

                <div className="input-area">
                    <input type="text" placeholder="Share your thoughts" />
                    <div className="actions">
                    <span className="emoji">😊</span>
                    <button className="post-btn">Post it !<Image src={right_arrow_coments} alt="placeholder" className="img-fluid" style={{width:'16px', height:'17px', marginLeft:'6px'}}/>  </button> 
                    </div>
                </div>
                     <div className="d-flex justify-content-between align-items-center mt-4 comments-section">
                            <div>
                                <p>3 Comments</p>
                            </div>
                            <div >
      <div className="dropdown">
                <button
                    className="shadow-sm rounded dropdown-toggle fw-bold"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                    border: 'transparent',
                    padding: '8px 20px',
                    fontSize: '14px',
                    background:'#fff',
                    color:'#000000',
                    boxShadow:'0px 9px 10.4px 3px rgba(0, 0, 0, 0.07)'
                    }}
                >
                    {selected}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><button className="dropdown-item" onClick={() => handleSelect('Newest')}>Newest</button></li>
                    <li><button className="dropdown-item" onClick={() => handleSelect('Oldest')}>Oldest</button></li>
                    <li><button className="dropdown-item" onClick={() => handleSelect('Popular')}>Popular</button></li>
                </ul>
                </div>
            </div>
            </div>

            <div className="review-header mt-4">
                        <Image src={comments_profile} alt="placeholder" className="img-fluid" style={{width:'44px'}}/> 
                        <div className="reviewer-info">
                         <p className="user-name">Anna</p>
                        <p className="review-text">
                            Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                        </p>
                        <p className="review-footer">
                            <span className="time" style={{fontFamily:'Urbanist-Medium'}}>about 1 hour ago</span>
                            <span className="action" style={{fontFamily:'Urbanist-Bold'}}>Like</span>
                            <span className="action" style={{fontFamily:'Urbanist-Bold'}}>Reply</span>
                        </p>
                        </div>
                        <div className="stars">
                           <Image src={star_rating} alt="placeholder" className="img-fluid me-1" /> 
      <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
       <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
        <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
         <Image src={halfstar} alt="placeholder" className="img-fluid ms-1"/> 
                        </div>
                    </div>
                       <div className="review-header mt-5">
                        <Image src={comments_profile} alt="placeholder" className="img-fluid" style={{width:'44px'}}/> 
                        <div className="reviewer-info">
                       <p className="user-name">Anna</p>
                        <p className="review-text">
                            Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                        </p>
                        <div className="review-footer">
                            <span className="time">about 1 hour ago</span>
                            <span className="action">Like</span>
                            <span className="action">Reply</span>
                        </div>
                        </div>
                        <div className="stars">
                          <Image src={star_rating} alt="placeholder" className="img-fluid me-1" /> 
      <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
       <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
        <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
         <Image src={halfstar} alt="placeholder" className="img-fluid ms-1"/> 
                        </div>
                    </div>
                       <div className="review-header mt-5">
                        <Image src={comments_profile} alt="placeholder" className="img-fluid" style={{width:'44px'}}/> 
                        <div className="reviewer-info">
                          <p className="user-name">Anna</p>
                        <p className="review-text">
                            Beyond controlled data capture, Logilab ELN also packs a host of other vital features that ease data remediation tasks for laboratories of all kinds.
                        </p>
                        <div className="review-footer">
                            <span className="time">about 1 hour ago</span>
                            <span className="action">Like</span>
                            <span className="action">Reply</span>
                        </div>
                        </div>
                        <div className="stars">
                           <Image src={star_rating} alt="placeholder" className="img-fluid me-1" /> 
      <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
       <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
        <Image src={star_rating} alt="placeholder" className="img-fluid mx-1"/> 
         <Image src={halfstar} alt="placeholder" className="img-fluid ms-1"/> 
                        </div>
                    </div>
                 </div>

                 <div className="related-article">
                     <div  className="search_bar w-100 mx-auto ">
                            <div className="search-icon">
                                <Image src={search} alt="search" width={16}/>
                            </div>
                            <input type="text" placeholder="Start searching here"/>
                     </div>
                       <div className="container mt-5">
                                     <div className="row">
                                       {/* Cards */}
                                       {[...Array(2)].map((_, i) => (
                                         <div key={i} className="col-md-6 px-3 mb-4 mt-5">
                                           <BannerCard
                                             img={placeholder_img}
                                             label={i % 2 === 0 ? "General" : "Product"}
                                             title={"Top 10 Features to look for in Modern LIMS Software"}
                                             desc={"Why Your Laboratory Needs an Electronic Lab Notebook Documentation is of utmost essence in the scientific..."} author={""} slug={""}                                           />
                                         </div>
                                       ))}
                                     </div>
                                   </div>
                 </div>
              <div className="mt-5">
                    
              </div>
                  
                </div>
                   </div>
        
                {/* <div className="review-card">
                    </div> */}
                       

         </div>
    </>
     )
}

export default Productdownload;