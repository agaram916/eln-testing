'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../resposive.css'
import Header from '@/components/header';
import React, { useState, useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import collobration_one from '../../../eln/public/assets/images/Collaboration/Report_Designer.svg';
import collobration_two from '../../../eln/public/assets/images/Collaboration/multi_site.png';
import collobration_three from '../../../eln/public/assets/images/Collaboration/Collaboration_without_Compromise_3_tag_comment share.svg';
import collobration_four from '../../../eln/public/assets/images/Collaboration/3rd section - team of all size.svg';
import dbo1 from '../../../eln/public/assets/images/Collaboration/lab_reporting.svg';
import dbo2 from '../../../eln/public/assets/images/use-case/lab-Maintenance-two.png';
import dbo3 from '../../../eln/public/assets/images/use-case/lab-Maintenance-4.png';
import dbo4 from '../../../eln/public/assets/images/use-case/lab-Maintenance-four.svg';
import db1 from '../../../eln/public/assets/images/use-case/smart-2.png';
import db2 from '../../../eln/public/assets/images/Collaboration/report_management.svg';
import db3 from '../../../eln/public/assets/images/use-case/smart-three.png';
import sample from '../../../eln/public/assets/images/Collaboration/centralized_report.png';
import sample2 from '../../../eln/public/assets/images/Collaboration/Driven_Reports .png';
import sample3 from '../../../eln/public/assets/images/Collaboration/standardization_reports.png';
import sample4 from '../../../eln/public/assets/images/Collaboration/streamlined_reports.png';
import sample5 from '../../../eln/public/assets/images/use-case/use-banner-title-icon.svg';
import sample6 from '../../../eln/public/assets/images/use-case/use-case-hand-icon.png';
import Chemicals from '../../../eln/public/assets/images/use-case/Real-World-section-chemical.svg';
import Microbial from '../../../eln/public/assets/images/use-case/Real-World-section-Microbial.svg';
import Biological from '../../../eln/public/assets/images/use-case/Real-World-section-Biological.svg';
import Consumables from '../../../eln/public/assets/images/use-case/Real-World-section-Consumables.svg';
import lab from '../../../eln/public/assets/images/use-case/Real-World-section-lab.svg';
import Documents from '../../../eln/public/assets/images/use-case/Real-World-section-Documents.svg';
import loglab_Eln from '../../public/assets/images/loglab_Eln_new.svg'  
import dynamic from 'next/dynamic';

if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

// Import jQuery and Owl Carousel styles
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { footer, p } from 'framer-motion/client';
import Footer from '../footer';

// Dynamically import OwlCarousel with no server-side rendering
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});



