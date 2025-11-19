"use client";
import "../globals.css"
import Footer from '../footer';
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import Perfect_Start_Section from '../../public/assets/images/Perfect_Start_Section.svg'
import Comprehensive_audit_trails from '../../public/assets/images/Comprehensive_audit_trails.svg'
import Elnlitelogo from '../../public/assets/images/eln-lite-white.svg'
import logoblack from '../../public/assets/images/eln_logo.svg'
import Elnlitelogoblack from '../../public/assets/images/eln-lite-black.svg'
import support_person from '../../public/assets/images/support_person.svg'  
import type { Metadata } from "next";
import { useRouter } from 'next/router';
import Earth_image from '../../public/assets/images/Earth_image.svg'
import capture_data from '../../public/assets/images/capture_data.svg'
import templete from '../../public/assets/images/templete.svg'
import dyna_report from '../../public/assets/images/dyna_report.svg'
import privilege from '../../public/assets/images/privilege.svg'
import inventory from '../../public/assets/images/inventory.svg'
import chem_struc from '../../public/assets/images/chem_struc.svg'
import setup_config from '../../public/assets/images/setup_config.svg' 
import Streamline_Date from '../../public/assets/images/Streamline_Date.svg'
import centralized_Data from '../../public/assets/images/centralized_Data.svg'
import Manage_Project from '../../public/assets/images/Manage_Project.svg'
import Effortless_Collaboration from '../../public/assets/images/Effortless_Collaboration.svg'
import Automate_Encrypt from '../../public/assets/images/Automate_Encrypt.svg'
import Sample_Management from '../../public/assets/images/Sample_Management.svg'
import Affordable_Solution from '../../public/assets/images/Affordable_Solution.svg'
import ideal_compare from '../../public/assets/images/ideal_compare.svg'
import connect_compare from '../../public/assets/images/connect_compare.svg'
import seamless_compare from '../../public/assets/images/seamless_compare.svg'
import save_compare from '../../public/assets/images/save_compare.svg'
import smart_blub from '../../public/assets/images/smart_blub.svg'
import green_tick from '../../public/assets/images/green_tick.svg'
import Accelerate_collaboration from '../../public/assets/images/Accelerate_collaboration.svg'
import comparison_page_banner from '../../public/assets/images/comparison_page_banner.svg'
import Affordable_and_Scalable from '../../public/assets/images/Affordable_and_Scalable.svg'
import save_time_section_image from '../../public/assets/images/save_time_section_image.svg'
import Ease_of_Transition from '../../public/assets/images/Ease_of_Transition.svg'
import affordable_and_scalable from '../../public/assets/images/affordable_and_scalable.svg'
import Product_develop from '../../public/assets/images/Product_develop.svg'
import wrong_icon from '../../public/assets/images/wrong_icon.svg'
import compare_arrow from '../../public/assets/images/compare_arrow.svg'
import LiteSlider from "@/components/liteslider";
import ComapreSlide from "@/components/comapreslide";


