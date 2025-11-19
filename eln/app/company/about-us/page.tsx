"use client";
import React from 'react'
import CountUp from "react-countup";
import  Link  from 'next/link'
import Image from "next/image";
import logilabserver from '../../../public/assets/images/about/launch of logilab server edition.svg'; 
import logilabserver1 from '../../../public/assets/images/about/pro resized.svg'; 
import logilabserver2 from '../../../public/assets/images/about/logilab eln- 2005.svg'; 
import logilabserver3 from '../../../public/assets/images/about/logilab eln about us page.svg'; 
import logilabserver4 from '../../../public/assets/images/about/launch of eln lite.svg';   
import { Container, Row, Col} from 'react-bootstrap';  
import { BrowserRouter, Route} from "react-router-dom";
import Reactt, { useState, useEffect, useRef } from 'react';
import cta2 from '../../../public/assets/images/cta2.svg' 
import 'animate.css';
import WOW from 'wowjs';
import { BsArrowUpRightCircle} from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import Moreproduct from '@/components/moreproduct';
import CorevalueItem from '@/components/corevalueItem';
import Clientsimage from '@/components/clients-image-section';
import Footer from '@/app/footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
// import Clientsimage from '@/components/clients-image-section';
// import Moreproduct from '@/components/moreproduct';