const UseCase = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(5); // Default for desktop
    const [autoplay, setAutoplay] = useState(false); // Default autoplay off
    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const updateItems = () => {
          if (window.innerWidth <= 768) { // For mobile screen (768px or below)
            setItemsToShow(2); // Show only 2 items on mobile
            setAutoplay(true); // Enable autoplay on mobile
          } else {
            setItemsToShow(5); // Show 5 items on larger screens
            setAutoplay(false); // Disable autoplay on larger screens
          }
        };
    
        // Initial check
        updateItems();
    
        // Update items to show and autoplay when window is resized
        window.addEventListener('resize', updateItems);
    
        // Cleanup the event listener
        return () => {
          window.removeEventListener('resize', updateItems);
        };
      }, []);


    if (loading) {
        return (
            <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
                <SyncLoader color="#1163ea" size={20} />
            </div>
        );
    }
  const options = {
    loop: true,
    margin: 10,
    dots: true,
    autoplay:true,
    autoplayTimeout: 3000,
  smartSpeed: 200,
    responsive: {
      0: { // For screens from 0px to 768px
        items: 1, // Show 2 items on mobile
      },
      768: { // For screens above 768px
        items: 1, // Show 5 items on larger screens
      },
    },
  };
  
    return (
        <>
            <Header  whiteHeader/>
            <div className='use-case-bg report'>
            <div className='use-case position-relative'>
                <div className="report-use-case-banner">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                                <div className='container text-center '>
                                    <div className="text-center use-case-bg-heading-content report-bg-heading-content">
                                        <h3 className='pt-3 text-black'> <span style={{fontWeight:'300'}}>Report Generation </span> </h3>
                                        <h1 className="l_height28 text-center text-black py-4 inline-text" data-wow-delay="0.4s">
                                            <span className='inline-text-precise py-2 px-2 me-2'>Turn Elaborate Lab Data </span> <Image src={sample5} className="img-fluid inline-text-img" alt=""/>
                                            into Impactful Reports
                                        </h1>
                                        <p className=''>Enhance data summarization & collaboration with dynamic, shareable reports. <Image src={sample6} className="img-fluid ms-2 Fingertips" alt="" /></p> 
                                    </div>
                                           <div className="homebutton d-flex justify-content-center align-items-center mt_15 wow fadeInUp" data-wow-delay="0.6s">
                                          <Link href="/request-a-demo" className="btn btn--black rounded-pill mx-2">
                                            Request a Demo
                                          </Link>
                                          <Link href="/product-brochure-download" className="btn btn--white rounded-pill  mx-2">
                                              Download Brochure
                                          </Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='use-case-bg-margin-top report-bg-margin-top'>
                
            <div className='container use-case-section-space-pt_100'>
            </div>

            <div className='mt-5 use-mt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-space--pt_100 use-case-section-heading'>
                         <h5 className='smart-storage'>Powerful Report Designer Tool </h5> 
                         <h1 className=''>Accelerated Data Insights </h1>
                         <p>Enable accurate and traceable report documentation for every experiment</p>
                    </div>       
             </div>
                  <div className="container use-case-content pt-5">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Generate Dynamic Reports</h4>
                           </div>
                           <p className=" text-black pt-1">Automatically generate comprehensive reports summarizing data from multiple experiments upon task completion.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">MS Office-like Document Creation </h4>
                           </div>
                           <p className="text-black pt-1">Create and edit documents in a format like Microsoft Word, with all formatting options required for lab documentation.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Tag Key Parameters</h4>
                           </div>
                           <p className="text-black pt-1">Custom tag important data fields across multiple labsheets and extract relevant data into reports.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Import Pre-Existing Files </h4>
                           </div>
                           <p className="text-black pt-1">Easily import existing Word (.docx) reports as a starting point for designing and refining report templates.</p>
                         </div>
                           <div className='mt-3'>
                            <Link href='/request-a-demo' className='cta-link'> See Product in Action </Link> 
                          </div>
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 {/* <OwlCarousel className="owl-theme" {...options}> */}
                                   <div className="">
                                     <Image src={collobration_one} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                 {/* </OwlCarousel> */}
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='pt-5 padding-top-5 padding-top-2'>
               <div className='container '>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Streamlined Lab Documentation </h5>
                         <h1 className='text-black'>Comprehensive Lab Reporting </h1>
                         <p className='text-black'>Design and generate a wide range of standardized lab reports</p>
                    </div>
                        
             </div>
                  <div className="container use-case-content pt-4">
                    <div className="row justify-content-between">
                    
                           <div className="col-md-6 order-2 order-md-2 use-case-slider use-case-slider-repoting">
                             <div className="use-case-slider-bg"> 
                                 {/* <OwlCarousel className="owl-theme" {...options}> */}
                                   <div className="item item-2">
                                     <Image src={dbo1} className="img-fluid use-case-slider-repoting" alt="" />
                                   </div>
                                 {/* </OwlCarousel> */}
                             </div>
                           </div>
                           <div className="col-md-6 order-1 order-md-1 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-left fw-bold text-black">Create Lab Reports with Ease </h4>
                           </div>
                           <p className=" text-black pt-1">Easily generate lab reports for daily workflows, including test summaries, observations, and results. </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-left fw-bold text-black">Streamline Quality Control (QC) Reporting </h4>
                           </div>
                           <p className="text-black pt-1">Ensure accurate and traceable QC reporting that supports reliable decision-making.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Automate Immunoassay Reporting </h4>
                           </div>
                              <p className="text-black pt-1">Capture, format, and standardize immunoassay test results in compliant, ready-to-share reports.</p>
                         </div>  
                          <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Issue Certificates of Analysis (CoA) </h4>
                           </div>
                              <p className="text-black pt-1">Generate Certificates of Analysis with validated specifications and test results in a structured format.</p>
                         </div> 
                            <div className='mt-3'>
                            <Link href='/product-brochure-download' className='cta-link'> Download Brochure  </Link> 
                          </div>   
                        </div> 
                      </div>
                    </div>
                    
                  </div>             
        </div>
        <div className='pt-5 padding-top-5'>
               <div className='container'>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Seamless Report Workflows </h5>
                         <h1 className='text-black'> End-to-End Report Management </h1>
                         <p>Effortlessly compile, export and share reports across teams and stakeholders</p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Workflow Integration </h4>
                           </div>
                           <p className=" text-black pt-1">Execute, sign, and approve reports with e-signs as part of the workflow, ensuring proper validation and compliance.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Export Word and PDF Reports </h4>
                           </div>
                           <p className="text-black pt-1">Create reports in Word or PDF formats for easy sharing, internal record-keeping, archiving, and official submission. </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">External Collaboration</h4>
                           </div>
                           <p className="text-black pt-1">Easily share finalized reports with stakeholders, enabling regulatory compliance and collaborative research.</p>
                         </div>
                              <div className='mt-3'>
                            <Link href='https://logilabelnlite.azurewebsites.net/register' className='cta-link'> Try Logilab ELN Free </Link> 
                          </div> 
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 {/* <OwlCarousel className="owl-theme" {...options}> */}
                                   <div className="item item-2">
                                     <Image src={db2} className="img-fluid use-case-slider-image use-case-slider-repoting-2" alt=""/>
                                   </div>
                                 {/* </OwlCarousel> */}
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='container'>
                  <div className='use-case-bg-Inventory-section text-center report-section-space--pt_80 pt-5'>
                      <h1 className='text-center'>Turn Lab Data into Actionable Insights </h1>
                       <p className='mt-3'>Unlock The Full Potential of Your Experiments with Powerful Report Generation.</p>
                       <div className='inventory-today-cards mt-5'>
                        <div className='row'>
                        <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Centralized Report Creation </h5>
                                    <p>Create, edit, and manage all your lab reports in one place with an intuitive, MS Word-like interface.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample2} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Dynamic, Data-Driven Reports</h5>
                                    <p>Automatically compile data from multiple experiments and tasks into standardized reports.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample3} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''> Standardization at Scale </h5>
                                    <p>Design and generate COA, QC reports, calibration records, and more, tailored to your lab workflow. </p>
                                  </div>
                               </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample4} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Streamlined Workflow Management</h5>
                                    <p>Create, review, and approve reports within your workflow to ensure accuracy and maintain audit readiness.</p>
                                  </div>
                               </div>
                            </div>
                        </div>
                      
                       </div>
                  </div>
             </div>
                      <div className='use-case-cta-section-line'> 
                                       <div className='container'>
                                            <div className='use-case-cta-section use-case-bg'>
                                              <div className='d-flex flex-column flex-md-row justify-content-center align-items-center'>
                                                  <div className='order-2 order-md-1'>
                                                  <p className='text-black ps-2 pt-4 mb-0'> Take control of your lab data by  generating comprehensive reports  </p>
                                                 <h2 className='text-black ps-2'>Unify Experimental Data, Enhance Accuracy, & <span className="line-break"><br /></span> Stay Audit-Ready </h2> 
                                                <div className='text-start mb-4 ps-2 pt-4 cta-btn-ps'>
                                                <a className=' btn btn--black rounded-pill' href='https://logilabelnlite.azurewebsites.net/register'>Get started for Free</a>
                                                 <a className='btn btn--white rounded-pill ms-4 cta-btn-ms' href='/contact-us'>Contact Us</a>
                                                  </div>
                                              </div>
                                              <div className='order-1 order-md-2'>
                                                    <Image src={loglab_Eln} className="img-fluid cta-free-logo ms-5" alt="" />    
                                              </div>
                                              
                                              </div>
                                           </div>
                                       </div>
                                       </div>
         
            </div>
            </div>
             <Footer/>
        </> 
    );
};

export default UseCase;