export default function Scinote() {
    // State to manage content visibility
    const [isContentVisible, setIsContentVisible] = useState(false);

    // Toggle function to show or hide the content
    const toggleContent = () => {
        setIsContentVisible(prevState => !prevState);
    };

    const [isOpen, setIsOpen] = useState(false);

    const handleTabClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleLinkClick = () => {
      setIsOpen(false);
    };

return (
  <div className="compare">

    <div className="compare-bg solutionmain security_banner_content">
      <div className="container ">   
        <div className="row ">
          <div className="col-lg-6  d-flex d-flex pt-5 compare-bg-mt">
             <div className="solution_security_banner_content bannerresolution">
                  <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                  {/* <span className="over-compare">Why</span>  <Image src={Elnlitelogo} alt="lite" className="img-fluid w-25 px-2"/> <span className="over-compare">over</span> Scinote */}
                  Logilab ELN Lite: The Agile Choice Over Scinote 
                  </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp  compare-p-mamxwidth py-3" data-wow-delay="0.4s">
                      Accelerate your research with Logilab ELN Lite, a Streamlined, Flexible, and Easy-to-Implement solution designed for labs seeking a Simpler, User-friendly & Affordable ELN.
                    </p>  

                   <div className="mb_40 bannerresolution_btn mt-3 mb-5" data-wow-delay="0.6s">
                       <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--white text-center">
                        Try Logilab Eln Lite
                        </Link>
                         <em> <p className="f_200 compare-Credit" style={{fontSize:'13px',color:"#d5d6d7"}} > <span style={{ color:'red'}}>&#42;</span> No Credit card required</p>  </em>
                   </div>               
                  </div>
                </div> 
               <div className="col-lg-6 pt-76 ps-5">
                   <Image src={comparison_page_banner} className="img-fluid compare-imgae" alt="Adhere to ALCOA data integrity principles" style={{width:"90%"}} />
               </div>      
              </div>      
            </div>
    </div>

        <div className="container pt_70  compare sec_title">
        <h2 className="fw-bold text-center text-black">Everything you need, without breaking the bank</h2>
            <div className="coampre-tabled-flex d-flex  justify-content-between align-items-center mt-5 scroll-container">
                <ul className=" ">
                    <li className="pb-4">
                       <h5 className="f_600">Features</h5>
                    </li>
                    <div className="table-mt-three">
                    <li className="pb-2">Anytime, anywhere access</li>
                    <div className="hr"></div>
                    <li className="pb-2">Easy and secure sharing</li>
                    <div className="hr"></div>
                    <li className="pb-2">Protocol Template</li>
                    <div className="hr"></div>
                    <li className="pb-2">Spreadsheet Templates for Controlled Data Capture </li>
                    <div className="hr"></div>
                    <li>Project/Task Management </li>
                    <div className="hr"></div>
                    <li className="pb-2">Logbook management</li>
                    <div className="hr"></div>
                    <li className="pb-2">Version control</li>
                    <div className="hr"></div>
                    <li className="pb-2">Industry-Agnostic</li>
                    <div className="hr"></div>
                    <li className="pb-2">Quick Learning Curve </li>
                    <div className="hr"></div>
                    <li className="pb-2">Integration with LIMS, SDMS Systems <br/> <span style={{fontSize:"13px"}}> (including Qualis LIMS, Logilab SDMS)</span> </li>
                    <div className="hr"></div>
                    <li className="pb-2">Regulatory Compliance <br/> <span style={{fontSize:"13px"}}>(GLP, GxP,21 CFR Part 11, Eudralex Annex 11 etc.)</span> </li>
                    <div className="hr"></div>
                   </div>
                </ul>
                <ul className="compare-boxshadow1">
                    <li className="pb-4 text-center">
                      <h5 className="f_600">Scinote</h5>
                    </li>
                    <div className="mt-3">
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2 mt-5" ><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2 mt-5"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    </div>
                 
                </ul>
                <ul className="compare-boxshadow2">
                    <li className="pb-4 text-center"> <Image src={logoblack} className="img-fluid mobile-logo" alt="" style={{width:"120px"}}/></li>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2 mt-5" ><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                    <li className="text-center pb-2 mt-5"><Image src={green_tick} alt="lite" className="img-fluid w-20"/></li>
                    <div className="hr hr-compare"></div>
                </ul>                
            </div>

            <table className="table coampre-tabled-flex-one text-start">
  <thead>
    <tr>
      <th className="text-start">Feature</th>
      <th >Scinote</th>
      <th ><Image src={logoblack} alt="lite" className="" style={{width:'100px', height:'28px'}}/></th>
    </tr>
  </thead>
      <tbody>
        <tr>
          <td className="text-start">Anytime, anywhere access</td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Easy and secure sharin</td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Protocol Template</td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Spreadsheet Templates for Controlled Data Capture</td>
          <td><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Project/Task Management</td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Logbook management</td>
          <td><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Version control</td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Industry-Agnostic</td>
          <td><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Quick Learning Curve</td>
          <td><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Integration with External Systems (including Qualis LIMS, Logilab SDMS, & REST API-based integrations) </td>
          <td><Image src={wrong_icon} alt="lite" className="img-fluid w-15"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
        <tr>
          <td className="text-start" scope="row">Regulatory Compliance (GLP, GxP,21 CFR Part 11, Eudralex Annex 11 etc.) </td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
          <td><Image src={green_tick} alt="lite" className="img-fluid  w-20"/></td>
        </tr>
      </tbody>
          </table>
        </div>

        <div className="bg-lblue mt-5">
      <div className="container">
      <div className="mt-5">
      <div className="hosting_title sec_title erp_title text-center">
          <h2 className="fw-bold text-center compare-sub pt_70">LogiLab ELN Lite — Where Research Meets Innovation</h2>
        </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                        <h4 className="text-left fw-bold mb-4 py-3 ps-3 Teams_compare" style={{color:'#1163ea'}}>For Teams of all sizes</h4>
                        <div className="col-12 col-lg-12 mt-4 Teams_compare">
                              
                              <div className="d-flex flex-row align-items-start">
                           
                                  <div className="align-self-start">
                                      <Image src={Streamline_Date} className="img-fluid" alt=""  style={{width:"60px", height:'50px'}}/>
                                  </div>
                                  <div className="ms-3">
                                      <h5 className="text-black fw-bold  ps-2 literesponsefont">Streamlined Data Management</h5>
                                      <p className="text-black-max-width ps-2 mt-2 ">
                                          Utilize predefined templates and protocols, or easily
                                          import your existing experimental templates into the ELN
                                          as Excel, JSON, or Word files, ensuring complete
                                          traceability.
                                      </p>
                                  </div>
                            
                              </div>
                       </div>
                       <div className="col-12 col-lg-12 mt-4 Teams_compare">
                            <div className="d-flex flex-row align-items-center">
                                

                                <div className="align-self-start">
                                <Image src={Manage_Project} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-black fw-bold  ps-2 literesponsefont">Manage projects and tasks.</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    Easily manage projects and tasks with configurable
                                    workflows. Use folders and files for quick access and better
                                    organization.
                                    </p>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 mt-4 pt-4 compare_Automate Teams_compare">
                                <div className="d-flex flex-row align-items-center">
                                
                                    <div className="align-self-start">
                                    <Image src={Automate_Encrypt} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-black fw-bold  ps-2 literesponsefont">Automate, Encrypt- Protect</h5>
                                        <p className="text-black-max-width ps-2 mt-2">
                                        Maintain complete control over who accesses your data
                                        and what happens to it. Ensure that your data is fully
                                        protected and encrypted both at rest and in transit.
                                        </p>
                                    </div>
                                  
                                    
                                </div>
                        </div>
                        </div>

                      <div className="col-lg-6 smart-compare">
                      <h4 className="text-left fw-bold mb-4 py-3 ps-3 Teams_compare" style={{color:'#1163ea',}}>Designed for Researchers & Academicians</h4>
                      <div className="col-12 col-lg-12 ps-5 Teams_compare">   
                            <div className="d-flex flex-row align-items-center">
                            
                                <div className="align-self-start">
                                    <Image src={centralized_Data} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                </div>
                                <div className="ms-3">
                               
                                    <h5 className="text-black fw-bold ps-2 literesponsefont">Centralized Data Repository</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    Record and track experiments, manage inventory, and retrieve
                                    information easily from one secure & accessible platform.
                                    </p>
                                </div>
                          
                                
                            </div>
                        </div>                   
                        <div className="col-12 col-lg-12 mt-4 ps-5 Teams_compare">
                            <div className="d-flex flex-row align-items-center">
                                
                                <div className="align-self-start">
                                <Image src={Effortless_Collaboration} className="img-fluid" alt="" style={{width:"60px", height:'50px'}} />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-black fw-bold ps-2 literesponsefont">Effortless collaboration</h5>
                                    <p className="text-black-max-width ps-2 mt-2">
                                    With features that support real-time collaboration, it allows academic teams to work together. Researchers can share notes, data, & findings, promoting effective teamwork and improving project outcomes.
                                    </p>
                                </div>
                        
                                
                            </div>
                        </div>         
                        <div className="col-12 col-lg-12 mt-4 ps-5 Teams_compare">
                                <div className="d-flex flex-row align-items-center">
                                    
                                    <div className="align-self-start">
                                       <Image src={Sample_Management} className="img-fluid" alt="" style={{width:"60px", height:'50px'}}/>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-black fw-bold  mt-2 ps-2 literesponsefont">Material & Sample Management</h5>
                                        <p className="text-black-max-width ps-2 mt-2">
                                        Use a unified solution for managing lab resources and
                                        samples. Create and manage material repositories, track
                                        stock levels, usage, reorder points, and expiry dates.
                                        </p>
                                    </div>                                    
                                </div>
                        </div>  
                      </div>                                     
                    </div>
        </div>
      </div>
      <div className=" container compare-bg-gradiant mt-5 py-4 compare-cta">
         <div className="row">
              <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center py-2">
                <h4 className="text-white f_700 text-center compare-Kickstart py-2" style={{maxWidth:'612px',lineHeight:'1.4'}}>Kickstart Your Research with a 30-Day Free Trial of Cloud-Based – Logilab ELN Lite </h4>
                {/* <p className="Ensure-sub">Academicians enjoy an
                extended 30 days Trail</p> */}
              </div> 
              {/* <Image src={compare_arrow} alt="lite" className="img-fluid w-100"/> */}
              <div className="col-lg-4 Kickstart-btn-mt">
              <div className="d-flex justify-content-center align-items-center py-2">
                                      <div className="action_btn job-button text-md Registorheader py-2">
                                          <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue">TRY NOW</Link>
                                      </div>
                              </div>
                  </div> 
          </div> 
      </div>
        </div>  

      <div className="compare Grow_better_compare">              
             <div className="section_intro">
                 <div className="section_container">
                     <div className="">
                         <div className="intro_content compare-content">
                            <div className="text-center">                            
                               <div className='container contentcolor pt_70'>
                                            <div className="">
                               <div className="row">
                                     <h2 className="f_800 text-black text-center">Grow better with Logilab ELN Lite</h2>
                                            <div className="col-lg-4 col-md-5">
                                           <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        
                                                    {/* Affordable Solution Tab */}
                                                    <button 
                                                        className="nav-link active homehovertag" 
                                                        id="v-pills-home-tab" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target="#v-pills-home" 
                                                        type="button" 
                                                        role="tab" 
                                                        aria-controls="v-pills-home" 
                                                        aria-selected="true"
                                                    >
                                                        <div className="d-flex flex-column py-3 ">
                                                            <div className="d-flex flex-row">
                                                                <Image src={Affordable_Solution} className="img-fluid" alt="" style={{width:"50px", height:"30px"}}/>
                                                                <h6  className="fw-bold mt-2">Affordable & Scalable</h6>  
                                                            </div>
                                                            <div className="ms-1">   
                                                            {/* <h5  className="text-black fw-bold ps-1">Affordable Solution</h5>     */}
                                                                <p className="active-content ms-5">Offers all the essential features for data organization, collaboration, and documentation—at an affordable price that grows with your lab’s needs.</p>
                                                            </div>
                                                        </div>            
                                                    </button>

                                                    {/* Ease of Transition Tab */}
                                                    <button 
                                                        className="nav-link homehovertag" 
                                                        id="v-pills-profile-tab" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target="#v-pills-profile" 
                                                        type="button" 
                                                        role="tab" 
                                                        aria-controls="v-pills-profile" 
                                                        aria-selected="false"
                                                    >
                                                        <div className="d-flex flex-column py-3">
                                                            <div className="d-flex flex-row">
                                                            <Image src={seamless_compare} className="img-fluid" alt=""  style={{width:"50px", height:"30px"}}/>
                                                                <h6 className="fw-bold  mt-2">Ease of Transition</h6>
                                                            </div>
                                                            <div className="ms-1">
                                                                {/* <h5 className="text-black fw-bold ps-2">Ease of Transition</h5> */}
                                                                <p className="active-content ms-5">Switching from Excel or Word to a digital lab notebook is simple with Logilab Eln Lite. Easily import your existing files and start scaling your research with minimal disruption.</p>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    {/* Connect, Communicate Tab */}
                                                    <button 
                                                        className="nav-link homehovertag" 
                                                        id="v-pills-messages-tab-1" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target="#v-pills-messages-1" 
                                                        type="button" 
                                                        role="tab" 
                                                        aria-controls="v-pills-messages-1" 
                                                        aria-selected="false"
                                                    >
                                                        <div className="d-flex flex-column py-3">
                                                            <div className="d-flex flex-row">
                                                                <Image src={connect_compare} className="img-fluid mx-1" alt="" style={{width:"50px", height:"30px"}} />
                                                                <h6 className="text-black fw-bold mt-1">Connect,Communicate, Collaborate</h6>
                                                            </div>
                                                            <div className="ms-1">
                                                                <p className="active-content ms-5">Minimize the trouble of isolation and bring your team together for efficient communication, boosting your productivity.</p>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    {/* Ideal for Independent Researchers Tab */}
                                                    <button 
                                                        className="nav-link homehovertag" 
                                                        id="v-pills-messages-tab-2" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target="#v-pills-messages-2" 
                                                        type="button" 
                                                        role="tab" 
                                                        aria-controls="v-pills-messages-2" 
                                                        aria-selected="false"
                                                    >
                                                        <div className="d-flex flex-column py-3">
                                                            <div className="d-flex flex-row">
                                                                
                                                                <Image src={ideal_compare} className="img-fluid" alt=""  style={{width:"50px", height:"30px"}}/>
                                                                <h6 className="text-black fw-bold mt-1 ms-2">Ideal for Independent Researchers</h6>
                                                            </div>
                                                            <div className="ms-2">
                                                                <p className="active-content ms-5">Eliminate the hassle of juggling multiple notebooks and spreadsheets. With predefined templates, you can easily scale your research process.</p>
                                                            </div>
                                                        </div>
                                                    </button>

                                                    {/* Save Time Tab */}
                                                    <button 
                                                        className="nav-link homehovertag Save_Time" 
                                                        id="v-pills-messages-tab-3" 
                                                        data-bs-toggle="pill" 
                                                        data-bs-target="#v-pills-messages-3" 
                                                        type="button" 
                                                        role="tab" 
                                                        aria-controls="v-pills-messages-3" 
                                                        aria-selected="false"
                                                    >
                                                        <div className="d-flex flex-column py-3">
                                                            <div className="d-flex flex-row ">
                                                                <Image src={save_compare} className="img-fluid " alt="" style={{width:"50px", height:"30px"}} />
                                                                <h6 className="text-black fw-bold  mt-2">Save Time with Templates</h6>
                                                            </div>
                                                            <div className="ms-1">                                                                
                                                                <p className="active-content ms-5">No more hunting for that one piece of paper—everything is just a click away!</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                           </div>
                                            </div>

                                              <div className="col-lg-8 col-md-7 mt-5 Grow_better">
                                                  <div className="tab-content" id="v-pills-tabContent">
                                                      
                                                      {/* Affordable Solution Tab Content */}
                                                      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                          <Image 
                                                              src={Affordable_and_Scalable} 
                                                              className="img-fluid sizechangemobile w-100" 
                                                              alt="Input and export structured as well as unstructured data in multiple formats from JSON to Excel in Logilab Electronic Laboratory Notebook."
                                                          />
                                                      </div>

                                                      {/* Ease of Transition Tab Content */}
                                                      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> 
                                                          {/* You can add corresponding content for the Ease of Transition tab here */}
                                                          <Image 
                                                              src={Ease_of_Transition} 
                                                              className="img-fluid sizechangemobile w-100" 
                                                              alt="Input and export structured as well as unstructured data in multiple formats from JSON to Excel in Logilab Electronic Laboratory Notebook."
                                                          />
                                                      </div>

                                                      {/* Connect, Communicate Tab Content */}
                                                      <div className="tab-pane fade" id="v-pills-messages-1" role="tabpanel" aria-labelledby="v-pills-messages-tab-1">
                                                          {/* You can add corresponding content for the Connect, Communicate tab here */}
                                                          <Image src={Accelerate_collaboration} className="img-fluid" 
                                                    alt="Log-in from anywhere and continue your research globally with Logilab Electronic 
                                                    Laboratory Notebook."/> 
                                                      </div>

                                                      {/* Ideal for Independent Researchers Tab Content */}
                                                      <div className="tab-pane fade" id="v-pills-messages-2" role="tabpanel" aria-labelledby="v-pills-messages-tab-2">
                                                          {/* You can add corresponding content for the Independent Researchers tab here */}
                                                          <Image src={save_time_section_image} className="img-fluid sizechangemobile" alt="Ideal for independent researchers" />
                                                  
                                                        
                                                      </div>

                                                      {/* Save Time Tab Content */}
                                                      <div className="tab-pane fade" id="v-pills-messages-3" role="tabpanel" aria-labelledby="v-pills-messages-tab-3">
                                                          {/* You can add corresponding content for the Save Time tab here */}
                                                          <Image src={Product_develop} className="img-fluid " 
                                                      alt="Set up configurable workflows and monitor all of your lab processes efficiently with Logilab 
                                                      ELN software  — assign user privileges, manage task orders, and ensure streamlined lab operations."/>
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

         <div className="comapare-owl mt-4">    
          
           <div className="hosting_title sec_title erp_title text-center">
          <h2 className="fw-bold text-center compare-sub pt_70">Grow better with Logilab ELN Lite</h2>
          <ComapreSlide/>
        </div>

              
        </div>

          <div className="container mt-5">
            <div className="hosting_title sec_title erp_title text-center">
            <h2 className="fw-bold text-center compare-sub pt_70 text-black">Loved by 100+ Industry-Leading Labs Globally </h2>
          </div >
              <LiteSlider/>
              {/* <ComapreSlide /> */}
          </div>
          
         <div className="bg-lblue py-5 mt-5 bg-lblue-pb">
    <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 compare_Frequently_Aske">
             <h2 className="f_800 text-black py-3">Frequently Asked Questions</h2>
             <div className="Frequently_Asked">
             <p className="fw-bold text-black">Haven't found what you're loooking for</p>
             <div className="litebtn action_btn job-button text-md Registorheader">
              <Link className="btn btn--blue " href="/contact-us">Contact Us</Link></div>
              </div>
            
          </div>
          <div className="col-12 col-lg-6 Frequently_Asked_Accordion">
          <section className="compare ">
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
            How can I get started with Logilab ELN Lite? 
            </Accordion.Header>
            <Accordion.Body>
            Getting started is quick and easy. Simply visit the registration page, sign up with your email or log in using Google/Microsoft, and start using the platform. With preconfigured templates and helpful guides, labs can begin working within minutes.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
            How easy is the transition from paper-based systems? 
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Lite makes transitioning from paper-based systems, Excel, or MS Word seamless. It allows users to import existing documents, minimizing disruptions and enabling labs to quickly adapt to the digital platform while continuing their work.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
            How does Logilab ELN Lite ensure data security? 
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Lite follows industry-standard security protocols to protect your data. It includes role-based access control, encrypted storage, and secure cloud backups, ensuring that lab data is safe and accessible only to authorized users. 
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
            What are the upgrade options available?  
            </Accordion.Header>
            <Accordion.Body>
            As your lab’s needs grow, you can easily upgrade from Logilab ELN Lite to the standard/premium version. The upgrade unlocks advanced features like regulatory compliance, audit trail, multistep workflows, and enhanced inventory management. All data, settings, and workflows transfer seamlessly without retraining.
            </Accordion.Body>
          </Accordion.Item>          
        </Accordion>  
         
        <br /><br />
      </div>
    </section> 
          </div>
        
        </div> 
       
      </div>
         </div>    

    <div className="cont compare-cta calender_cont">
    <div className="Devepoe_space">
                    <div className="">
                      <div className='container tab2'>
                        <div className="row">
                          <div className="col-lg-7 d-flex request-demo">
                            <div className=" text-center logpositionchange">
                                <h3 className="Ensure f_800 l_height15 text-white">Heve further Questions ? Reach Out the team
                                </h3>
                                <div className="d-flex justify-content-center align-items-center mt-4">
                                    <div className="action_btn job-button text-md">
                                      <Link href="/contact-us" className="btn btn--blue  ">Contact Us</Link>
                                    </div>
                                    <div className="action_btn job-button text-md Registorheader">
                                      <Link href="/product-brochure-download" className="btn btn--blue ms-4">Download Brochure</Link>
                                    </div>
                                  </div>
                                </div>
                          </div>

                            <div className="col-lg-5  ps-5">    
                              <Image src={support_person } className="img-fluid  w-100 compare-imgae-two" 
                              alt="Adopt Agaram's Logilab Electronic Lab Notebook to centralize your research 
                              data and stay compliant to 21 CFR Part 11, ALCOA principles, etc."/>                
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
