'use client';
import Link from 'next/link';
import React, { useState, useEffect,} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Publication from '../../../public/assets/images/publication/publication-home-img.svg';
import Searchbg from '../../../public/assets/images/publication/search-bg.svg';
import Publicsearch from '../../../public/assets/images/publication/public-search.svg';
import Recentpublic from '../../../public/assets/images/publication/recentpublic-one.svg';
import Publicwhite from '../../../public/assets/images/publication/public-white2.svg';
import Publicwhiteone from '../../../public/assets/images/publication/public-white3.svg';
import Publicwhitetwo from '../../../public/assets/images/publication/public-white4.svg';
import Helparrow from '../../../public/assets/images/publication/help-arrow.svg';
import Footer from '@/app/footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';

const Whitepaper = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => setLoading(false), 500); // Wait for animation to finish before hiding
    }, 3000); // Adjust duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }
  
  return (
        <div>
            <Header/>
        <div className="soltionbg security_banner_content download">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                      Publications
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                    Get access to Whitepapers & Case-Studies
                  </p>
                  </div>
                </div>
        
              </div>
            </div>
        </div>
            
            <div className='publication-home'>
                <div className='container'>
                    <div className='publication-bg-postion'>
                        <div className=' col-md-11 offset-md-1 publication-bg mt_130'></div>
                            <div className=' publication-content-absolute'>
                                <div className='publication-content py-4 px-5'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <div>
                                                    <div className='mt-2'>
                                                        <a className="er_btn er_btn_two ">Featured Publication</a>
                                                    </div>
                                                    <div> 
                                                   
                                                        <h2 className="elementor-heading-title elementor-size-default pt-3 pb-3">
                                                        How Logilab ELN helps organizations to follow GxP Regulations</h2> 
                                                        <p>GxP is a set of regulations and quality guidelines formulated to ensure the safety of life sciences products while maintaining the quality of processes throughout every stage of manufacturing,..
                                                        </p>
                                                        <div className='pb-3'>
                                                            <a className='..' href=''>Read More <span><GoArrowUpRight /></span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-4 pt_130 publication-img'>
                                                <div className=''>
                                                    <Image  alt='' src={Publication} className="w-100 img-fluid"  />
                                                   
                                                    <a className="er_btn er_btn_two"> Get Your Copy Now </a>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='publication-home-search mt_140'>
                    <div className='search-bg'>
                        <Image  alt='' src={Searchbg} className="w-100 img-fluid"  />                     
                        <form className="search-container">
                         <div id="search-bar"><input type="text" placeholder="What can I help you with today?"/>
                         <a href="#" className="search-icon">
                            <Image  alt='' src={Publicsearch} className="w-100 img-fluid"  />                         
                            </a> 
                         </div>
                     </form> 
                    
                    </div> 
                </div> */}

                <div className='recent_pulication mt_140'>
                <div className='publication-card-section'>
                    <div className='container'>
                      <h2 className="f_p f_size_30 f_800 t_color3 pt-5">Recent <span className='span-blue'>Publications</span></h2>
                    </div>
                 
                <div className='container'> 

                    <div className='row mx-2 mt-4 pb-5'>
                        <div className='col-lg-6 mt-5'>
                     <div className="card publication-white-cards">
                        <Image  alt='' src={Publicwhite} className="w-100 img-fluid"  />
                             <div className="card-body px-4 py-2">
                             <a className='publication-category'>Case Studies</a>
                               <h5 className="card-title mt-2">How Logilab ELN helped Megafine with Sample Management</h5>
                                <p className="card-text mt-2">Megafine Pharma (P) Ltd, founded in 1995, is a pharmaceutical manufacturing company with offices in India. They have approved facilities by the US Food & Drug Administration (FDA)..</p>
                                <Link className='er_btn er_btn_two' href='/casestudy-download'>Download</Link>
                        </div>
                    </div>
                     </div>


                     <div className='col-lg-6 my-5'>
                      <div className="card publication-white-cards">
                        <Image  alt='' src={Publicwhiteone} className="w-100 img-fluid"  />                              
                             <div className="card-body px-4 py-2">
                             <a className='publication-category'>Whitepaper</a>
                               <h5 className="card-title mt-2">How Logilab ELN helps organizations to maintain ALCOA Data Integrity</h5>
                                <p className="card-text mt-2">Data integrity, an area of increasing priority in today’s laboratory world and “The focus area” when it comes to regulatory compliance such as 21 CFR Part 11 and Eudralex Annex 11.</p>
                                <Link className='er_btn er_btn_two' href='/whitepaper-download'>Download</Link>
                            </div>
                    </div>
                     </div>


                     <div className='col-lg-6 my-5'>
                        <div className="card publication-white-cards">
                            <Image  alt='' src={Recentpublic} className="w-100 img-fluid"  />                            
                             <div className="card-body px-4 py-2">
                              <a className='publication-category'>Whitepaper</a>
                               <h5 className="card-title mt-2">How Logilab ELN helps Organizations in Research Data Management</h5>
                                <p className="card-text mt-3">Research Data Management (RDM) refers to the methods of recording, organizing, storing, processing, and caring for information that is produced from a research project...</p>
                                <Link className='er_btn er_btn_two' href='/whitepaper-download'>Download</Link>
                        </div>
                    </div>
                        </div>

                        <div className='col-lg-6 mt-5'>
                        <div className="card recent-card">
                            <div className="card-body px-4 py-2">
                               <h5 className="card-title mt-2">Title -Loren ipsun dolor sit anet, consectetur adipisci elit</h5>
                                <p className="card-text mt-2 pb-4">Lorean ipsun dolor sit aneat, conseacteaturadipisci ealit, sead eaiusnod teanpor incidunt ut laborea eat dolorea</p>
                                <div className='w-100'><span className='explore-button'><a>Explore Product</a></span>
                                <span className='book-button'>Book A Demo</span></div>
                            </div>     
                        </div>
                     </div>

                     <div className='col-lg-6 my-5'>
                        <div className="card publication-white-cards">
                            <Image  alt='' src={Publicwhite} className="w-100 img-fluid"  />                            
                             <div className="card-body px-4 py-2">
                              <a className='publication-category'>Case Studies</a>
                               <h5 className="card-title mt-2">Qualis LIMS and Logilab ELN solution for Dairy Industry</h5>
                                <p className="card-text mt-3">Traditionally dairies have been using paper, excel or simple laboratory data management systems which are mere documentation systems rather than allowing organizations to use the knowledge for important...</p>
                                <Link className='er_btn er_btn_two' href='/casestudy-download'>Download</Link>
                        </div>
                    </div>        
                        </div>
                   
                   
                     {/* <div className='col-lg-6 my-5'>
                        <div className="card recent-bg">
                             <h5 className='card-title'>Free plan / exhibiting announcement</h5>   
                        </div>
                     </div> */}
                
                     <div className='col-lg-6 mt-5'>
                     <div className="card publication-white-cards">
                        <Image  alt='' src={Publicwhitetwo} className="w-100 img-fluid"  />                               
                             <div className="card-body px-4 py-2">
                             <a className='publication-category'>Case Studies</a>
                               <h5 className="card-title mt-2">Logilab SDMS and ELN in Cord Blood Repositories</h5>
                                <p className="card-text mt-2">Cord blood repositories today process several units which is becoming more and more difficult for such banks to use manual procedures to record information that called for by regulatory bodies like UFDA, AABB...</p>
                                <Link className='er_btn er_btn_two' href='/casestudy-download'>Download</Link>
                        </div>
                     </div>
                  
                       </div>
                
                     {/* <div className='col-lg-6 mt-5'>
                     <div className="card publication-white-cards">
                         <Image  alt='' src={Publicwhiteone} className="w-100 img-fluid"  />
                               
                             <div className="card-body px-4 py-2">
                               <h5 className="card-title mt-2">Title -Loren ipsun dolor sit anet, consectetur adipisci elit</h5>
                                <p className="card-text mt-2 pb-4">Lorean ipsun dolor sit aneat, conseacteaturadipisci ealit, sead eaiusnod teanpor incidunt ut laborea eat dolorea</p>
                                <a className='d-block pb-3' href='#'>Read More</a>
                        </div>
                    </div>
                     </div> */}
                     
                        {/* <a className='d-block pb-4 text-center mt-5 view-older'>View Older Publications</a> */}

                    </div>               
                </div>
          </div>      
                </div>
                <div className='Faq-section pb-5 pt-5'>
                <div className='container'>
                    <div className='row mx-2'>
                       <div className='col-lg-6 px-5'>
                               <div className='faq-card mt-5'>
                                    <h3 className='mx-5'>Still have questions ? </h3>
                                    <p className='mx-5 pt-4'>Visit our Help Center to get a comprehensive overview of Logilab ELN and its capabilities</p>
                                    <Link  href='https://helpcenter.agaramtech.com/helpcenter/elnartical/elntroublearticle/'className='d-block text-end px-5 pt-5' >Help Center <span> 
                                    <Image  alt='' src={Helparrow} className=""  style={{width:'25px'}}/>
                                      
                                         </span>
                                         </Link>
                                </div> 
                       </div>
                       <div className='col-lg-6 px-5'>
                       <div className=' faq-card-tow  mt-5'> 
                                    <h3 className='mx-5'>Interested in our ELN ?</h3>
                                    <p className='mx-5 pt-4'>Click the link below to schedule a quick Demo  </p>
                                    <div className='d-flex justify-content-end px-5 mt-5'>
                                      <Link href='/request-a-demo' className='er_btn er_btn_two'>Book A Demo</Link>
                                    </div>
                                    
                                </div> 
                       </div>
                    </div>
                </div>              
            </div> 
            <Footer/>
        </div>
  );
};

export default Whitepaper;