function AboutUs() { 
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const ref = useRef(null);

  const facts = [
    { title: "Successfully work with", count: 250, text: "Customers across several Industries" },
    { title: "Across the globe", count: 30, text: "Countries" },
    { title: "Team of more than", count: 100, text: "Team Members" },
    { title: "Enterprise class solution stack of", count: 5, text: "Products" },
  ];

  const [animatedFacts, setAnimatedFacts] = useState(
    facts.map((fact) => ({
      ...fact,
      currentCount: 0, // Start count at 0
    }))
  );

  // Preloader logic: Runs for 3 seconds, then disappears
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 500); // Remove preloader after fade-out
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer: Detect when section is in viewport (only after preloader)
  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [loading]); // Only run observer after preloader finishes

  // Animate facts when section is visible
  useEffect(() => {
    if (isVisible) {
      const totalDuration = 1000; // 2 seconds animation
      const steps = 25; // Smooth animation in 50 steps
      const interval = totalDuration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setAnimatedFacts((prevFacts) =>
          prevFacts.map((fact) => ({
            ...fact,
            currentCount: Math.min(fact.count, fact.currentCount + fact.count / steps),
          }))
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    }
  }, [isVisible]); // Run only when the section is visible

  // Render preloader first
  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }
  return (
    <div> 
      <Header/>
      <div className='about-us'>
      <div className="soltionbg solutionmain security_banner_content ">
    <div className="container ">
        <div className="row">
          <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
            <div className='container text-center'>
            <div className="solution_security_banner_content bannerresolution text-center">
            <h1 className='wow fadeInUp pt-3'>Trusted, Dependable, Efficient</h1>
            <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
               Eliminate legacy processes that hamper your scientific research and discovery
            </p>
            <div className="d-flex action_btn justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
              <Link href="/contact-us" className="btn btn--white text-center">
              Contact Us
              </Link>
              <Link href="/solution" className="btn btn--white mx-4 text-center">
              Explore Solutions
              </Link>
            </div>
            </div>
            </div>
       </div>
       </div>
       </div>
       </div>
        </div> 
        <div className="aboutus-wrapper section-space--ptb_100">
            <Container>
                <div className="cybersecurity-about-box">
                    <Row>
                        <Col lg={4}>
                            <div className="modern-number-01">
                                <h2 className="heading me-5"><span className="mark-text">27+</span>Years of Excellence </h2>
                                <h3 className="heading mt-30 fw-bold">in transforming lab practices </h3>
                            </div>
                        </Col>
                        <Col lg={7} className="offset-lg-1">
                            <div className="conact-us-wrap-one managed-it">
                                {/* <h5 className="heading f_700">Agaram Technologies is a <span className="text-color-primary"> seasoned pioneer </span> in the realm of Laboratory informatics, earning its reputation as a leading provider of enterprise-class software solutions for laboratories & analytical instrumentation manufacturers across the globe. </h5> */}
                                <h5 className='heading f_700'>Logilab ELN by Agaram Technologies - an <span className="text-color-primary">Electronic Lab Notebook </span>that transforms your laboratory into a fully digital, compliant, and paperless workspace, while maintaining your research legacy</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
        <div className="machine-learning-about-company-area machine-learning-about-bg section-space--pb_120">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="section-title-wrap text-left section-space--mb_30">
                            {/* <h6 className="section-sub-title mb_20 f_700">Our Expertise</h6> */}  
                            {/* <h3 className='heading f_700 Enterprise_Class'>An <span className="text-color-primary">electronic lab notebook </span> <br />to record & track your experimental  <br />and research data</h3>  */}
                            {/* <h3 className="heading f_700 Enterprise_Class">Enterprise-Class <span className="text-color-primary">Laboratory Informatics <br />  </span> & Automation products <br /></h3> */}
                            {/* <h3 className="heading f_700 Enterprise_Class">Two Decades of <br/><span className="text-color-primary"> Logilab Electronic Lab Notebook</span></h3> */}
                             <h3 className='heading f_700 Enterprise_Class'>An <span className="text-color-primary">Electronic Lab Notebook </span><br/>that has evolved over 2 Decades </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="image-inner-video-section">
                            <div className="main-video-box video-popup">
                            <a href="https://youtu.be/xjfjjvHNbWc?si=6e2E3YjeDuey42XF" target="_blank" className="video-link  mt_30">                            
                                    <div className="single-popup-wrap">
                                    <img className="carousel-img img-fluid w-100 h-100" src="../../assets/images/about/agaram1.svg" alt="" />
                                        <div className="ht-popup-video video-button">
                                            <div className="video-mark">
                                                <div className="wave-pulse wave-pulse-1"></div>
                                                <div className="wave-pulse wave-pulse-2"></div>
                                            </div>
                                            <div className="video-button__two">
                                                <div className="video-play">
                                                    <span className="video-play-icon"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="machine-learning-mark-text mt_30">                               
                           “Logilab ELN is designed for seamless compliance, enhanced collaboration, and fully paperless workflows“
                           <em><b>-Mukunth Venkatesan , Director & CEO , Agaram Technologies </b>  </em>                            
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} className="ms-auto">
                        <div className="machine-learning-about-content">
                            <div className="section-title mb_20 mt-3">
                                <p className="mt_20"> Logilab ELN was designed & developed by Agaram Technologies, a leading provider of integrated laboratory informatics software solutions. Exclusively focused on laboratory informatics, Agaram has built a strong market position over the last two decades by delivering powerful, user-friendly, and affordable software products that integrate all laboratory functions seamlessly. </p>
                                <p className="mt_20">Launched in 2009, Logilab ELN was one of the first electronic lab notebooks designed to capture data from analytical instruments, initially offered as an on-premise paperless solution. </p>
                                <p>In 2021, it was relaunched as a cloud-based SaaS application, offering cost-effectiveness and scalability for labs and research organizations globally.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="gradation-process-area bg-lblue section-space--ptb_100">
            <Container>
                <Row>
                <Col lg={12}>
                    <div className="section-title-wrap text-center section-space--mb_60">
                    <h3 className="heading f_700">Our Journey through the Years </h3>
                    </div>
                </Col>
                </Row>
                <Row className="section-space--pb_100">
                <Col lg={12}>
                    <div className="ht-gradation style-01">
                    {/* Single item gradation Start */}
                    <div
                        className="item item-1 animate wow fadeInRight"
                        data-wow-delay="0.1s"
                    >
                        <div className="line"></div>
                        <div className="circle-wrap">
                        <div className="mask">
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                            <div className="wave-pulse wave-pulse-3"></div>
                        </div>
                        <h6 className="circle">2000</h6>
                        </div>
                        <div className="content-wrap">
                        {/* <img
                            className="img-fluid mb_20"
                            src="../../assets/images/about/launch of logilab server edition.svg"
                            alt="Laboratory Glassware Manufacturing"
                        /> */}
                        <Image src={logilabserver} className="img-fluid mb_20" alt=""/> 

                         <h6 className="heading">Launch of Logilab Server Edition</h6>
                        </div>
                    </div>

                    {/* Single item gradation End */}

                    <div
                        className="item item-1 animate wow fadeInRight"
                        data-wow-delay="0.15s"
                    >
                        <div className="line"></div>
                        <div className="circle-wrap">
                        <div className="mask">
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                            <div className="wave-pulse wave-pulse-3"></div>
                        </div>
                        <h6 className="circle">2003</h6>
                        </div>
                        <div className="content-wrap">
                        {/* <img
                            className="img-fluid mb_20"
                            src="../../assets/images/about/pro resized.svg"
                            alt="Lab Instrument Distribution"
                        /> */}
                        <Image src={logilabserver1} className="img-fluid mb_20" alt=""/> 
                        <h6 className="heading">Launch of Logilab pro</h6>
                        </div>
                    </div>

                    <div
                        className="item item-1 animate wow fadeInRight"
                        data-wow-delay="0.20s"
                    >
                        <div className="line"></div>
                        <div className="circle-wrap">
                        <div className="mask">
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                            <div className="wave-pulse wave-pulse-3"></div>
                        </div>
                        <h6 className="circle">2005</h6>
                        </div>
                        <div className="content-wrap ">
                          <div className=''>
                          {/* <img
                            className="img-fluid mb_20 d-flex"
                            src="../../assets/images/about/logilab eln- 2005.svg"
                            alt="Instrument Manufacturing"
                        /> */}
                        <Image src={logilabserver2} className="img-fluid mb_20" alt="" style={{width:'127px', height:'47px'}}/> 
                          </div>
                       
                        <h6 className="heading">Introduction of Logilab ELN </h6>
                        </div>
                    </div>

                    <div
                        className="item item-1 animate wow fadeInRight"
                        data-wow-delay="0.20s"
                    >
                        <div className="line"></div>
                        <div className="circle-wrap">
                        <div className="mask">
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                            <div className="wave-pulse wave-pulse-3"></div>
                        </div>
                        <h6 className="circle">2020</h6>
                        </div>
                        <div className="content-wrap">
                        {/* <img
                            className="img-fluid mb_20"
                            src="../../assets/images/about/logilab eln about us page.svg"
                            alt="Instrument Software Development"
                        /> */}
                        <Image src={logilabserver3} className="img-fluid mb_20" alt=""/> 
                        <h6 className="heading">Cloud-based Logilab ELN Launched</h6>
                        </div>
                    </div>
                    <div
                        className="item item-1 animate wow fadeInRight"
                        data-wow-delay="0.20s"
                    >
                        <div className="line"></div>
                        <div className="circle-wrap">
                        <div className="mask">
                            <div className="wave-pulse wave-pulse-1"></div>
                            <div className="wave-pulse wave-pulse-2"></div>
                            <div className="wave-pulse wave-pulse-3"></div>
                        </div>
                        <h6 className="circle">2024</h6>
                        </div>
                        <div className="content-wrap">
                        {/* <img
                            className="img-fluid mb_20"
                            src="../../assets/images/about/launch of eln lite.svg"
                            alt="Laboratory Informatics Software Products"
                        /> */}
                         <Image src={logilabserver4} className="img-fluid mb_20" alt=""/> 
                        <h6 className="heading">
                            Launch of Logilab ELN Free
                        </h6>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
            </Container>
       </div>
       <div className="managed-it-fun-fact-wrapper section-space--ptb_100">
     <div className="container">
        <div className="section-title-wrap text-center section-space--mb_60">
          <h3 className="heading f_700">Growing Together: Our Expanding Footprint</h3>
        </div>
        <div className="fun-fact-grid-4" ref={ref}>
      {animatedFacts.map((fact, index) => (
        <div className="grid-item wow move-up" key={index}>
          <div className="fun-fact--one text-center">
            <h5 className="fun-fact__title">{fact.title}</h5>
            <div className="fun-fact__count counter">
              {Math.floor(fact.currentCount)}
              <FiPlus className="count_plus" />
            </div>
            <span className="fun-fact__text">{fact.text}</span>
          </div>
        </div>
      ))}
    </div>
      </div>
       </div>
       <div className="feature-images-wrapper  section-space--pt_60 section-space--pb_60 bg-lblue">
     <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-wrap text-center section-space--mb_10">
            <h3 className="center-heading f_700 ">Set Your Paperless Lab in Action</h3>
            <p className='f_600 mt-3 f_size_17'>Keep your lab organized by digitally recording experiments, managing data in single repository, <br/>creating workflows, validating results, and easily find what you need </p>
            <CorevalueItem/>
          </div>
        </div>
      </div>
      {/* <CorevalueItem/> */}
    </div>
        </div>
      <Clientsimage/>
      <div className="cont backgr_col calender_cont">
      <div className="Devepoe_space">
        <div className="Devepoe_space">
                  <div className="">
                    <div className='container about-tab2 mt-5 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 l_height15">Simple, customizable, and organized</h3>
                              <p className='Ensure-sub-bl'>Kickstart your paperless lab with Logilab ELN </p>
                                <div className="d-flex action_btn justify-content-center align-items-center mt-4"> 
                                  <Link href="/solution" className="btn btn--blue mx-4">Explore Solutions</Link>         
                                  <Link href="/pricing" className="btn btn--blue ">Compare Plans</Link> 
                                </div>
                               </div>
                        </div>

                          <div className="col-lg-6 imageposition">    
                            <Image src={cta2} className="img-fluid w-75  imageposition-width" alt=""/>                
                          </div>
                      </div>                     
                    </div>
                  </div>
                </div>
        </div>
        </div>   
      <Moreproduct/>
      <Footer/>
    </div>
  )
}

export default AboutUs;