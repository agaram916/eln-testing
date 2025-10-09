'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../resposive.css'
import Header from '@/components/header';
import React, { useState, useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import collobration_one from '../../../eln/public/assets/images/Collaboration/Collaboration_without _Compromise _1_dashboard.png';
import collobration_two from '../../../eln/public/assets/images/Collaboration/multi_site.png';
import collobration_three from '../../../eln/public/assets/images/Collaboration/Collaboration_without_Compromise_3_tag_comment share.svg';
import collobration_four from '../../../eln/public/assets/images/Collaboration/3rd section - team of all size.svg';
import dbo1 from '../../../eln/public/assets/images/Collaboration/Optimized.png';
import dbo2 from '../../../eln/public/assets/images/use-case/lab-Maintenance-two.png';
import dbo3 from '../../../eln/public/assets/images/use-case/lab-Maintenance-4.png';
import dbo4 from '../../../eln/public/assets/images/use-case/lab-Maintenance-four.svg';
import db1 from '../../../eln/public/assets/images/use-case/smart-2.png';
import db2 from '../../../eln/public/assets/images/Collaboration/Compromise.svg';
import db3 from '../../../eln/public/assets/images/use-case/smart-three.png';
import sample from '../../../eln/public/assets/images/Collaboration/accesible_platform.png';
import sample2 from '../../../eln/public/assets/images/Collaboration/KPI_glance.png';
import sample3 from '../../../eln/public/assets/images/Collaboration/real _timre _collaboration.png';
import sample4 from '../../../eln/public/assets/images/Collaboration/seamless_knowledge_flow.png';
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
            <div className='use-case-bg collaboration'>
            <div className='use-case position-relative'>
                <div className="collaboration-use-case-banner">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                                <div className='container text-center '>
                                    <div className="text-center use-case-bg-heading-content collaboration-bg-heading-content">
                                        <h3 className='pt-3 text-black'> <span style={{fontWeight:'300'}}>Collaboration &</span> <b>Team Management</b></h3>
                                        <h1 className="l_height28 text-center text-black py-4 inline-text" data-wow-delay="0.4s">
                                            <span className='inline-text-precise py-2 px-2'>Innovate Together,</span> <Image src={sample5} className="img-fluid inline-text-img" alt=""/>All in One Platform. 
                                        </h1>
                                        <p className=''>Simplify lab workflow and collaborate without a hitch. <Image src={sample6} className="img-fluid ms-2 Fingertips" alt="" /></p> 
                                    </div>
                                           <div className="homebutton action_btn d-flex justify-content-center align-items-center mt_15 wow fadeInUp" data-wow-delay="0.6s">
                                          <Link href="/request-a-demo" className="btn btn--black rounded-pill  mx-2">
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
            <div className='use-case-bg-margin-top'>
            <div className='container use-case-section-space-pt_100'>
            </div>

            <div className='mt-5 use-mt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-space--pt_100 use-case-section-heading'>
                         <h5 className='smart-storage'> Collaboration-Driven Platform</h5> 
                         <h1 className=''>For Teams of All Sizes </h1>
                         <p>Work in harmony and boost your team’s efficiency</p>
                    </div>       
             </div>
                  <div className="container use-case-content pt-5">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                       <div className="">
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Cloud-Ready Centralized Platform </h4>
                           </div>
                           <p className=" text-black pt-1">Centralize your research data in a unified, cloud-based collaborative platform.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Multi-Site Architecture</h4>
                           </div>
                           <p className="text-black pt-1">Invite stakeholders to collaborate with controlled access across multiple locations, departments, and business unit</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Secure, Worldwide Access </h4>
                           </div>
                           <p className="text-black pt-1">Cloud-based deployment ensures seamless data access from anywhere, at any time in the world.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Scalable and Flexible</h4>
                           </div>
                           <p className="text-black pt-1">Easily adapt the platform to your team's and organization's evolving needs.</p>
                         </div>
                          <div className='mt-4'>
                            <Link href='https://logilabelnlite.azurewebsites.net/register' className='cta-link'> Try ELN Free Edition </Link>
                          </div>
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                                     {/* <div className="use-case-slider-bg">   */}
                                   {/* <div className="item item-2"> */}
                                     <Image src={db2} className="img-fluid use-case-slider-image collaboration-slider-image" alt=""/>
                                   {/* </div>      */}
                             {/* </div> */}
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='pt-5 padding-top-5'>
               <div className='container '>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Optimized Lab Operations</h5>
                         <h1 className='text-black'>Effortless Lab Workflow Management</h1>
                         <p className='text-black'>Everything in order for a seamless team experience</p>
                    </div>
                        
             </div>
                  <div className="container use-case-content pt-4">
                    <div className="row justify-content-between">
                    
                           <div className="col-md-6 order-2 order-md-2 use-case-slider">
                             <div className="use-case-slider-bg use-case-slider-bg-img"> 
                                 {/* <OwlCarousel className="owl-theme" {...options}> */}
                                   <div className="item item-2">
                                     <Image src={dbo1} className="img-fluid" alt="" style={{width:'500px'}}/>
                                   </div>
                                 {/* </OwlCarousel> */}
                             </div>
                           </div>
                           <div className="col-md-6 order-1 order-md-1 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-left fw-bold text-black">Organize Your Team </h4>
                           </div>
                           <p className=" text-black pt-1">Collaborate on projects across multiple teams with role-based access to data and workflows.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-left fw-bold text-black">Assign & Execute Experiments </h4>
                           </div>
                           <p className="text-black pt-1">Assign tasks and experiments to project teams and monitor progress at every stage.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">Peer Reviews & Sign-Off</h4>
                           </div>
                              <p className="text-black pt-1">Review, validate, and sign-off on experiments together with your team.</p>
                         </div> 
                             <div className='mt-4'>
                            <Link href='/product-brochure-download' className='cta-link'> Download Brochure </Link>
                          </div>     
                        </div> 
                      </div>
                    </div>
                  </div>             
        </div>
        <div className='pt-5'>
               <div className='container'>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Total Lab Visibility </h5>
                         <h1 className='text-black'> Collaboration Without Compromise </h1>
                         <p>Stay connected while keeping data secure</p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Controlled Access</h4>
                           </div>
                           <p className=" text-black pt-1">Logically separate data by site/user role to ensure controlled access to sensitive data.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Secure Data Sharing</h4>
                           </div>
                           <p className="text-black pt-1">Share data and experiments with your team using read-only or read/write permissions.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Dashboards & Alerts</h4>
                           </div>
                           <p className="text-black pt-1">Stay on top of KPIs in your lab with comprehensive dashboards and personalized alerts.</p>
                         </div>
                           <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black">Tag & Comment</h4>
                           </div>
                           <p className="text-black pt-1">Tag team members and leave comments for real-time discussions and feedback.</p>
                         </div>
                      <div className='mt-4'>
                            <Link href='/request-a-demo' className='cta-link'> Request a Demo </Link>
                          </div> 
                        </div> 
                      </div>
                              <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item ">
                                     <Image src={collobration_one} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item ">
                                     <Image src={collobration_two} className="img-fluid" alt="" />
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='container'>
                  <div className='use-case-bg-Inventory-section text-center use-case-section-space--pt_80 pt-5'>
                      <h1 className='text-center'>Stay in Sync With Your Team</h1>
                       <p className='mt-3'>Reach New Heights with Smarter, Streamlined Collaboration in Your Lab.</p>
                       <div className='inventory-today-cards mt-5'>
                        <div className='row'>
                        <div className='col-lg-3'>
                                <div className='inventory-card collaboration-inventory-card'>
                                <Image src={sample} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>All-In-One Accessible Platform</h5>
                                    <p>Unite your team, your data, and your discoveries with a powerful, searchable platform built to enhance communication. </p>
                                  </div>
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two collaboration-inventory-card'>
                                <Image src={sample2} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>KPIs at a Glance</h5>
                                    <p>Get instant visibility into key metrics and project progress through intuitive dashboards and tailored alerts.</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card collaboration-inventory-card'>
                                <Image src={sample3} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Real-Time Collaboration</h5>
                                    <p>Enable teams to work simultaneously on experiments, share observations and review their work — no matter where they are.</p>
                                  </div>
                               </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two collaboration-inventory-card'>
                                <Image src={sample4} className="img-fluid Collaboration-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Seamless Knowledge Flow</h5>
                                    <p>Simplify data sharing across teams with flexible import and export options supporting multiple formats.</p>
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
                                     <p className='text-black ps-2 pt-4 mb-0'> Collaborate effortlessly without the endless email chains </p>
                                    <h2 className='text-black ps-2'> One Platform to Track Progress, <span className="line-break"><br /></span>Share Insights, and Stay Aligned</h2> 
                                   <div className='text-start mb-4 ps-2 pt-4 cta-btn-ps'>
                                   <a className=' btn btn--black rounded-pill' href='https://logilabelnlite.azurewebsites.net/register'>Try for free </a>
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
