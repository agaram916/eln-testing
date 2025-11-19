"use client";
// import Moreproduct from '@/components/moreproduct';
import React, { useState, useEffect} from 'react';

import  Link  from 'next/link'
import cta2 from '../../../public/assets/images/cta2.svg'
import { Container, Row, Col, Breadcrumb, Button, Card } from 'react-bootstrap';
import iso2 from '../../../public/assets/images/eln/iso.svg';
import iso from '../../../public/assets/images/eln/iso2.png';
import certificate from '../../../public/assets/images/about/certificate.webp';
import policy from '../../../public/assets/images/about/policy.png';  
import Image from "next/image";
import Moreproduct from '@/components/moreproduct';
import Footer from '../../footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
function Certifications() { 
 const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

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
    <div>
      <Header/>
         <div className='about-us certifications'>
<div className="soltionbg security_banner_content ">
    <div className="container ">
        <div className="row">
          <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
            <div className='container text-center'>
            <div className="solution_security_banner_content bannerresolution text-center">
            <h1 className='wow fadeInUp pt-3'>Certifications</h1>
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
       
          {/* About Resources Wrapper Start  */}
          <div className="client-grid-resources-wrapper section-space--pt_100">
      <Container className='Container'>
        <Row className="align-items-center">
          <Col>
            <h2 className="heading f_700">Quality Management<span className="text-color-primary"> Systems & Certifications</span></h2>
            <div className="button mt_30">
              {/* <Button variant="primary">Your Button</Button> */}
            </div>
            <p className='f_size_17 f_400'>Drive Value & Compliance with Agaram Technologies' Quality Products and Services. Our Effective Quality Management System Processes ensure we consistently deliver excellence to our customers.</p>
          </Col>
        </Row>
      </Container>
         </div>
            <div className="client-grid-resources-wrapper section-space--pt_60">
         <Container>
        <Row className="align-items-center">
          <Col>
            <h2  className="heading mb_20 f_700">Quality & Customer Satisfaction Runs in Our DNA</h2>
            <p className="mb_20 f_size_17 f_400">We help clients achieve their goals by delivering tailored products that meet their day-to-day operational needs to every last detail. With 20 years of experience serving top-tier clients, we've gained expertise in various industries that allows us to innovate and adapt to changing trends based on customer feedback.</p>
          </Col>
        </Row>
      </Container>
         </div>

         <div className="client-grid-resources-wrapper section-space--pt_60">
      <Container>
        <Row className="align-items-center mb-20">
          <Col lg={6}>
            <h2 className="heading mb_20 f_700">ISO 27001:2022 Certified</h2>
            <p className="mb-20 f_size_17 f_400">At Agaram Technologies, we are dedicated to safeguarding the confidentiality, integrity, and availability of our clients' and stakeholders' sensitive information. Our commitment to information security is exemplified by our achievement of ISO 27001 certification. We understand the importance of maintaining robust measures to protect against unauthorized access, misuse, or loss of data.</p>
            <p className="mb-20 f_size_17 f_400"> The certificate was awarded by BSCIC Certifications Private Limited for the following scope:</p>
            <p>Provision of Information Security Management System in Design & Development of Laboratory Information Management System Software Products and Services.</p>
            <div className="hero-button mt_30">

            <Link className="btn ht-btn ht-btn-md" href="/assets/pdf/eln-brochure.pdf" download="Iso-Certificate">
                 Download ISO Certificate
            </Link>

            </div>
          </Col>
          <Col lg={6}>
            {/* <Image src="../../assets/images/eln/iso2.png" className="img-fluid max-400" fluid style={{ float: 'right' }} /> */}
            <Image src={iso} className="img-fluid max-400" alt="" style ={{float: 'right'}}/>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="client-grid-resources-wrapper section-space--pt_60">
      <Container>
        <Row className="align-items-center mb-20">
          <Col lg={6} className='order-last order-lg-first'>
            {/* <Image src="../../assets/images/eln/iso.svg"  className="img-fluid max-400" fluid style={{ float: 'left' }} /> */}
           
            <Image src={iso2} className="img-fluid max-400" alt="" style ={{float: 'left'}}/>
          </Col>
          <Col lg={6} className='order-first order-lg-last'>
            <h2 className="heading mb_20 f_700">ISO 9001:2015 Certified</h2>
            <p className="mb-20 f_size_17 f_400">Agaram Technologies is an ISO 9001:2015 certified organization, ensuring adherence to international quality system standards to meet customer expectations. The certification was awarded by TUV SUD South Asia Private Limited, a leading technical service organization.</p>
            <p className="mb-20 f_size_17 f_400"> Agaram Technologies is registered as a 100% EOU (Export Oriented Unit) with Software Technology Parks of India. Agaram is enabled to import any type of hardware and software with top priority which gives the edge to develop high-quality software products for the clients.</p>
            <div className="hero-button mt_30">
              <Link className='btn ht-btn ht-btn-md' href="/assets/images/iso-pdf.pdf" download="Iso-Certificate">Download ISO Certificate</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="client-grid-resources-wrapper section-space--ptb_60">
      <Container>
        <Row className="align-items-center mb_20">
          <Col lg={6}>
            <h2 className="heading mb_20 f_700">Member of NASSCOM</h2>
            <p className="mb-20 f_size_17 f_400">Established in 1998, Agaram Technologies is a privately owned company headquartered in Chennai, India. A member of NASSCOM (National Association of Software and Services Companies), Agaram Technologies also has a global network of integration & distribution partners.</p>
          </Col>
          <Col lg={6}>
            {/* <Image src="../../assets/images/about/certificate.webp" className='img-fluid max-400' style={{ float: 'right' }} /> */}
            <Image src={certificate} className="img-fluid max-400" alt="" style ={{float: 'right'}}/>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="client-grid-resources-wrapper section-space--ptb_60">
      <Container>
        <Row className="align-items-center mb_20">
        <Col lg={6} className='order-last order-lg-first'>
            {/* <Image src="../../assets/images/about/policy.png" className="img-fluid max-400" style={{ float: 'left' }} /> */}
            <Image src={policy} className="img-fluid max-400" alt="" style ={{float: 'left'}}/>
          </Col>

          <Col lg={6} className='order-first order-lg-last'>
            <h2 className="heading mb_20 f_700">Quality Policy</h2>
            <p className="mb-20 f_size_17 f_400">We, Agaram Technologies, strive to deliver innovative laboratory information software products, solutions and services that meet and exceed customers’ requirements in terms of quality, value and compliance. We are committed to achieving continuous improvement and compliance with quality management system standards and processes by periodic review of its effectiveness as well as by involvement, empowerment and training of Employees</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="cont backgr_col calender_cont">
      <div className="Devepoe_space">
        <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 py-5'>
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
        </div>
      <Moreproduct/>
      <Footer/>
    </div>
  )
}

export default Certifications;