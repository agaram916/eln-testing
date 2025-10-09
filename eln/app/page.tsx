"use client";
import { Link as ScrollLink  } from "react-scroll";
import React, { useState, useEffect, useRef } from 'react';
import { MdOutlinePlayArrow} from "react-icons/md";
import WOW from 'wowjs';
// import "../globals.css"
// import Footer from '../footer';
// import useScroll from '../useScroll';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import  Link  from 'next/link'
// import Image from 'next/image';
// import Logo from '../assets/images/loglab_Eln.svg';
import Image from "next/image";
import Perfect_Start_Section from '../public/assets/images/Perfect_Start_Section.svg'
import researchfaster from '../public/assets/images/researchfaster.svg'
import All_on_record from '../public/assets/images/All_on_record.svg'
import capture_data from '../public/assets/images/capture_data.svg'
import templete from '../public/assets/images/templete.svg'
import dyna_report from '../public/assets/images/dyna_report.svg'
import privilege from '../public/assets/images/privilege.svg'
import inventory from '../public/assets/images/inventory.svg'
import chem_struc from '../public/assets/images/chem_struc.svg'
import setup_config from '../public/assets/images/setup_config.svg'
import link_data from '../public/assets/images/link_data.svg'
import RD from '../public/assets/images/Perfect_Start.svg'
import Eliminate_Paper from '../public/assets/images/home -collaborate on r&d.svg'
import Lab_Task from '../public/assets/images/home - eliminate paper.svg'
import share from '../public/assets/images/share.svg'
import Reduce from '../public/assets/images/Reduce.svg'
import Doc from '../public/assets/images/Doc.svg'
import loglab_Eln from '../public/assets/images/loglab_Eln_new.svg'
import loginewimage from '../public/assets/images/loginewimage.svg'
import home_calender from '../public/assets/images/home_calender.svg'
import LogilabELNwhite from '../public/assets/images/Logilab-ELN_white.svg'
import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io';
import CountUp from "react-countup";
import { AiOutlinePercentage } from "react-icons/ai";
import Footer from "./footer";
import dashboard from '../public/assets/images/Dashboard-V3.png'
import Earth_image from '../public/assets/images/Earth_image.svg'
import Sliders from "@/components/slider";
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
export default function Solution() {
  const [facts, setFacts] = useState([
    { count: 84, text: "Increase in lab workflow efficiency", currentCount: 0, style: { rotate: "180deg" } },
    { count: 65, text: "Decrease in downtime", currentCount: 0 },
    { count: 72, text: "Increase in productivity", currentCount: 0 },
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  // Handle tab click
  const handleTabClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Trigger fade-out animation
      setTimeout(() => setLoading(false), 500); // Wait for fade-out to complete
    }, 1000); // Adjust duration of preloader here
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for the facts section
  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, [loading]);

  // Animate facts when section is visible
  useEffect(() => {
    if (isVisible) {
      const totalDuration = 1000; // 3 seconds
      const steps = 25; // Number of steps
      const interval = totalDuration / steps;

      let counts = facts.map((fact) => ({ ...fact, increment: fact.count / steps }));

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        counts = counts.map((fact) => ({
          ...fact,
          currentCount: Math.min(fact.count, fact.currentCount + fact.increment),
        }));

        setFacts(counts);

        if (currentStep === steps) {
          clearInterval(timer);
        }
      }, interval);
    }
  }, [isVisible, facts]);

  // Render Preloader
  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }

  
