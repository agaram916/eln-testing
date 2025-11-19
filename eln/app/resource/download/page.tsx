'use client';
import Link from 'next/link';
import React, { useState, useEffect,} from "react";
import cta2 from '../../../public/assets/images/cta2.svg'
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route } from "react-router-dom";
import Image from 'next/image';
import loginewimage from '../../../public/assets/images/loginewimage.svg'
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import home_calender from '../../../public/assets/images/home_calender.svg'
import whitepaper from '../../../public/assets/images/eln/dw1.png';
import Rectangle from '../../../public/assets/images/eln/dw2.png';
import customer20 from '../../../public/assets/images/eln/downloadsimage.png';
import customer21 from '../../../public/assets/images/eln/Frame 86.png';
import Downloadicon from '../../../public/assets/images/download.png';
import Summary from '@/components/summary';
import Moreproduct from '@/components/moreproduct';
import Footer from '../../footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';

const Download = () => {

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
           {/* <div className='whitepaper-banner'>
              <div className='container text-center'>
                <h1>Downloads</h1>
              </div>
              <div className="d-flex justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
                  <Link href="/solution" className="btn btn--white mx-4 text-center">
                  Explore Solution
                  </Link>
              </div>
            </div> */}
        <Header/>
      <div className="soltionbg security_banner_content download">
            <div className="container">
                <div className="row">
                  <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                    <div className="solution_security_banner_content bannerresolution text-center">
                      <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                      Downloads
                      </h1>
                      <p className="f_400 w_color l_height28 wow fadeInUp text-center para_response" data-wow-delay="0.4s">
                      Get access to product features, functionalities and downloadables			
                      </p>
                      <div className="d-flex action_btn justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
                        {/* <Link href="/contact-us" className="btn btn--white text-center">
                        Contact Us
                        </Link> */}
                      <Link href="/solution" className="btn btn--white mx-4 text-center">
                        Explore Solutions
                      </Link>
                  </div>
                    </div>
                  </div>
          
                </div>
              </div>
      </div>

            <div className="app_service_area pt-5" >
        <Container>
            <Row className="app_service_info">
                <Col lg={3}>
                    <div className="download-sec wow fadeInUp" data-wow-delay="0.2s">
                        <Image alt='' src={whitepaper} className="img-fluid"  />
                        {/* <img className="img-fluid" style={{ width: '100%' }} src="assets/images/eln/dw1.png" alt="" /> */}
                        <h5 className="f_p h_head f_600 t_color3 mt_40 mb-40">Logilab ELN Product Brochure</h5>
                        <Link href="/product-brochure-download" target="_blank" className="learn_btn_two">
                            <Image alt='' src={Downloadicon} className="img-fluid"  />
                            {/* <img src="assets/images/download.png" alt="" /> */}
                        </Link>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="download-sec wow fadeInUp" data-wow-delay="0.2s">
                        <Image alt='' src={Rectangle} className="img-fluid"  />
                        {/* <img className="img-fluid" style={{ width: '100%' }} src="assets/images/eln/dw2.png" alt="" /> */}
                        <h5 className="f_p h_head f_600 t_color3 mt_40 mb-40">Logilab ELN Features Brochure</h5>
                        <Link href="/features-brochure-download" target="_blank" className="learn_btn_two">
                            <Image alt='' src={Downloadicon} className="img-fluid"  />
                        </Link>
                    </div>
                </Col>
                <Col lg={3}>
                  <div className="download-sec wow fadeInUp" data-wow-delay="0.2s">
                    <Image alt='' src={customer20} className="img-fluid"  />
                     {/* <img className="img-fluid" style={{ width: '100%' }} src="assets/images/eln/dw4.png" alt="" /> */}
                     <h5 className="f_p h_head f_600 t_color3 mt-4 mb-4">Logilab ELN <br />Ebook</h5>
                     <Link href="/eln-ebook-download" target="_blank" rel="noopener noreferrer" className="learn_btn_two">
                        <Image alt='' src={Downloadicon} className="img-fluid"  />
                    </Link>
                 </div>
              </Col>
                
              <Col lg={3}>
                  <div className="download-sec wow fadeInUp" data-wow-delay="0.2s">
                    <Image alt='' src={customer21} className="img-fluid"  />
                     {/* <img className="img-fluid" style={{ width: '80px' }} src="assets/images/eln/down-arrow.png" alt="" /> */}
                     <h5 className="f_p h_head f_600 t_color3 mt-4 mb-4">Logilab ELN Product Guide</h5>
                     <Link href="/BrochureDownload" target="_blank" rel="noopener noreferrer" className="learn_btn_two">
                        {/* <Image alt='' src={Downloadicon} className="img-fluid"  /> */}
                        <Link href='https://helpcenter.agaramtech.com/elnartical/elntroublearticle/'><span>view more</span></Link>
                    </Link>
               </div>
            </Col>
            </Row>
        </Container>
       </div>  
       {/* <Summary/> */}
       <div className="cont backgr_col calender_cont">
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
        <div className=" last_imag_backgr pt-5">
                        <div className="container">
                    <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <Image src={home_calender} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center ">                            
                                      <div className="text-center">
                                         <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                         <h3 className="text-white mt-3 f_800 l_height15 ensure-footer">Deliver accurate results with Logilab ELN
                                         </h3>
                                        <div className="d-flex  pb-3" style={{justifyContent:"center"}}>
                                          <div className="action_btn job-button text-md cont_compare ">
                                             <Link href="/request-a-demo" className="btn btn--blue">Request a Demo</Link>
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
       
        < Footer/>
    </div>
  );
};

export default Download;
