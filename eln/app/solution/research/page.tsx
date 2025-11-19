"use client";
import Summary from "@/components/summary";
import Footer from "../../footer";
import useScroll from '../../useScroll';
import { Link as ScrollLink  } from "react-scroll";
import React, {useState, useEffect } from 'react';
import Image from "next/image";
import lab from '../../../public/assets/images/lab.svg'
import Data_Capture from '../../../public/assets/images/Data_Capture.svg'
import Product_develop from '../../../public/assets/images/Product_develop.svg'
import loglab_Eln from '../../../public/assets/images/loglab_Eln.svg';
import loginewimage from '../../../public/assets/images/loginewimage.svg'
import  Link  from 'next/link'
import cta2 from '../../../public/assets/images/cta2.svg' 
import home_calender from '../../../public/assets/images/home_calender.svg'
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
export default function Research_Developement(){
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const { isSticky, nextSectionTop, lastContainerBottom, isHidden ,offset1, offset2, offset3,offset4,offset5 } = useScroll();
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => setLoading(false), 500); // Wait for animation to finish before hiding
    }, 1000); // Adjust duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }
return(
      <div>

        <Header/>
        <div className="soltionbg research_acadmic-banner security_banner_content">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4 recharge-banner">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Efficient, Collaborative, Innovative
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                    Streamlined research, enhanced discovery with Logilab ELN’s advanced protocol design.
                    </p>
                    <div className="d-flex action_btn justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
                      <Link href="/request-a-demo" className="btn btn--white text-center">
                        Request a Demo
                      </Link>
                      <Link href="/product-brochure-download" className="btn btn--white mx-4 text-center">
                          Download Brochure
                      </Link>
                    </div>
                    
                  </div>
                </div>
        
              </div>
            </div>
        </div>

              <div className="erp_banner_area_two">
                  <div className="section_intro bg-lblue">
                  </div>
              </div>


          <div id="sticky-anchor"></div>
          <div id="sticky" className={isSticky && !isHidden ? "stick" : ""}>
          <div className="tab-ara">
          <nav
            id="navbar-example2"
            className="navbar navbar-light px-3 pt-0 bg-body d-flex justify-content-center "
          >
            <ul className="nav nav-pills py-2">
              <li className="nav-item border-right">
                <ScrollLink
                  to="scrollspyHeading1"
                  data-nav="capture-contacts"
                  className="bottom_bodder text-center nav-link mx-3 "
                  aria-current="page"
                  spy={true}
                  smooth={true}
                  offset={offset1}
                  duration={20}
                >
                  <small className="mb-0 hover_bottom f_900 border1">
                  Paperless Processes{" "}
                  </small>
                </ScrollLink>
              </li>

              <li className="nav-item border-right">
                <ScrollLink
                  to="scrollspyHeading2"
                  data-nav="capture-contacts1"
                  className="bottom_bodder text-center nav-link mx-3 f_600"
                  aria-current="page"
                  spy={true}
                  smooth={true}
                  offset={offset2}
                  duration={20}
                >
                  <small className="mb-0 hover_bottom f_900 border1">
                  Seamless Data Capture
                  </small>
                </ScrollLink>
              </li>
              <li className="nav-item border-right">
                <ScrollLink
                  to="scrollspyHeading3"
                  data-nav="capture-contacts2"
                  className="bottom_bodder text-center nav-link mx-3 f_600"
                  aria-current="page"
                  spy={true}
                  smooth={true}
                  offset={offset3}
                  duration={20}
                >
                  <small className="mb-0 hover_bottom f_900 border1">
                  Product Development
                  </small>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        </div>
<div className="">

</div>
       
   <div id="next-section">    

<div className="next-section">
<div className="container py-5 mt-5 sectionresolution" id="scrollspyHeading1">
      <div className="row">
        <div className="col-lg-6 sectionresolution">
        <div className="firstcontent_before">
          <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Truly Paperless Environment For Laboratory Tasks</h3>
          <h6 className="fw-bold pb-3 topicsechead_response">Integrate and perform all of your lab processes in an unified platform</h6>
            <div>
              <div className="d-flex  w-50">
                  <p className="firstcontent1 text-center ps-3 mb-0 fw-bold text-black">Sample by sample</p>
              </div>
              <p className=" text-black pt-1 firstp">Perform assays for different types of samples</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">Level up your experiments</p>
              </div>
              <p className="text-black pt-1 firstp">Execute multi-step SOPs for test methods</p>
            </div>

            <div>
              <div className="d-flex w-50">
                <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">Effortless results</p>
              </div>
              <p className="text-black pt-1 firstp">Perform complex calculations using predefined formulas in real-time</p>
            </div>

            <div>
              <div className="d-flex w-50">
                <p className="firstcontent4 text-center ps-3 mb-0 fw-bold text-black">Check the boxes</p>
              </div>
              <p className="text-black pt-1 firstp">Maintain logs and checklists for regular day-to-day lab activities</p>
            </div>
            
         </div> 
        </div>
              <div className="col-lg-6">
                <div className="solution_border firstcontent_after p-4 sectionresolution"> 
                <Image src={lab} className="img-fluid " 
                alt="Achieve an efficient paperless environment with Logilab Electronic Lab Notebook — create 
                dynamic SoPs, conduct assays, mantain audit logs for your research and development processes."/>
                </div>
                
              </div>
      </div>
    </div>


    {/*second*/}

    <div className="container py-5 sectionresolution" id="scrollspyHeading2">
      <div className="row">

        <div className="col-lg-6 order-two ">
          <div className="solutionSecond_border p-4 mt-5 sectionresolution">
          <Image src={Data_Capture} className="img-fluid" 
          alt="Accurately capture your R&D data with Logilab Electronic Laboratory Notebook's predefined 
          spreadsheets and SoPs  — insert numeric data, chemical drawings, images, etc."/>
          </div>
          
        </div>

        <div className="col-lg-6 ps-5 pt-5 sectionresolution">
         <div className="secondcontent_after">
          <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Protocol-Based Data Capture For On-The-Go Experiments</h3>
          <h6 className="fw-bold pb-3 topicsechead_response">Capture free-form data for experiments/test procedures</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent1 text-center ps-3 mb-0 fw-bold text-black">One-stop solution for R&D</p>
              </div>
              <p className="text-black pt-1 firstp researchcontent">Record R&D processes on product specifications, raw materials and samples</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Accelerate efficiency</p>
              </div>
              <p className="text-black pt-1 firstp">Save time by using predefined SOPs during method execution</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Store in diverse formats</p>
              </div>
              <p className="text-black pt-1 firstp researchcontentsecond">Capture data in multiple formats such as tables, images, chemical drawings and more</p>
            </div> 

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent4 text-center ps-3 mb-0 fw-bold text-black">E-reports</p>
              </div>
              <p className="text-black pt-1 firstp">Create dynamic reports on-the-go for the experiment in hand</p>
            </div>
            
          </div> 
        </div>
        
      </div>
    </div>

    {/* Third Row */}

    <div className="container py-5 sectionresolution" id="scrollspyHeading3">
      <div className="row">
        <div className="col-lg-6 pt-5 sectionresolution">
        <div className="thirdcontent_before">
          <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Optimized for Basic Research & Applied Process/Product development</h3>
          <h6 className="fw-bold pb-3 topicsechead_response">Standardize lab data management and streamline workflows</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent1 text-center ps-3 mb-0 fw-bold text-black">Refine data collection</p>
              </div>
              <p className="text-black pt-1 firstp">Capture R&D data in real-time or use pre-defined templates</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Streamline every step</p>
              </div>
              <p className="text-black pt-1 firstp">Setup configurable workflows to manage and monitor lab processes</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Your to-do list for samples</p>
              </div>
              <p className="text-black pt-1 firstp">Place task orders for testing samples as required by research personnel</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent4   text-center ps-3 mb-0 fw-bold text-black">Straight from the source</p>
              </div>
              <p className="text-black pt-1 firstp">Reduce manual errors by directly extracting data from instruments</p>
            </div>
          </div> 
        </div>

        <div className="col-lg-6 "> 
            <div className="soluttionthird_border thirdcontent_after p-4 sectionresolution">
            <Image src={Product_develop} className="img-fluid " 
            alt="Set up configurable workflows and monitor all of your lab processes efficiently with Logilab 
            ELN software  — assign user privileges, manage task orders, and ensure streamlined lab operations."/>  
            </div>
            
        </div>
      </div>
    </div>

</div>
    {/* First*/}


  
    
  <div id="last-container">   
  <div className="cont backgr_col calender_cont">
    <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 mt-3 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center request-demo">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 ensure-footer">Bridge the Gap Between you and your Breakthroughs 
                              </h3>
                              <div className="d-flex  justify-content-center align-items-center mt-4">
                                  <div className="action_btn job-button text-md cont_compare ">
                                    <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue  ">Get Started</Link>
                                  </div>
                                  <div className="action_btn job-button text-md Registorheader">
                                    <Link href="/pricing" className="btn btn--blue ms-4">Compare Plans</Link>
                                  </div>
                              </div>
                          </div>
                        </div>

                          <div className="col-lg-6 imageposition">    
                            <Image src={cta2} className="img-fluid w-75  imageposition-width" 
                            alt="Adopt Agaram's Logilab Electronic Lab Notebook to centralize your research 
                            data and stay compliant to 21 CFR Part 11, ALCOA principles, etc."/>                
                          </div>
                      </div>                     
                    </div>
                  </div>
                </div>

      
                    <div className=" last_imag_backgr pt-5">
                        <div className="container">
                    <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                            <Image src={home_calender} className="img-fluid" 
                            alt="Contact Agaram Technologies to schedule a demo and discover how Logilab 
                            Electronic Laboratory Notebook can transform your lab's record-keeping."/>
                            </div>
                    
                          <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center ">                            
                                      <div className="text-center">
                                         <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                         <h3 className="text-white mt-3 f_800">Digitize. Simplify. Organize.</h3>
                                         <p className="Ensure-sub">Kickstart your lab with Logilab ELN </p>
                                        <div className="d-flex pb-3">
                                          <div className="action_btn job-button text-md cont_compare ">
                                          <Link href="/request-a-demo" className="btn btn--blue">Request a Demo</Link></div>
                                          <div className="action_btn job-button text-md Registorheader">
                                            <Link href="/product-brochure-download" className="btn btn--blue ms-4">Download Brochure</Link>
                                          </div>
                                        </div>
                                       </div>                                                              
                            </div>


                      </div>                     
                    </div>
                  </div>
  </div>	
  </div>
  
  </div>    
      <Footer/> 
</div>  
);
}