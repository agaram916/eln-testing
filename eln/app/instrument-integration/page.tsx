'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../resposive.css'
import Header from '@/components/header';
import React, { useState, useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import collobration_one from '../../../eln/public/assets/images/Collaboration/Data_Flow-3.svg';
import loglab_Eln from '../../public/assets/images/loglab_Eln_new.svg'
import collobration_two from '../../../eln/public/assets/images/Collaboration/instrument_integration_two-2.svg';
import collobration_three from '../../../eln/public/assets/images/Collaboration/instrument_integration_three.svg';
import collobration_four from '../../../eln/public/assets/images/Collaboration/instrument_integration_four.svg';
import dbo1 from '../../../eln/public/assets/images/Collaboration/Multi_Instrument.svg';
import dbo2 from '../../../eln/public/assets/images/use-case/lab-Maintenance-two.png';
import dbo3 from '../../../eln/public/assets/images/use-case/lab-Maintenance-4.png';
import dbo4 from '../../../eln/public/assets/images/use-case/lab-Maintenance-four.svg';
import db1 from '../../../eln/public/assets/images/use-case/smart-2.png';
import db2 from '../../../eln/public/assets/images/Collaboration/qualis_lims_integration.png';
import db3 from '../../../eln/public/assets/images/Collaboration/qualis_lims_integration_two.png';
import sample from '../../../eln/public/assets/images/Collaboration/Integrations .png';
import sample2 from '../../../eln/public/assets/images/Collaboration/automated_data_capture .png';
import sample3 from '../../../eln/public/assets/images/Collaboration/connected_lab_Ecosystem .png';
import sample4 from '../../../eln/public/assets/images/Collaboration/Traceability .png';
import sample5 from '../../../eln/public/assets/images/use-case/use-banner-title-icon.svg';
import sample6 from '../../../eln/public/assets/images/use-case/use-case-hand-icon.png';
import Chemicals from '../../../eln/public/assets/images/use-case/Real-World-section-chemical.svg';
import Microbial from '../../../eln/public/assets/images/use-case/Real-World-section-Microbial.svg';
import Biological from '../../../eln/public/assets/images/use-case/Real-World-section-Biological.svg';
import Consumables from '../../../eln/public/assets/images/use-case/Real-World-section-Consumables.svg';
import lab from '../../../eln/public/assets/images/use-case/Real-World-section-lab.svg';
import Documents from '../../../eln/public/assets/images/use-case/Real-World-section-Documents.svg';  
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
            <div className='use-case-bg instrument'>
            <div className='use-case position-relative'>
                <div className="instrument-use-case-banner">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                                <div className='container text-center '>
                                    <div className="text-center use-case-bg-heading-content report-bg-heading-content">
                                        <h3 className='pt-3 text-black'> <span style={{fontWeight:'300'}}>Instrument Integration </span> </h3>
                                        <h1 className="l_height28 text-center text-black py-4 inline-text" data-wow-delay="0.4s">
                                          Seamless
                                            <span className='inline-text-precise py-2 px-2 ms-2'> Analytical Data Flow </span> 
                                        </h1>
                                        <p className=''>Integrate any analytical instrument, automate instrument <br/>data capture, & ensure data accuracy.</p> 
                                    </div>
                                           <div className="homebutton  d-flex justify-content-center align-items-center mt_15 wow fadeInUp" data-wow-delay="0.6s">
                                          <Link href="/request-a-demo" className="btn btn--black rounded-pill mx-2">
                                            Request a Demo
                                          </Link>
                                          <Link href="/product-brochure-download" className="btn btn--white rounded-pill mx-2">
                                              Download Brochure
                                          </Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='use-case-bg-margin-top'>
                
            <div className='container use-case-section-space-pt_100'>
            </div>

            <div className='mt-5 use-mt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-space--pt_100 use-case-section-heading'>
                         <h5 className='smart-storage'>Precise Data Extraction</h5>
                         <h1 className=''>Streamlined Data Flow </h1>
                         <p>Simplify data capture for faster, more accurate lab results.</p>
                    </div>       
             </div>
                  <div className="container use-case-content pt-5">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Automate Instrument Data Capture </h4>
                           </div>
                           <p className=" text-black pt-1">Integrate with analytical instruments and capture data of interest directly within ELN experiments.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Advanced Parsing Engine</h4>
                           </div>
                           <p className="text-black pt-1">Extract data of interest from instrument outputs using an advanced built-in parsing engine.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Improved Data Accuracy and Reliability </h4>
                           </div>
                           <p className="text-black pt-1">Enhance accuracy and reduce human errors by automating data capture and minimizing manual user input.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Flexible Data Format Support </h4>
                           </div>
                           <p className="text-black pt-1">Logilab ELN can handle both file-based as well as port-based instruments with ease.</p>
                         </div>
                            <div className='mt-3'>
                            <Link href='/contact-us' className='cta-link'> Contact Sales </Link> 
                          </div>
                         
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item ">
                                     <Image src={collobration_one} className=" img-fluid use-case-slider-image" alt=""     quality={100} sizes="(max-width: 768px) 100vw, 600px"/>   
                                   </div>
                                       <div className="item ">
                                     <Image src={collobration_two} className="img-fluid use-case-slider-image" alt=""/>   
                                   </div>
                                        <div className="item ">
                                     <Image src={collobration_three} className="img-fluid use-case-slider-image" alt=""/>   
                                   </div>
                                        <div className="item ">
                                     <Image src={collobration_four} className="img-fluid use-case-slider-image" alt=""/>   
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='pt-5 padding-top-5'>
               <div className='container '>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Multi-Instrument Compatibility </h5>
                         <h1 className='text-black'>Limitless Instrument Integrations </h1>
                         <p className='text-black'>Create an integrated lab environment with error-free data flow</p>
                    </div>
                        
             </div>
                  <div className="container use-case-content pt-4">
                    <div className="row justify-content-between">
                    
                           <div className="col-md-6 order-2 order-md-2 use-case-slider use-case-slider-repoting">
                             <div className="use-case-slider-bg"> 
                                 {/* <OwlCarousel className="owl-theme" {...options}> */}
                                   <div className="item item-2 instrument-img-2">
                                     <Image src={dbo1} className="img-fluid " alt="" />
                                   </div>
                                 {/* </OwlCarousel> */}
                             </div>
                           </div>
                           <div className="col-md-6 order-1 order-md-1 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-left fw-bold text-black">Integrate with File-Based Instruments </h4>
                           </div>
                           <p className=" text-black pt-1">Seamlessly import data from instruments that generate Excel, CSV, PDF, & TXT output files.  </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-left fw-bold text-black">Integrate with Standalone Analytical Instruments </h4>
                           </div>
                           <p className="text-black pt-1">Integrate directly to standalone lab instruments and automate instrument data capture.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Integrate with RS232 & TCP/IP Port-Based Instruments</h4>
                           </div>
                              <p className="text-black pt-1">Integrate with RS232 and TCP/IP port-based instruments and enable data transfer directly into the ELN. </p>
                         </div> 
                          <div className='mt-3'>
                            <Link href='https://www.agaramtech.com/resources/instrument-list-download' className='cta-link'> See Full Instrument Compatibility  </Link> 
                          </div>   
                        </div> 
                      </div>
                    </div>
                    
                  </div>             
        </div>
        <div className='pt-5'>
               <div className='container'>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Smart Operational Sync</h5>
                         <h1 className='text-black'> Comprehensive System Integrations  </h1>
                         <p>Enable smooth, traceable data transfer across multiple systems.</p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Qualis LIMS Integration</h4>
                           </div>
                           <p className=" text-black pt-1">THandle test executions and SOPs for samples, batches, and tests registered within LIMS, and push results back from ELN to LIMS.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Logilab SDMS Integration</h4>
                           </div>
                           <p className="text-black pt-1">Integrate with SDMS to automate instrument data capture for repeated or sequential instrument runs.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">External System Integrations via REST APIs</h4>
                           </div>
                           <p className="text-black pt-1">Enable seamless integration with external software such as ERP, MES, CRM, etc., via REST APIs.</p>
                         </div>
                           <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Link Data with Experimental Records</h4>
                           </div>
                           <p className="text-black pt-1">Link raw instrument data and metadata directly to experimental records, ensuring full traceability.</p>
                         </div>
                           <div className='mt-3'>
                            <Link href='/product-brochure-download' className='cta-link'> Download Brochure </Link> 
                          </div> 
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider use-case-slider-insrument">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item item-2">
                                     <Image src={db2} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                    <div className="item item-2">
                                     <Image src={db3} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='container'>
                  <div className='use-case-bg-Inventory-section text-center use-case-section-space--pt_80 pt-5'>
                      <h1 className='text-center'>How Can you Optimize Instrument Data  Flow in Your Lab?</h1>
                       <p className='mt-3'>Unlock Precision & Speed with Instrument Integrations.</p>
                       <div className='inventory-today-cards mt-5'>
                        <div className='row'>
                        <div className='col-lg-3'>
                                <div className='inventory-card collaboration-inventory-card'> 
                                <Image src={sample} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Flexible Instrument Integrations </h5>
                                    <p>Seamlessly integrate with all types of analytical instruments without any limits.</p>
                                  </div>                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two collaboration-inventory-card'>
                                <Image src={sample2} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Automated Data Capture </h5>
                                    <p>Reduce manual work and human errors by extracting data from various instruments automatically.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card collaboration-inventory-card'>
                                <Image src={sample3} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''> Connected Lab Ecosystem  </h5>
                                    <p>Create a cohesive digital lab by integrating instruments and systems into the ELN.  </p>
                                  </div>
                               </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two collaboration-inventory-card'>
                                <Image src={sample4} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='Collaboration-card-content'>
                                    <h5 className=''>Enhanced Data Reliability and Traceability </h5>
                                    <p>Ensure accurate and traceable instrument data transfer from start to finish. </p>
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
                        <p className='text-black ps-2 pt-4 mb-0'> Speed up your science by integrating analytical instruments  </p>
                       <h2 className='text-black ps-2'>Automate Data Capture, Reduce Errors, &  <span className="line-break"><br /></span>  Accelerate Your Discoveries</h2> 
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
