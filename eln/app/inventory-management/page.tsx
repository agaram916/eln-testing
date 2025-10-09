'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../resposive.css'
import Header from '@/components/header';
import React, { useState, useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import dbos from '../../../eln/public/assets/images/use-case//configurable-inventory-structure.png';
import dbos2 from '../../../eln/public/assets/images/use-case/configurable-inventory-structure-two.png';
import dbos3 from '../../../eln/public/assets/images/use-case//configurable-inventory-structure-three.png';
import dbos4 from '../../../eln/public/assets/images/use-case//configurable-inventory-structure-four.png';
import dbo1 from '../../../eln/public/assets/images/use-case/lab-Maintenance-one.png';
import dbo2 from '../../../eln/public/assets/images/use-case/lab-Maintenance-two.png';
import dbo3 from '../../../eln/public/assets/images/use-case/lab-Maintenance-4.png';
import dbo4 from '../../../eln/public/assets/images/use-case/lab-Maintenance-four.svg';
import db1 from '../../../eln/public/assets/images/use-case/smart-2.png';
import db2 from '../../../eln/public/assets/images/use-case/smart-two.png';
import db3 from '../../../eln/public/assets/images/use-case/smart-three.png';
import sample from '../../../eln/public/assets/images/use-case/inventory-today-sample.png';
import sample2 from '../../../eln/public/assets/images/use-case/inventory-today-sample-two.png';
import sample3 from '../../../eln/public/assets/images/use-case/inventory-today-sample-three.png';
import sample4 from '../../../eln/public/assets/images/use-case/inventory-today-sample-four.png';
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
            <div className='use-case-bg inventory'>
            <div className='use-case position-relative'>
                <div className="use-case-banner">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                                <div className='container text-center '>
                                    <div className="text-center use-case-bg-heading-content">
                                        <h3 className='pt-3 text-black'> <span style={{fontWeight:'300'}}>Material &</span> <b>Sample Management</b></h3>
                                        <h1 className="l_height28 text-center text-black py-4 inline-text" data-wow-delay="0.4s">
                                            <span className='inline-text-precise py-2 px-2'>Precise Tracking,</span> <Image src={sample5} className="img-fluid inline-text-img" alt=""/> & Control 
                                        </h1>
                                        <p className=''>Simplified Lab Inventory  at Your Fingertips <Image src={sample6} className="img-fluid ms-2 Fingertips" alt="" /></p> 
                                    </div>
                                           <div className="homebutton d-flex justify-content-center align-items-center mt_15 wow fadeInUp" data-wow-delay="0.6s">
                                          <Link href="/request-a-demo" className="btn btn--black  rounded-pill mx-2">
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
                
       

            <div className='mt-5 use-mt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-space--pt_100 use-case-section-heading use-case-section-space--pt_100-inventory'>
                         <h5 className='smart-storage'>360&deg; Smart Storage</h5>
                         <h1 className=''>Complete Inventory Control</h1>
                         <p>Organize, Track, & Manage Any Type of Inventory</p>
                    </div>       
             </div>
                  <div className="container use-case-content pt-5">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Configurable Inventory Structure</h4>
                           </div>
                           <p className=" text-black pt-1">Input data seamlessly in Labsheets and Protocol templates</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Optimize workflows</h4>
                           </div>
                           <p className="text-black pt-1">Create and manage material categories, types, and track entire lineage of samples </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Sort files and folders</h4>
                           </div>
                           <p className="text-black pt-1">Define unique attributes for each inventory item to enhance traceability. </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Versatile data transfer</h4>
                           </div>
                           <p className="text-black pt-1">Get instant stock updates whenever materials are expired, moved, or consumed. </p>
                         </div>
                           <div className='mt-3'>
                            <Link href='/contact-us' className='cta-link'> Talk to sales </Link> 
                          </div>
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item ">
                                     <Image src={dbos} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item ">
                                     <Image src={dbos2} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item ">
                                     <Image src={dbos3} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item ">
                                     <Image src={dbos4} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>

     <div className='container use-case-section-space-pt_100'>
                <div className='text-center Real-Worl-section'>
                    <h1 className='smart-storage'>What Types of Lab Inventory Can You Create and Track?</h1>
                    <h6 className='text-black'>Everything Literally</h6>
                     <p className='text-black'>Design Your Inventory Around Real-World Needs</p>
                </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                      <ul>
                      <div  className="Real-Worl-section-list Real-Worl-section-expand mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={Chemicals} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                           <h4 className="f_600">Chemicals & Reagents</h4>
                          <p className="f_size_18">Track batch, expiry, hazard, and stock levels effortlessly.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                         <div className='col-lg-6'>
                      <ul>
                      <div  className=" Real-Worl-section-list Real-Worl-section-expand Real-Worl-section-expand-purple mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={Microbial} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                          <h4 className="f_600">Microbial Cultures</h4>
                          <p className="f_size_18">Capture growth conditions, passage history, and container info.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                         <div className='col-lg-6'>
                      <ul>
                      <div  className=" Real-Worl-section-list Real-Worl-section-expand Real-Worl-section-expand-yellow mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={Biological} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                          <h4 className="f_600">Biological Samples</h4>
                          <p className="f_size_18">DNA, RNA, serum, tissue, or cells—trace it all end-to-end.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                         <div className='col-lg-6'>
                      <ul>
                      <div  className=" Real-Worl-section-list Real-Worl-section-expand Real-Worl-section-expand-blue mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={Consumables} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                          <h4 className="f_600">Consumables & Supplies</h4>
                          <p className="f_size_18">Monitor usage of tips, tubes, gloves, etc., with reorder alerts.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                         <div className='col-lg-6'>
                      <ul>
                      <div  className=" Real-Worl-section-list Real-Worl-section-expand Real-Worl-section-expand-orange mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={lab} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                          <h4 className="f_600">Lab Equipment</h4>
                          <p className="f_size_18">Track  calibration, and maintenance status.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                           <div className='col-lg-6'>
                      <ul>
                      <div  className=" Real-Worl-section-list Real-Worl-section-expand Real-Worl-section-expand-yellowdark mt-5">
                    <li className="px-1 py-3 d-flex">
                        <Image src={Documents} alt="" className="me-2" style={{width:'80px', height:'60px'}}/>
                        <div className="d-flex flex-column">
                          <h4 className="f_600">Documents & SOPs</h4>
                          <p className="f_size_18">Link protocols, safety docs, or manuals directly to inventory items.</p>
                        </div>
                      </li>
                      </div>
                    </ul>
                      </div>
                      </div>   
            </div>

             <div className='Equipment pt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Equipment Calibration & Maintenance</h5>
                         <h1 className='text-black'>Proactive Lab Maintenance</h1>
                         <p className='text-black'>Minimize Downtime, Maximize Precision</p>
                    </div>
                        
             </div>
                  <div className="container use-case-content pt-4">
                    <div className="row justify-content-between">
                    
                           <div className="col-md-6 order-2 order-md-2 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item item-2">
                                     <Image src={dbo1} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item item-2">
                                     <Image src={dbo2} className="img-fluid use-case-slider-image" alt="" />
                                   </div>
                                   <div className="item item-2">
                                     <Image src={dbo3} className="img-fluid use-case-slider-image Equipment-use-case3" alt=""/>
                                   </div>
                                   <div className="item item-2">
                                     <Image src={dbo4} className="img-fluid use-case-slider-image Equipment-use-case4" alt=""/>
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                           <div className="col-md-6 order-1 order-md-1 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-left fw-bold text-black">Schedule & Perform Maintenance</h4>
                           </div>
                           <p className=" text-black pt-1">Ensure instruments stay in top condition with scheduled calibration and upkeep.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-left fw-bold text-black">Centralized Calibration & Maintenance Logs</h4>
                           </div>
                           <p className="text-black pt-1">Keep a complete record of every service, calibration, and repair.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Automated Alerts for Calibration Intervals</h4>
                           </div>
                              <p className="text-black pt-1">Never miss a calibration with timely reminders and notifications.</p>
                         </div>
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Accurate & Audit-Ready Data</h4>
                           </div>
                              <p className="text-black pt-1">Maintain compliance with well-documented, easily accessible records.</p>
                         </div>
                           <div className='mt-3'>
                            <Link href='/request-a-demo' className='cta-link'> See Product in Action </Link> 
                          </div>
                         
                        </div> 
                      </div>
                    </div>
                    
                  </div>             
        </div>
        <div className='pt-5'>
               <div className='container'>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Smart & Efficient</h5> 
                         <h1 className='text-black'> Labeling & Sample Identification</h1>
                         <p>Generate, Print & Manage Labels with Ease</p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Custom Label Templates</h4>
                           </div>
                           <p className=" text-black pt-1">Design labels with flexible formatting to match your lab’s requirements.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Barcode & QR Code Ready</h4>
                           </div>
                           <p className="text-black pt-1">Easily generate and scan barcodes or QR codes for fast, error-free sample identification, tracking, and retrieval.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Bulk Print Sample Labels</h4>
                           </div>
                           <p className="text-black pt-1">Print multiple labels in one go, with support for Zebra printers and other industry-standard label printers, ensuring fast and efficient labeling.</p>
                         </div>
                         <div className='mt-3'>
                            <Link href='/product-brochure-download' className='cta-link'> Download Brochure </Link> 
                          </div>
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   {/* <div className="item item-2">
                                     <Image src={db1} className="img-fluid use-case-slider-image" alt="" style={{width:'700px'}}/>
                                   </div> */}
                                   <div className="item item-2">
                                     <Image src={db2} className="img-fluid use-case-slider-image" alt="" style={{width:'562px'}}/>
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
                  <div className='use-case-bg-Inventory-section text-center use-case-section-space--pt_80'>
                      <h1 className='text-center'>How Will You Manage Your Inventory Today ?</h1>
                       <p className='mt-3'>The Power of Configuration, Compliance & Full Control in One Platform</p>


                       <div className='inventory-today-cards mt-5'>
                        <div className='row'>
                        <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Store Any Sample with Ease</h5>
                                    <p>Securely store and manage any type of sample, material, or reagent in a centralized digital repository.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample2} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Import & Update Inventory Effortlessly</h5>
                                    <p>Quickly import bulk data, update stock levels, and track usage history without manual effort.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample3} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Keep Full Track of Sample Lifecycle </h5>
                                    <p>Monitor every stage from acquisition to usage and disposal ensuring traceability.</p>
                                  </div>
                               </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample4} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Find What You Need, Instantly </h5>
                                    <p>Use advanced search and filtering options to locate samples, reagents, and equipment instantly. </p>
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
                                     <p className='text-black ps-2 pt-4 mb-0'> Take the hassle out of Inventory Management </p>
                                    <h2 className='text-black ps-2'>Track, Manage, and Access  your Inventory  <span className="line-break"><br /></span>  -without the stress </h2> 
                                   <div className='text-start mb-4 ps-2 pt-4 cta-btn-ps'>
                                   <a className=' btn btn--black rounded-pill' href='https://logilabelnlite.azurewebsites.net/register'>Try Now</a>
                                    <a className='btn btn--white rounded-pill ms-4 cta-btn-ms home-cta-btn-ms' href='/contact-us'>Contact Us</a>
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
