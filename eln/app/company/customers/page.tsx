"use client";
import React, { useState ,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link"; 
import Testimonial from "@/components/testimonial";
import cta2 from '../../../public/assets/images/cta2.svg'
import Moreproduct from "@/components/moreproduct";
import Image from "next/image";
// import webp from '../../public/assets/images/customers/20.webp'
import webptwentytwo from '../../../public/assets/images/customers/18.webp'
import webpeight from '../../../public/assets/images/customers/motherson.png'
import sitec from '../../../public/assets/images/customers/nisir.png'
import webpseven from '../../../public/assets/images/customers/fourrts.png'
import smtl from '../../../public/assets/images/customers/avantor.png'
import webptwel from '../../../public/assets/images/customers/12.webp'
import roquette from '../../../public/assets/images/customers/cipla.png' 
import casestudy4 from '../../../public/assets/images/casestudy/4.jpg'
import casestudy5 from '../../../public/assets/images/casestudy/1.jpg'
import casestudy6 from '../../../public/assets/images/casestudy/2.jpg'
import dbos from '../../../public/assets/images/customers/hp.png'
import e from '../../../public/assets/images/customers/megafine.svg'
import hp from '../../../public/assets/images/customers/rudolph reserch.svg'
import mbs from '../../../public/assets/images/customers/bharati vidyapeeth.svg'
import cipla from '../../../public/assets/images/customers/smtl.svg'
// import Rialto from '../../../public/assets/images/Rialto.jpg'
import Aarthi from '../../../public/assets/images/Aarthi.jpg'
// import cpi from '../../eln/public/assets/images/customers/cpi.svg'
import cpi from '../../../public/assets/images/customers/cpi.svg'
import Footer from "@/app/footer";
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
function Customers() {
 const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const projectsData = [
    {
      imageSrc: casestudy4,
      title: "How Logilab ELN helped Megafine with Sample Management",
      description: "Megafine Pharma (P) Ltd, founded in 1995, is a pharmaceutical manufacturing company with offices in India. They have approved facilities by the US Food & Drug Administration (FDA)..",
      buttonText: "Case Studies",
      link: "/casestudy-download", // Add the link here for each project
    },
    {
      imageSrc: casestudy5,
      title: "How Logilab ELN helps organizations to maintain ALCOA Data Integrity",
      description: "Data integrity, an area of increasing priority in today’s laboratory world and “The focus area” when it comes to regulatory compliance such as 21 CFR Part 11 and Eudralex Annex 11.",
      buttonText: "Whitepaper",
      link: "/whitepaper-download", // Add the link here for each project
    },
    {
      imageSrc: casestudy6,
      title: "How Logilab ELN helps Organizations in Research Data Management",
      description: "Research Data Management (RDM) refers to the methods of recording, organizing, storing, processing, and caring for information that is produced from a research project...",
      buttonText: "Whitepaper",
      link: "/whitepaper-download", // Add the link here for each project
    },
  ];


    useEffect(() => {
           const timer = setTimeout(() => {
             setFadeOut(true); 
             setTimeout(() => setLoading(false), 500); 
           }, 1000); 
           return () => clearTimeout(timer);
         }, []);
       
         if (loading) {
           return (
             <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
               <SyncLoader color="#1163ea" size={20} />
             </div>
           );
         }

  return (
    <>
    <Header/>
    <div className='about-us customers'>
     <div className="soltionbg security_banner_content  ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Our Customers
                    </h1>
                    <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                    Accelerating innovation one lab at a time
                    </p>
                    <div className="d-flex action_btn action_btn justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
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
      <div className="brand-logo-slider-area section-space--ptb_60">
        <Container>
          <Row className="align-items-center text-center">
            <Col lg={12}>
              <div className="resources-inner">
                <h3 className="heading mb-30">
                  Trusted by Our Valued{" "}
                  <span className="text-color-primary">Customers</span>
                </h3>
                <div className="button mt-30">{/* Button content here */}</div>
              </div>
              <Row className="section-space--ptb_60 colsizecustomer">
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                    <Image src={dbos} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                      <Image src={e} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                     <Image src={hp} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                    <Image src={mbs} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
            
                {/* Repeat similar structure for other logos */}
              </Row>
              <Row className="colsizecustomer">
                
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                     <Image src={cipla} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                     <Image src={webptwentytwo} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo rialto">
                     {/* <Image src={Rialto} className="img-fluid  elnimage_size" alt=""/> */}
                     <Image src={cpi} className="img-fluid elnimage_size" alt="/"/>
                  </div>
                </Col>
                <Col xs={6} md={3} lg={3}>
                  <div className="cust-logo">
                     <Image src={Aarthi} className="img-fluid  elnimage_size" alt=""/>
                  </div>
                </Col>
              </Row>
         
                  <div className="clients-more ht-btn-md text-dark fw-bold">
                         + 100 Customers
                  </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial-slider-area section-space--ptb_60 customers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h6 className="section-sub-title mb-4">Testimonials</h6>
                <h3 className="heading">
                  Hear what our customers have to{" "}
                  <span className="text-color-primary"> say about us</span>
                </h3>
              </div>
            </div>
              <Testimonial/>
          </div>
        </div>
      </div>
      <div className="projects-wrapper section-space--pb_100 section-space--pt_100 projects-masonary-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_40">
                <h3 className="mb-5">
                  Learn how our products are being used <br /> across industry
                  verticals.
                </h3>
              </div>
            </div>
          </div>
         

          <div className="text-center projects-case-wrap">
    <div className="row mesonry-list">
      {projectsData.map((project, index) => (
        <div key={index} className="col-lg-4 col-md-6 cat--2">
          <Link href={project.link}>
            <div className="projects-wrap style-01">
              <div className="projects-image-box">
                <div className="projects-image">
                  <Image
                    className="img-fluid w-100"
                    src={project.imageSrc}
                    alt={project.title}
                    width={500} // Adjust width
                    height={300} // Adjust height
                  />
                </div>
                <div className="content sizealign">
                  <h6 style={{ textAlign: 'left' }} className="heading">
                    {project.title}
                  </h6>
                  <div className="text">{project.description}</div>
                  <div className="box-projects-arrow">
                    <span className="button-text">{project.buttonText}</span>
                    <i className="fas fa-arrow-right ml-1"></i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
        </div>
      </div>

      <div className="cont backgr_col calender_cont customers">
      <div className="Devepoe_space">
        <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 mt_110 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 l_height15">Digitize. Simplify. Organize.</h3>
                              <p className='Ensure-sub-bl'>Accelerate GxP lab processes</p>
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
    </>
  );
}

export default Customers;
