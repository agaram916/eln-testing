"use client";
import Summary from "@/components/summary";
import  Link  from 'next/link'
import Footer from "../../footer";
import home_calender from '../../../public/assets/images/home_calender.svg'
import useScroll from '../../useScroll';
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import { Link as ScrollLink  } from "react-scroll";
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import QA_Labsheet from '../../../public/assets/images/QA_Labsheet.svg'
import Tracable from '../../../public/assets/images/Tracable.svg'
import Taskorder from '../../../public/assets/images/Taskorder.svg'
import Maintainrecord from '../../../public/assets/images/Maintainrecord.svg'
import raw_data from '../../../public/assets/images/raw_data.svg'
import loglab_Eln from '../../../public/assets/images/loglab_Eln.svg';
import loginewimage from '../../../public/assets/images/loginewimage.svg'
import cta2 from '../../../public/assets/images/cta2.svg' 
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
export default function QA(){
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
        <div className="soltionbg solutionmain security_banner_content">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Accurate, Compliant, Paperless
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                    Efficient data capture with our intuitive ELN for top-tier QC lab performance
                    </p>
                    <div className="action_btn d-flex justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
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
          <div className="tab-ara ">
          <nav
            id="navbar-example2"
            className="navbar navbar-light px-3 pt-0 bg-body d-flex justify-content-center "
          >
            <ul className="nav nav-pills py-2 qaqclink navsize">
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
                  <small className="mb-0 hover_bottom  f_900 border1">
                  Labsheets UI{" "}
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
                  Research Data Capture
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
                  Dynamic Task System
                  </small>
                </ScrollLink>
              </li>
              <li className="nav-item border-right">
                <ScrollLink
                  to="scrollspyHeading4"
                  data-nav="capture-contacts3"
                  className="bottom_bodder text-center nav-link mx-3 f_600"
                  aria-current="page"
                  spy={true}
                  smooth={true}
                  offset={offset4}
                  duration={20}
                >
                  <small className="mb-0 hover_bottom  f_900 border1">
                  Inventory
                  </small>
                </ScrollLink>
              </li>
              <li className="nav-item border-right">
                <ScrollLink
                  to="scrollspyHeading5"
                  data-nav="capture-contacts4"
                  className="bottom_bodder text-center nav-link mx-3"
                  aria-current="page"
                  spy={true}
                  smooth={true}
                  offset={offset5}
                  duration={20}
                >
                  <small className="mb-0 hover_bottom f_900 border1">
                  Connect Instruments
                  </small>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        </div>    
   <div id="next-section">  
   <div className="next-section">
  {/* First*/}
     <div className="container py-5 mt-5 sectionresolution" id="scrollspyHeading1">
       <div className="row">
         <div className="col-lg-6 ">
         <div className="firstcontent_before">
           <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Labsheets — Simple, Yet Powerful Spreadsheet UI</h3>
           <h6 className="fw-bold pb-3 topicsechead_response">Streamline and standardize data on all levels</h6>
            <div>
              <div className="d-flex w-50">
                  <p className="firstcontent1 text-center ps-3 mb-0 fw-bold text-black">Simplify lab data entry</p>
              </div>
              <p className=" text-black pt-1 firstp qaqafirstcontent">Create form-like input templates for experiments, day-to-day logbooks,  SOP’s etc</p>
            </div>

            <div>
              <div className="d-flex w-50">
                <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">Kickstart your research</p>
              </div>
              <p className="text-black pt-1 firstp">Design your own spreadsheets — drag and drop the fields you want</p>
            </div>

            <div>
              <div className="d-flex w-50">
                <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">All, in a single place</p>
              </div>
              <p className="text-black pt-1 firstp">Manage multi-workbook templates for independent  data capture</p>
            </div>

            <div>
              <div className="d-flex w-50">
                <p className="firstcontent4 text-center ps-3 mb-0 fw-bold text-black">Calculate on the go</p>
              </div>
              <p className="text-black pt-1 firstp">Execute complex formulae within spreadsheets during the experiment</p>
            </div>
            
          </div>
         </div>
              <div className="col-lg-6">
                <div className="solution_border firstcontent_after p-4 sectionresolution"> 
                <Image src={QA_Labsheet} className="img-fluid" 
                alt="Simplify laboratory data entry with Logilab Electronic Notebook's form-like templates 
                called Labsheets — choose your fields, attach diverse forms of data and perform complex 
                calculations in real-time."/>
                </div>
                
              </div>
       </div>
     </div>
   
    
  {/*second*/}

     <div className="container py-5 sectionresolution" id="scrollspyHeading2">
       <div className="row">

         <div className="col-lg-6 order-two">
          <div className="solutionSecond_border p-4 mt-5 sectionresolution">
          <Image src={Tracable} className="img-fluid " 
          alt="Ensure traceable and controlled research data capture with Logilab ELN software's specialized 
          field-based data input and auto-versioning of all modifications."/>
          </div>
          
         </div>

         <div className="col-lg-6 ps-5 pt-5 sectionresolution">
           <div className="secondcontent_after">
           <h3 className="solution_fontcolor fw-bold  mb-2 topichead_response">Fully Traceable & Controlled Data Capture</h3>
           <h6 className="fw-bold pb-3 topicsechead_response">Seamless data capture facilitated by dynamic features</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent1 text-center ps-3 mb-0 fw-bold text-black">Everything has its place</p>
              </div>
              <p className="text-black pt-1 firstp">Specialized field-based data input to reduce human errors</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Tag all and more</p>
              </div>
              <p className="text-black pt-1 firstp qaqafirstcontent">Attach text, numeric data, dropdown lists, formulas, images — the list  goes on</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Stay on top of every change</p>
              </div>
              <p className="text-black pt-1 firstp">Auto-versioning of all modifications made to existing data</p>
            </div> 

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent4 text-center ps-3 mb-0 fw-bold text-black">Link data together</p>
              </div>
              <p className="text-black pt-1 firstp">Connect data across multiple files to form summary reports</p>
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
            <h3 className="solution_fontcolor fw-bold mb-2 topichead_response">Dynamic Task Ordering System For Accurate Method Execution
            </h3>
            <h6 className="fw-bold pb-3 topicsechead_response">Sail smoothly through your laboratory tasks</h6>
              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent1 text-center ps-3 mb-0 fw-bold text-black">Kickstart your experimentation</p>
                </div>
                <p className="text-black pt-1 firstp">Register and place task orders for various tests and experiments</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent2 text-center ps-3 mb-0  fw-bold text-black">Elevate project management</p>
                </div>
                <p className="text-black pt-1 firstp">Place orders against projects and allocate orders to users within your team</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Secure workflows with e-signs</p>
                </div>
                <p className="text-black pt-1 firstp">Review and approve tasks with electronic signatures</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent4   text-center ps-3 mb-0 fw-bold text-black">Integrate everything in your lab</p>
                </div>
                <p className="text-black pt-1 firstp">Register, execute and send back task orders interchangeably between Qualis LIMS and Logilab ELN</p>
              </div>

          </div>  
         </div>

         <div className="col-lg-6"> 
            <div className="soluttionthird_border thirdcontent_after p-4 sectionresolution">
            <Image src={Taskorder} className="img-fluid " 
            alt="Elevate your project managment with Logilab Electronic Lab Notebook's configurable 
            workflows —  register and execute test procedures, place task orders and monitor laboratory 
            activities."/>  
            </div>
             
         </div>
       </div>
    </div>


     {/* fourth */}
    <div className="container py-5 sectionresolution" id="scrollspyHeading4">
       <div className="row">

         <div className="col-lg-6 order-two ">
          <div className="solutionSecond_border p-4 mt-5 sectionresolution">
          <Image src={Maintainrecord} className="img-fluid " 
          alt="Logilab Electronic Laboratory Notebook's advanced inventory management helps you keep 
          track all of your labortory supplies and instruments, stock levels as well suppliers' details."/>    
          </div>
          
         </div>

         <div className="col-lg-6 ps-5 pt-5 sectionresolution">
          <div className="secondcontent_after">
           <h3 className="solution_fontcolor fw-bold mb-2 topichead_response">Advanced Inventory Management</h3>
           <h6 className="fw-bold pb-3 topicsechead_response">Monitor all of your supply usage at a glance</h6>
            <div>
              <div className="d-flex w-50">
                <p className="secondcontent1 text-center ps-3 mb-0 fw-bold text-black">Track the supply</p>
              </div>
              <p className="text-black pt-1 firstp">Create and manage configurable repositories of inventory materials</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0  fw-bold text-black">Know your stock levels</p>
              </div>
              <p className="text-black pt-1 firstp">Track inventory usage, reorder levels and expiry dates across experiments</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3  mb-0 fw-bold text-black">Specialized data entry</p>
              </div>
              <p className="text-black pt-1 firstp">Create data fields for samples based on each inventory type</p>
            </div> 

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent4 text-center ps-3 mb-0 fw-bold text-black">Set-up supplier database</p>
              </div>
              <p className="text-black pt-1 firstp">Maintain records of suppliers and manufactures</p>
            </div>
            
          </div>
         </div>
        
       </div>
     </div>


     {/* fivth */}


     <div className="container py-5 sectionresolution" id="scrollspyHeading5">
       <div className="row">
         <div className="col-lg-6 pt-5 sectionresolution">
          <div className="thirdcontent_before">
           <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Capture Data from Analytical Instruments
           </h3>
           <h6 className="fw-bold pb-3 topicsechead_response">Eradicate errors by collecting data directly from instruments</h6>
            <div>
              <div className="d-flex  w-50">
                  <p className="thirdcontent1 text-center ps-3 mb-0 fw-bold text-black">Accurate data — from the source</p>
              </div>
              <p className="text-black pt-1 firstp">Advanced parsing engine to extract data of interest from instruments</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Efficient data flow</p>
              </div>
              <p className="text-black pt-1 firstp">Automatically capture data from multiple PC-based instruments to Labsheets</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="thirdcontent4 text-center ps-3 mb-0 fw-bold text-black">Integrate Port-based instruments</p>
              </div>
              <p className="text-black pt-1 firstp">Port-based data capture for standalone instruments with RS232/TCP IP ports</p>
            </div>

           </div>
         </div>

         <div className="col-lg-6 "> 
            <div className="soluttionthird_border thirdcontent_after p-4 sectionresolution">
            <Image src={raw_data} className="img-fluid " 
            alt="Logilab ELN software utilizes an advanced parsing engine to extract key values directly 
            from standalone instruments as well as PC-based instruments and transfers data efficiently 
            to Labsheets."/> 
            </div>
             
         </div>
       </div>
    </div>


  </div>

    <div id="last-container"> 
    <div className="cont backgr_col calender_cont">
    <div className="Devepoe_space">
                    <div className="">
                      <div className='container tab2 mt-3 py-5'>
                        <div className="row">
                          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center request-demo">
                            <div className=" text-center logpositionchange">
                                <h3 className="Ensure mt-3 f_800 l_height15">Deliver accurate results with <br/> Logilab ELN
                                </h3>
                                <div className="d-flex justify-content-center align-items-center mt-4">
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
                              <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center request-demo">                            
                                        <div className="text-center">
                                          <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                          <h3 className="text-white mt-3 f_800">Digitize. Simplify. Organize.</h3>
                                          <p className="Ensure-sub ">Kickstart your paperless lab with Logilab ELN </p>
                                          <div className=" d-flex pb-3">
                                            <div className="action_btn job-button text-md cont_compare">
                                               <Link href="/request-a-demo" className="btn btn--blue">Request a Demo</Link>
                                            </div>
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