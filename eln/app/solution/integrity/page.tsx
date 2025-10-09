"use client";
import Summary from "@/components/summary";
import Footer from "../../footer";
import useScroll from '../../useScroll';
import { Link as ScrollLink  } from "react-scroll";
import  Link  from 'next/link'
import React, {useState, useEffect } from 'react';
import Image from "next/image";
import Controlls from '../../../public/assets/images/Controlls.svg'
import complient from '../../../public/assets/images/complient.svg'
import Comprehensive_audit_trails from '../../../public/assets/images/Comprehensive_audit_trails.svg'
import cta2 from '../../../public/assets/images/cta2.svg' 
import home_calender from '../../../public/assets/images/home_calender.svg'
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
export default function Integrity(){
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
          <SyncLoader color="#1163ea" size={20}/>
        </div>
      );
    }
  return(
    <div>
        <Header/>
       <div className="soltionbg integrity security_banner_content">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4 recharge-banner">
                  <div className="solution_security_banner_content bannerresolution">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Frictionless, Future-proof, Secure
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                    Face audits at the click of a button. Build a compliant lab today.
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
                  Role Management{" "}
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
                  GxP Compliance
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
                  Audit Trails
                  </small>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        </div>

       
   <div id="next-section">    


  {/* First*/}
<div className="next-section">
<div className="container py-5 mt-5 sectionresolution" id="scrollspyHeading1">
    <div className="row">
      <div className="col-lg-6 sectionresolution">
       <div className="firstcontent_before">
        <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Controlled roles and rights-based access to data</h3>
        <h6 className="fw-bold pb-3 topicsechead_response">Choose who and when to grant user privileges</h6>
          <div>
            <div className="d-flex  w-50">
                <p className="firstcontent1 text-center ps-3 mb-0 fw-bold text-black">Customizable screen access</p>
            </div>
            <p className=" text-black pt-1 firstp">Allow access or hide screens from users and groups</p>
          </div>

          <div>
            <div className="d-flex  w-50">
              <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">User Administration</p>
            </div>
            <p className="text-black pt-1 firstp">Enable controlled access to modules and system functions</p>
          </div>

          <div>
            <div className="d-flex  w-50">
              <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">Determine actions as per roles</p>
            </div>
            <p className="text-black pt-1 firstp">Assign roles to users for data capture, review and validation of data</p>
          </div>

          <div>
            <div className="d-flex  w-50">
              <p className="firstcontent4 text-center ps-3 mb-0 fw-bold text-black">Manage user status</p>
            </div>
            <p className="text-black pt-1 firstp">Temporarily deactivate or permanently retire inactive users</p>
          </div>
          
         </div> 
      </div>
            <div className="col-lg-6">
              <div className="solution_border firstcontent_after p-4 sectionresolution"> 
              <Image src={Controlls} className="img-fluid" 
              alt="Collaborate securely with Logilab Electronic Lab Notebook's advanced user management 
              feautres - approve tasks with e-signs, personalize prividleges and more."/>  
              </div>
              
            </div>
    </div>
  </div>


  {/*second*/}

  <div className="container py-5 sectionresolution" id="scrollspyHeading2">
    <div className="row">

      <div className="col-lg-6 order-two">
        <div className="solutionSecond_border p-4 mt-5 sectionresolution">
        <Image src={complient} className="img-fluid" 
        alt="Ensure traceability through e-signs with and store data securely in Microsoft Azure cloud 
        servers with Electronic Lab Notebook"/>    
        </div>
        
      </div>

      <div className="col-lg-6 ps-5 pt-5 sectionresolution">
       <div className="secondcontent_after">
          <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Achieve GLP & data integrity compliance</h3>
          <h6 className="fw-bold pb-3 topicsechead_response">Ensure reliable and reproducible results across your lab</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent1 text-center ps-3 mb-0 fw-bold text-black">Up in the clouds</p>
              </div>
              <p className="text-black pt-1 firstp">Secure storage of data in Microsoft Azure cloud servers</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">No shutdowns</p>
              </div>
              <p className="text-black pt-1 firstp dataintegritycontent">Advanced geo-redundancy and high availability configurations to eliminate downtime</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Track and validate</p>
              </div>
              <p className="text-black pt-1 firstp">Traceability through electronic signatures and audit trails</p>
            </div> 

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent4 text-center ps-3 mb-0 fw-bold text-black">Comply with Regulatory bodies</p>
              </div>
              <p className="text-black pt-1 firstp">Compliant to 21 CFR Part 11 and EudraLex Annex 11</p>
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
        <h3 className="solution_fontcolor fw-bold mb-2  topichead_response">Comprehensive audit trails</h3>
        <h6 className="fw-bold pb-3 topicsechead_response">Keep track of all actions performed within Logilab ELN</h6>
          <div>
            <div className="d-flex  w-50">
              <p className="thirdcontent1 text-center ps-3 mb-0 fw-bold text-black">Detailed activity logs</p>
            </div>
            <p className="text-black pt-1 firstp">Date and time stamped records for all user and system generated actions</p>
          </div>

          <div>
            <div className="d-flex  w-50">
              <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Complete audit control</p>
            </div>
            <p className="text-black pt-1 firstp">Built-in review, archival and export of all audit trails records at any time</p>
          </div>

          <div>
            <div className="d-flex w-50">
              <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Full Traceability for all data</p>
            </div>
            <p className="text-black pb-2 pt-2 firstp">Ensure accountability and transparency in every experiment</p>
          </div>

          <div>
            <div className="d-flex w-50">
              <p className="thirdcontent4   text-center ps-3 mb-0 fw-bold text-black">Team collaboration visibility</p>
            </div>
            <p className="text-black pt-1 firstp">Get a complete view of collaborative efforts and workflow changes in real time</p>
          </div>
          
        </div>  
      </div>

      <div className="col-lg-6"> 
          <div className="soluttionthird_border thirdcontent_after p-4 sectionresolution">
          <Image src={Comprehensive_audit_trails} className="img-fluid" 
          alt="Be audit-ready with Logilab Electronic Lab Notebook's extensive audit trails and version 
          control features. Stay compliant to 21 CFR Part 11, GLP and EudraLex Annex 11 standards."/>
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
                              <h3 className="Ensure mt-3 f_800 l_height15 ensure-footer">Facilitate Compliance and Collaboration with Logilab ELN 
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
                                         <div className="d-flex action_btn pb-3">
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
  ) ; 
}