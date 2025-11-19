'use client';
import Link from 'next/link';
import Image from 'next/image';
import '../resposive.css'
import Header from '@/components/header';
import React, { useState, useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import dbos from '../../../eln/public/assets/images/use-case/Structured_one.svg';
import dbos2 from '../../../eln/public/assets/images/use-case/Structured_second.svg';
import dbo1 from '../../../eln/public/assets/images/use-case/Dynamic_one.svg';
import dbo2 from '../../../eln/public/assets/images/use-case/Dynamic_two.svg';
import dbo3 from '../../../eln/public/assets/images/use-case/Dynamic_three.svg';
import db2 from '../../../eln/public/assets/images/use-case/Notifications_one.svg';
import db3 from '../../../eln/public/assets/images/use-case/Notifications_two.svg';
import db_one from '../../../eln/public/assets/images/use-case/Audit-Ready-one.svg';
import db_two  from '../../../eln/public/assets/images/use-case/Audit-Ready-two.svg';
import db_three from '../../../eln/public/assets/images/use-case/Audit-Ready-three.svg';
import sample from '../../../eln/public/assets/images/use-case/turn-project-one.png';
import sample2 from '../../../eln/public/assets/images/use-case/turn-project-two.png';
import sample3 from '../../../eln/public/assets/images/use-case/turn-project-three.png';
import sample4 from '../../../eln/public/assets/images/use-case/turn-project-four.png';
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
    autoplay:false,
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
                <div className=" project-use-case-banner">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                                <div className='container text-center '>
                                    <div className="text-center use-case-bg-heading-content">
                                        <h3 className='pt-3 text-black'> Projects Planned, Tasks Tamed:</h3>
                                        <h1 className="l_height28 text-center text-black py-4 inline-text" data-wow-delay="0.4s">
                                          Where Scientific Research Meets  <span className='inline-text-precise py-2 px-2'>Structured Workflows </span> 
                                            {/* <span className='inline-text-precise py-2 px-2'>Precise Tracking,</span> <Image src={sample5} className="img-fluid inline-text-img" alt=""/> & Control  */}
                                        </h1>
                                        <p className=''>Plan, Assign, and Execute Workflows with Complete Control <Image src={sample6} className="img-fluid ms-2 Fingertips" alt="" /></p> 
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
                         <h5 className='smart-storage'>Structured Project Planning </h5>
                         <h1 className=''>From Vision to Execution</h1>
                         <p>Manage Research Like a Pro or Where plans become progress.</p>
                    </div>       
             </div>
                  <div className="container use-case-content pt-5">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Hierarchical Project Structure</h4>
                           </div>
                           <p className=" text-black pt-1">Break down research initiatives into projects, sub-projects, experiments, & tasks, mirroring actual lab workflows.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Cross-Functional Collaboration </h4>
                           </div>
                           <p className="text-black pt-1">Assign tasks across teams with defined roles & responsibilities, facilitating seamless collaboration.</p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black"> Configurable Folder Alignment</h4>
                           </div>
                           <p className="text-black pt-1">Organize projects and experiments into structured folders that reflect your lab’s way of working.</p>
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
                                     <Image src={dbos2} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item ">
                                     <Image src={dbos} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>

 

             <div className='Equipment pt-5'>
               <div className='container '>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Dynamic Task Management  </h5>
                         <h1 className='text-black'>Everyone Knows What’s Next </h1>
                         <p className='text-black'>Keep Workflows Moving Without Bottlenecks  </p>
                    </div>
                        
             </div>
                  <div className="container use-case-content pt-4">
                    <div className="row justify-content-between">
                    
                           <div className="col-md-6 order-2 order-md-2 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                    <div className="item item-2">
                                     <Image src={dbo3} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                              <div className="item item-2">
                                  <img 
                                      src="/assets/images/use-case/Dynamic_one.svg" 
                                      alt="Dynamic One"
                                      className="use-case-slider-image img-fluid"
                                      style={{ width: '100%', height: 'auto' }} 
                                    />
                               </div>
                                   <div className="item item-2">
                                     <Image src={dbo2} className="img-fluid use-case-slider-image"   alt="" />
                                   </div>
                                 
                                 </OwlCarousel>
                             </div>
                           </div>
                           <div className="col-md-6 order-1 order-md-1 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-left fw-bold text-black"> Smart Task Allocation </h4>
                           </div>
                           <p className=" text-black pt-1">Assign tasks based on roles, expertise, or workload, adding estimated timelines and dependencies for a transparent schedule.  </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-left fw-bold text-black"> Progress Visualization</h4>
                           </div>
                           <p className="text-black pt-1">Track task advancement through role-based dashboards, status indicators, and milestone monitoring—so everyone knows what’s pending, ongoing, or completed </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                              <h4 className="text-left fw-bold text-black">  Template-Based task execution </h4>
                           </div>
                              <p className="text-black pt-1">Standardize recurring experiments or workflows with predefined templates, ensuring consistency, reproducibility, and faster task setup. </p>
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
                         <h5 className='smart-storage'>Notifications & Reminders </h5> 
                         <h1 className='text-black'> Stay Ahead of Deadlines </h1>
                         <p>No Missed Steps, No Missed Dates </p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Automated Alerts for Due Dates</h4>
                           </div>
                           <p className=" text-black pt-1">Receive reminders for upcoming deadlines, overdue tasks, or approaching milestones via notifications. </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black">Task & Sample Lifecycle Monitoring</h4>
                           </div>
                           <p className="text-black pt-1">Monitor every stage of tasks and sample usage, providing instant visibility and end-to-end control. </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black"> Real-Time Updates on team Progress</h4>
                           </div>
                           <p className="text-black pt-1">Track task updates, status changes, and project adjustments as they happen, ensuring everyone stays informed</p>
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
               <div className='pt-5'>
               <div className='container'>
                    <div className='text-center use-case-section-heading use-case-section-space--pt_100'>
                         <h5 className='smart-storage'>Audit-Ready Records</h5> 
                         <h1 className='text-black'> Compliance Without the Chaos </h1>
                         <p>Maintain Traceability from Planning to Completion  </p>
                    </div>         
             </div>
                  <div className="container use-case-content pt-3">
                    <div className="row">
                      <div className="col-lg-6 use-case-content-col">
                       <div className="">
                         <div>
                           <div className="d-flex ">
                             <h4 className="text-center fw-bold text-black">Time-Stamped Activity Logs </h4>
                           </div>
                           <p className=" text-black pt-1">Capture every project-related action with a full audit trail, detailing who did what, when, and why.  </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className=" text-center fw-bold text-black"> Version History for Tasks & Documents</h4>
                           </div>
                           <p className="text-black pt-1">Preserve versions of task descriptions, attached files, and project plans to ensure transparency and reproducibility.  </p>
                         </div>
             
                         <div>
                           <div className="d-flex">
                             <h4 className="text-center fw-bold text-black"> Access Control & Role-Based Permissions</h4>
                           </div>
                           <p className="text-black pt-1">Manage who can view, edit, or delete tasks and projects, ensuring secure and compliant project management. </p>
                         </div>
                         <div className='mt-3'>
                            <Link href='/product-brochure-download' className='cta-link'> Download Brochure </Link> 
                          </div>
                        </div> 
                      </div>
                           <div className="col-lg-6 use-case-slider">
                             <div className="use-case-slider-bg"> 
                                 <OwlCarousel className="owl-theme" {...options}>
                                   <div className="item item-2">
                                     <Image src={db_one} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                   <div className="item item-2">
                                     <Image src={db_two} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                     <div className="item item-2">
                                     <Image src={db_three} className="img-fluid use-case-slider-image" alt=""/>
                                   </div>
                                 </OwlCarousel>
                             </div>
                           </div>
                    </div>
                    
                  </div>              
             </div>
             <div className='container'>
                  <div className='use-case-bg-Inventory-section text-center use-case-section-space--pt_80'>
                      <h1 className='text-center'>Turn Projects into Progress</h1>
                       <p className='mt-3'>Streamline planning, assignments, and execution—all in one place</p>


                       <div className='inventory-today-cards mt-5'>
                        <div className='row'>
                        <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Organize Workflows Your Way </h5>
                                    <p>Structure tasks and projects to mirror your lab’s unique process</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample2} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>One Platform, Multiple Projects </h5>
                                    <p>Manage diverse research streams effortlessly in one unified space</p>
                                  </div>
                            
                                    </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card'>
                                <Image src={sample3} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Centralized Collaboration</h5>
                                    <p>Keep every contributor connected and aligned across sites and teams. </p>
                                  </div>
                               </div>
                            </div>
                            <div className='col-lg-3'>
                                <div className='inventory-card inventory-card-two'>
                                <Image src={sample4} className="img-fluid inventory-card-img" alt=""/>
                                  <div className='inventory-card-content'>
                                    <h5 className=''>Visualize Timelines and Dependencies </h5>
                                    <p>Anticipate what’s next with visual schedules and well-defined dependencies. </p>
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
                                     <p className='text-black ps-2 pt-4 mb-0'> Streamline Research Projects, From Planning to Execution </p>
                                    <h2 className='text-black ps-2'>Keep tasks, samples, and teams aligned  <span className="line-break"><br /></span>  -in one platform. </h2> 
                                   <div className='text-start mb-4 ps-2 pt-4 cta-btn-ps'>
                                   <a className=' btn btn--black rounded-pill' href='https://logilabelnlite.azurewebsites.net/register'>Try Now</a>
                                    <a className='btn btn--white rounded-pill ms-4 cta-btn-ms ' href='/contact-us'>Contact Us</a>
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
