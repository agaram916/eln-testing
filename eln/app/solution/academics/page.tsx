"use client";
import Summary from "@/components/summary";
import { TbArrowNarrowRight } from "react-icons/tb";
import Footer from "../../footer";
import useScroll from '../../useScroll';
import { Link as ScrollLink  } from "react-scroll";
import  Link  from 'next/link'
import React, {useState, useEffect } from 'react';
import Image from "next/image";
import Accelerate_collaboration from '../../../public/assets/images/Accelerate_collaboration.svg'
import centralized_repository from '../../../public/assets/images/centralized_repository.svg'
import Trace_Flow from '../../../public/assets/images/Trace_Flow.svg'
import loginewimage from '../../../public/assets/images/loginewimage.svg'
import percentage_symbol from '../../../public/assets/images/percentage_symbol.svg'
import dollar_symbol from '../../../public/assets/images/dollar_symbol.svg'
import discount_hand from '../../../public/assets/images/discount_hand.svg'
import purble_blu from '../../../public/assets/images/purble_blu.svg'
import pink_blu from '../../../public/assets/images/pink_blu.svg'
import cta2 from '../../../public/assets/images/cta2.svg' 
import home_calender from '../../../public/assets/images/home_calender.svg'
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import elnlite_finalfontsize from '../../../public/assets/images/loglab_Eln_new_accadmic.svg'
import academyfirst from '../../../public/assets/images/academyfirst.svg'
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
export default function Academi(){
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
        <div className="soltionbg acadmic-banner security_banner_content">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4 recharge-banner">
                  <div className="solution_security_banner_content text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Straightforward, Collaborative, Procedural
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center" data-wow-delay="0.4s">
                    Enhanced academic research with easy data capture, peer collaboration, and increased productivity in a unified ELN.
                    </p>
                    <div className="d-flex action_btn justify-content-center mt_40 bannerresolution_btn academi-reposive" data-wow-delay="0.6s">

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

      {/* First*/}
      
      <div className="">
        <div className=" acadmey_bgcol py-4">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 mt-5">
                    <div className="mt-2">
                      {/* <h1>Logilab ELN Lite</h1> */}
                      <Image src={elnlite_finalfontsize} className="academylogo img-fluid   pt-2 pb-2" alt=""/>
                      <p>Streamline lab recordkeeping without breaking the budget</p>
                      <li className="bullet_none mt-4">
                        <Image src={percentage_symbol} className="img-fluid mr-2" style={{marginRight:"8px"}} 
                        alt="Access Electronic Lab Notebook free for 90 days"/>
                        Get hands-on experience with the ELN & explore all its features
                      </li>
                      <li className="bullet_none mt-4">
                        <Image src={dollar_symbol} className="img-fluid mr-2" style={{marginRight:"8px"}} 
                        alt="Electronic Lab Notebook free for upto 10 team members"/>
                        <span>
                          Invite up to 3 users and collaborate for free
                        </span>
                      </li>
                      <li className="bullet_none mt-4 acadyfontposition">
                        <Image src={discount_hand} className="img-fluid"  style={{marginRight:"8px"}} 
                        alt="Image Tag - Upgrade from Logilab ELN Academics to ELN Premium for added discounts"/>
                        <span>
                        Get <del> 30%</del> 40% off + added 10% annual discount when you purchase the Premium edition
                        </span>
                      </li>
                      <Link  href="https://logilabelnlite.azurewebsites.net/register"  className="btn academybtn mt-3">Get Started. It's free</Link>
                    </div>
                  </div> 
                  
                  <div className="col-lg-6 mt-5 pt-3">
                  <Image src={academyfirst} className="img-fluid"  alt=""/>
                  </div>      

              </div>
          </div>
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
                  Unified workspace{" "}
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
                  Collaborative
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
                  Data traceability
                  </small>
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>
        </div>
   
    
  <div id="next-section">   
  {/*second*/}

     <div className="container py-5 mt-5 sectionresolution" id="scrollspyHeading1">
       <div className="row">
         <div className="col-lg-6 sectionresolution">
          <div className="firstcontent_before">
           <h3 className="solution_fontcolor fw-bold mb-2 ">Centralized repository for all your experiments</h3>
           <h6 className="fw-bold pb-3">Unify all of your research data in a single space</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="firstcontent1 text-center ps-3 mb-0 fw-bold text-black">Enter, attach and upload</p>
              </div>
              <p className=" text-black pt-1">Input data seamlessly in Labsheets and Protocol templates</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="firstcontent2 text-center ps-3 mb-0 fw-bold text-black">Optimize workflows</p>
              </div>
              <p className="text-black pt-1">Set-up task ordering system and configurable workflows</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="firstcontent2 text-center ps-3 fw-bold mb-0 text-black">Sort files and folders</p>
              </div>
              <p className="text-black pt-1">Organize projects with dynamic folder-based interface</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="firstcontent4 text-center ps-3 mb-0 fw-bold text-black">Versatile data transfer</p>
              </div>
              <p className="text-black pt-1">Flexible import and export options such as Word, Excel and JSON</p>
            </div>
            
           </div> 
         </div>
              <div className="col-lg-6">
                <div className="solution_border firstcontent_after p-4 sectionresolution"> 
                <Image src={centralized_repository} className="img-fluid " 
                alt="Integrate all of your lab activities from sample management to workflows seamlessly 
                in Logilab Electronic Lab Notebook"/>  
                </div>
                
              </div>
       </div>
     </div>
   
    
{/* Third Row */}

     <div className="container py-5 sectionresolution" id="scrollspyHeading2">
       <div className="row">

         <div className="col-lg-6  order-two">
          <div className="solutionSecond_border p-4 mt-5 sectionresolution">
          <Image src={Accelerate_collaboration} className="img-fluid" 
          alt="Log-in from anywhere and continue your research globally with Logilab Electronic 
          Laboratory Notebook."/>  
          </div>
          
         </div>

         <div className="col-lg-6 ps-5 pt-5 sectionresolution">
          <div className="secondcontent_after">
           <h3 className="solution_fontcolor fw-bold mb-2 ">Accelerate collaboration and data sharing</h3>
           <h6 className="fw-bold pb-3">No more communication gaps between your teams</h6>
            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent1 text-center ps-3 mb-0 fw-bold text-black">Log-in from anywhere</p>
              </div>
              <p className="text-black pt-1">Access data globally with Logilab ELN’s cloud-based multi-site architecture</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Stay ahead</p>
              </div>
              <p className="text-black pt-1">Start immediately — Take notes and conduct experiments on the go</p>
            </div>

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent2 text-center ps-3 mb-0 fw-bold text-black">Connect worldwide</p>
              </div>
              <p className="text-black pt-1">Hassle-free collaboration despite the distance</p>
            </div> 

            <div>
              <div className="d-flex  w-50">
                <p className="secondcontent4 text-center ps-3 mb-0 fw-bold text-black">Ensure Data Integrity</p>
              </div>
              <p className="text-black pt-1">Experiments once completed cannot be tampered with, and e-signatures ensure full traceability</p>
            </div>
            
          </div>  
         </div>
        
       </div>
     </div>

  {/* four Row */}
    
  <div className="container py-5 sectionresolution" id="scrollspyHeading3">
       <div className="row">
         <div className="col-lg-6 pt-5 sectionresolution">
          <div className="thirdcontent_before">
            <h3 className="solution_fontcolor fw-bold mb-2 ">Trace the flow and stay on track</h3>
            <h6 className="fw-bold pb-3">Execute experiments, tasks, and projects efficiently</h6>
              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent1 text-center ps-3 mb-0 fw-bold text-black">On schedule</p>
                </div>
                <p className="text-black pt-1">Monitor your team’s progress and stay ahead of deadlines.</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Fully preserved</p>
                </div>
                <p className="text-black pt-1 academycontent">No accidental loss of data — data remains forever in the system through version control</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent2 text-center ps-3 mb-0 fw-bold text-black">Manage access</p>
                </div>
                <p className="text-black pt-1">Assign permissions and privileges to your lab-mates as required for projects</p>
              </div>

              <div>
                <div className="d-flex  w-50">
                  <p className="thirdcontent4   text-center ps-3  mb-0 fw-bold text-black">At a glance</p>
                </div>
                <p className="text-black pt-1">See real-time project insights and status updates with comprehensive dashboard</p>
              </div>
          </div>
         </div>
         <div className="col-lg-6  "> 
            <div className="soluttionthird_border  thirdcontent_after p-4 sectionresolution">
            <Image src={Trace_Flow} className="img-fluid" 
            alt="Stay ahead of your lab's progess with real-time updates and ensure full compliance 
            to GLP with Logilab ELN Software"/>  
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
                                <h3 className="Ensure mt-3 f_800 l_height15 ensure-footer">Drive scientific progress forward with Logilab ELN
                                </h3>
                                {/* <div className="d-flex justify-content-center align-items-center mt-4 request-demo"> 
                                          <Link href="/request-a-demo" className="btn btn--blue ">Request a Demo</Link>         
                                  </div> */}

                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <div className="action_btn job-button text-md cont_compare">
                                            <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue ">Get Started</Link>
                                        </div>
                                        <div className="action_btn job-button text-md Registorheader">
                                          <Link href="/pricing" className="btn btn--blue ms-4">Compare Plans</Link>
                                        </div>
                                    </div>
                                </div>
                          </div>

                            <div className="col-lg-6 imageposition">    
                            <Image src={loginewimage} className="img-fluid w-75  imageposition-width" 
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
                              alt="Contact Agaram Technologies to schedule a demo and discover how Logilab Electronic 
                              Laboratory Notebook can transform your lab's record-keeping."/>
                              </div>
                              <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center request-demo">                            
                                        <div className="text-center">
                                          <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                          <h3 className="text-white mt-3 f_800">Digitize. Simplify. Organize.</h3>
                                          <p className="Ensure-sub ">Kickstart your paperless lab with Logilab ELN </p>
                                          <div className="d-flex pb-3">
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