return (
  <div className="home-colour">
    <Header/>
    <div className="home">
    <div className="h_security_banner_area homebannersize text-center">
            <div className="bannerBg"></div>
            <div className="container security_banner_content">
                <div className="row">
                    <div className="col-lg-12 wow fadeInRight headerposition text-center mt_56" data-wow-delay="0.2s ">
                       <h1 className="wow fadeInUp" data-wow-delay="0.3s"><span className="pentool">Record</span> execute, collaborate, store</h1>
                        <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">An intuitive ELN designed for compliance, collaboration, and paperless processes.</p>
                    </div>
                    <div className="homebutton action_btn d-flex justify-content-center align-items-center mt-4 wow fadeInUp" data-wow-delay="0.6s">
                      <Link href="/request-a-demo" className="btn btn--white mx-3">
                        Request a Demo
                      </Link>
                      <Link href="/product-brochure-download" className="btn btn--white mx-3">
                        Download Brochure
                      </Link>
                    </div>
                </div>
            </div>
            {/* <div className=''>
                 <Image src={dashboard} className="img-fluid dashboard-img" alt=""/>
              </div> */}
        </div>
      </div>

      <div className="container sliderheight mt_110">
        <Sliders/>
      </div>
     
          <div className="erp_banner_area_two">            
             <div className="section_intro bg-lblue">
                 <div className="section_container">
                     <div className="intro">
                         <div className=" intro_content">
                            <div className="sec_title text-center " >
                            <h2 className="splash sectiontitlesize"><span style={{color:'#1163ea'}}>One</span> Size Fits All</h2>                              
                               <p>Logilab ELN is a completely paperless environment for labs to record, execute, and store their tests, experiments, and research data. </p>
                               <p>Be it QA/QC labs and Research Organizations involved in projects, or  industry-specific laboratories that test and develop products, 
                                <br /> Logilab ELN is a flexible solution that caters to a myriad of laboratory needs.</p>  
  
                               <div className='container contentcolor'>
                                    <div className="row tab-hide-mobile section-space--pt_100 pt-5">
                                    <div className="col-lg-4">
                                     <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                     <button className="nav-link active  homehovertag" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                       <h5 className="fw-bold headercolor">The Perfect Start </h5>
                                       <p className="">Input structured and unstructured data, set up configurable workflows and manage projects all in one place.</p>
                                     </button>
                                     <button className="nav-link  homehovertag" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                       <h5 className="fw-bold headercolor">Research made faster</h5>
                                       <p>Accelerate your lab processes by utilizing dynamic templates for experiments and data capture.</p>
                                     </button>
                                     <button className="nav-link  homehovertag" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                       <h5 className="fw-bold headercolor">All on record</h5>
                                       <p>Secure your data through multiple levels of permissions within projects, audit trails, electronic signatures etc.</p>
                                     </button>
                                     </div>
                                     </div>
                                    <div className="col-lg-8">
                                    <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                      <Image src={Perfect_Start_Section} className="img-fluid   sizechangemobile" alt="" loading="lazy"/>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                      <Image src={researchfaster} className="img-fluid   sizechangemobile" alt="" loading="lazy"/>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                      <Image src={All_on_record} className="img-fluid   sizechangemobile" alt="" />
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

         </div>

        <div className="managed-it-fun-fact-wrapper ">   
            <div className="container">
                <div className="section-title-wrap text-center section-space--mb_60">
              
                </div>
                <div className="rangerecord">
                <div className="fun-fact-grid-4" ref={sectionRef}>
      {facts.map((fact, index) => (
        <div className="grid-item-val wow move-up" key={index}>
          <div className="fun-fact--one text-center">
            <span></span>
            <div className="fun-fact__count counter">
              {/* Conditionally render IoMdArrowDown for "Decrease in downtime" */}
              {fact.text === "Decrease in downtime" ? (
                <IoMdArrowDown />
              ) : (
                <IoMdArrowUp />
              )}

              {isVisible && (
                <span>{Math.floor(fact.currentCount)}</span>
              )}

              <AiOutlinePercentage className="count_plus" />
            </div>
            <span className="fun-factsize__text">{fact.text}</span>
          </div>
        </div>
      ))}
    </div>
                </div>
            </div>
        </div>
      <div className="container datasize">
        <div className="container boxcolor sec_title mt-5">
                    <h2 className="text-center text-white pt-5">Disc
                      {/* <img className="" src="../assets/images/Earth_image.svg" alt="" /> */}
                      <Image src={Earth_image} className="img-fluid Disc" alt=""/>
                    ver everything Logilab ELN can do for you</h2>
                    <div className="row blue-bg-mt-mb">
                        <div className="col-6 col-lg-3">
                            <div className="d-flex  flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                                <Image src={capture_data} className="img-fluid " alt=""/>
                                <p className="text-white mb-0 ps-2">Capture data with <br/>Labsheets</p>
                            </div>  
                        </div>
              
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                                <Image src={templete} className="img-fluid " alt=""/>
                                <p className="text-white mb-0 ps-2">Design protocols with effective templates</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                            <Image src={dyna_report} className="img-fluid" alt=""/>
                            <p className="text-white  mb-0  ps-2">Create dynamic reports</p>
                            </div>
                        </div>    
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                                <Image src={privilege} className="img-fluid " alt=""/>
                                <p className="text-white  mb-0 ps-2">Assign individual roles and privileges</p>
                            </div>
                       </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6 col-lg-3">
                          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                            <Image src={inventory} className="img-fluid " alt="" width={48} height={48}/>
                            <p className="text-white  mb-0 ps-2">Organise your samples and inventory</p>
                          </div>
                        </div>
                        <div className="col-6 col-lg-3">
                         <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                         <Image src={setup_config} className="img-fluid " alt=""/>
                            <p className="text-white  mb-0 ps-2">Register & execute task orders</p>
                         </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                            <Image src={chem_struc} className="img-fluid " alt=""/>
                              
                                <p className="text-white  mb-0 ps-2">Draw chemical structures</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center blug-img-mt">
                                <Image src={link_data} className="img-fluid" alt=""/>
                                <p className="text-white mb-0 ps-2">Set-up configurable workflows</p>
                            </div>  
                        </div>
                    </div>
                
                 

                     <div className="row mt-4">
                        <div className="col text-center">
                          {/* <button className=" btn_alignid py-2 px-4">
                       
                            <span className="pe-2">
                            <BsRocketTakeoffFill />
                            </span>
                            
                            Explore More
                          </button> */}
                        </div>
                      </div>               
        </div>

      </div>   
 
        <div className="search_quantity_bgcol">
   <div className='container tab2 mt-5'>
        <div className="hosting_title sec_title erp_title text-center headersizechange mb-4 pt-5">
             <h2 className="mt-4 text-center star headersizech"><span style={{color:'#1163ea'}}>Centralize</span> your Research and Quality Testing</h2>
        </div>
   <div className="row section-space--mb_40 section-space--mt_100">
      <div className="col-lg-12 ht-tab-wrap mt-3 search_quantity_bgcol-one"> 
        <div className="row">
          <div className="col-12 text-center wow move-up">
          <div className={`responsive-tabs ${isOpen ? 'open' : ''}`} onClick={handleTabClick}>
           <span className="dropdown-arrow" onClick={handleTabClick}></span>
            <ul className="responsive-tabs nav nav-tabs justify-content-center ht-tab-menu border-0" role="tablist" onClick={handleLinkClick}>

              <li className="tab__item nav-item active">
                <a className="agaramtab nav-link active" id="nav-tab1" data-bs-toggle="tab" href="#lims-tab" role="tab" aria-selected="true">Collaborate on R&D</a>
              </li>
              <li className="tab__item nav-item">
                <a className=" agaramtab nav-link" id="nav-tab2" data-bs-toggle="tab" href="#eln-tab" role="tab" aria-selected="false">Eliminate Paper</a>
              </li>
              <li className="tab__item nav-item">
                <a className="agaramtab nav-link" id="nav-tab3" data-bs-toggle="tab" href="#sdms-tab" role="tab" aria-selected="false">Execute Lab Tasks</a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="tab-content ht-tab__content wow move-up ">
          <div className="tab-pane fade show active" id="lims-tab" role="tabpanel">
            <div className="tab-lims-wrap section-space--mt_60">
              <div className="section-space--pb_40 row align-items-center">
    
    <div className="tab-pane fade show active" id="tabs-1" role="tabpanel">
                  <div className="row">

                    <div className="col-lg-7 pt-0">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="software_service_item mb-70">
                              <Image src={Eliminate_Paper} className="img-fluid  elnimage_size-tab" alt=""/>
                             </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                            <div className="software_service_item mb-70">
                                <img className="one-place-img shadow-ss w-100" src="../assets/images/paper.svg" alt="" />
                            </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                            <div className="software_service_item mb-70">
                                <img className="one-place-img shadow-ss w-100" src="../assets/images/Lab_Task.svg" alt="" />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 area backgroundremove">
                      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">   
                        <a className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                          
                        <h5 className="header_size">Experiment without constraints — where you are doesn’t matter</h5> 
                            <ul className="list-unstyled back_image">
                                <li className="mt-4">Collaborate with anyone, anywhere</li>
                                <li className="mt-3">Maintain centralized repository for all experiments, regardless of the scientific domain</li>
                                <li className="mt-3">Access Logilab ELN at any time via a browser-based interface within a single login</li>
                            </ul>
                        </a>                     
                      </div>
                    </div>                 
                  </div>
              </div>
              </div>
            </div>
          </div>
          
         
          <div className="tab-pane fade " id="eln-tab" role="tabpanel">
            <div className="tab-history-wrap section-space--mt_60">
              <div className="section-space--pb_40 row align-items-center">
              <div className="tab-pane fade show " id="tabs-2" role="tabpanel">
                  <div className="row te">


                    <div className="col-lg-7 pt-0">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home1" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="software_service_item mb-70">
                          <Image src={Lab_Task} className="img-fluid  elnimage_size-tab" alt=""/>  
                           
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile1" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/eliminate.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages1" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/eliminate.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages2" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/eliminate.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages3" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/eliminate.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 area backgroundremove">
                      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        
                        <a className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home1" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <h5 className="header_size">You set up procedures — Logilab ELN will ensure they are followed</h5> 
                                <ul className="list-unstyled back_image">
                                    <li className="mt-4">Conduct assays of samples and inventory materials</li>
                                    <li className="mt-3">Execute protocols to capture data for SOPs and experiments</li>
                                    <li className="mt-3">Manage lab and research activities</li>
                                    <li className="mt-3">Conduct day-to-day lab processes</li>
                                    <li className="mt-3">Calculate essential values</li>
                                </ul>
                        </a>
                    
                      </div>
                    </div>                    
                  </div>
                </div>                
              </div>
            </div>
          </div>

      
          <div className="tab-pane fade" id="sdms-tab" role="tabpanel">
            <div className="tab-history-wrap section-space--mt_60">
              <div className="section-space--pb_40 row align-items-center">
              <div className="tab-pane fade show" id="tabs-3" role="tabpanel">
                  <div className="row">

                    <div className="col-lg-7 pt-0">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home4" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="software_service_item mb-70">
                          <Image src={RD} className="img-fluid  elnimage_size-tab" alt=""/> 
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile5" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/sheetorder-two.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages6" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/sheetorder-two.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages7" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="assets/images/eln/sheetorder-two.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages8" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/sheetorder-two.png" alt="" />
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages9" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                          <div className="software_service_item mb-70">
                          <img className="one-place-img shadow-ss w-100" src="../assets/images/eln/sheetorder-two.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 area backgroundremove">
                      <div className="nav flex-column nav-pills me-3 " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home4" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                            <h5 className="header_size">Sky is the limit — conduct vital tasks that get closer to your breakthroughs</h5> 
                                <ul className="list-unstyled back_image">
                                    <li className="mt-4">Monitor and  Manage laboratory activities</li>
                                    <li className="mt-3">Calibrate and maintain instruments</li>
                                    <li className="mt-3">Execute test procedures</li>
                                    <li className="mt-3">Develop analytical methods</li>
                                    <li className="mt-3">Record research activities  e.g., formulation, reaction conditions, sampling etc</li>      
                                </ul>
                        </a>
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

      </div>
       </div>
   
        <div>
            <div className="container mt-5 sec_title ">
                <h2 className="text-center my-5"><span style={{color:'#1163ea'}}>Automate</span> All Manual Lab Processes</h2>
                <div className="row boxheight">
                    <div className="col-lg-4 ">
                        <div className="boxshow homecontentbefore py-5">
                            <Image src={share} className="img-fluid" alt="" style={{ width: '100px', height: '90px' }}/>
                            <h5 className="h_size pt-5">Improve efficiency & accuracy</h5>
                            <ul className="bluedot">
                                <li className="pt-3">Collaborate with your colleagues on multiple projects & tasks</li>
                                <li className="pt-3">Record data in a controlled and secure environment</li>
                                <li className="pt-3">Auto-generate dynamic summary reports using data tags</li>
                            </ul>                    
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="boxshow py-5">
                            <Image src={Reduce} className="img-fluid" alt="" style={{ width: '150px', height: '90px'}}/>
                            <h6 className="h_size pt-5">Standardize, implement, and iterate</h6>
                            <ul className="bluedot">
                            <li className="pt-3">Set up standardized templates.</li>
                            <li className="pt-3">Configure specific role based access to project tasks modules</li>
                            <li className="pt-3">Optimized task execution timelines — individual experiments, SOPs management</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="boxshow homecontentafter py-5">
                            <Image src={Doc} className="img-fluid" alt="" style={{ width: '100px', height: '90px' }}/>
                            <h6 className="h_size pt-5 ">21 CFR Part 11 & Data integrity Compliance</h6>
                            <ul className="bluedot">
                                <li className="pt-3">Comprehensive 100 % Audit Trail</li>
                                <li className="pt-3">Version and release control for all captured data</li>
                                <li className="pt-3">Electronic records protection with e-signature support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="cont backgr_col calender_cont">
                <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 mt_110 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <Image src={loglab_Eln} className="img-fluid mb-2 " alt=""/> 
                              <h3 className="Ensure mt-3 f_800">Try it for free for up to 3 users <br/> <span style={{fontSize:'21px'}}>Take control of your lab data today!</span> </h3>
                              <div className="d-flex action_btn justify-content-center align-items-center mt-4"> 
                                        <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue">Get Started</Link>         
                                        <Link href="/pricing" className="btn btn--blue mx-4">Compare Plans</Link>                                         
                                </div>
                               </div>
                        </div>

                          <div className="col-lg-6 imageposition">    
                            <Image src={loginewimage} className="img-fluid w-75  imageposition-width" alt=""/>                
                          </div>
                      </div>                     
                    </div>
                  </div>
                </div>

      
                    <div className=" last_imag_backgr pt-5">
                        <div className="container">
                    <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <Image src={home_calender} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center ">                            
                                      <div className="text-center">
                                         <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                         <h3 className="text-white mt-3 f_800">Digitize. Simplify. Organize.</h3>
                                         <p className="Ensure-sub">Kickstart your paperless lab with Logilab ELN </p>
                                        <div className="d-flex justify-content-center pb-3">
                                          <div className="action_btn job-button text-md cont_compare ">
                                          <Link href="/request-a-demo" className="btn btn--blue  ">Request a Demo</Link>
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
         <Footer/>  
    </div>    
);
}
