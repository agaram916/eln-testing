'use client';
import Link from 'next/link';

import { BrowserRouter, Route } from "react-router-dom";
import Image from 'next/image';
import whitepaper from '../../public/assets/images/publication/whitepaper.svg';
import Rectangle from '../../public/assets/images/publication/Rectangle.svg';
import customer20 from '../../public/assets/images/customers/20.webp';
import customer21 from '../../public/assets/images/customers/21.webp';
import customer9 from '../../public/assets/images/customers/9.webp';
import customer25 from '../../public/assets/images/customers/25.webp';
import customer11 from '../../public/assets/images/customers/11.webp';
import customer22 from '../../public/assets/images/customers/22.webp';
import Footer from '../footer';
import Header from '@/components/header';
import React, { useState ,useEffect } from "react";
import { SyncLoader } from 'react-spinners';
const Whitepaper = () => {
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
            <div className='whitepaper-banner'>
              <div className='container text-center'>
                <h2>CHISEL PAYS FOR ITSELF WITHIN 1-2 MONTHS :</h2>
                <h2>ROI OF 9X-12X</h2>
              </div>
            </div>
            <div className='whitepaper-home'>
              <div className=' py-4 px-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div>
                        <div className='mt-2'>
                          <a className="er_btn er_btn_two ">Whitepaper</a>
                        </div>
                        <div> 
                           <h2 className="elementor-heading-title elementor-size-default py-4">How Logilab ELN helps organizations <br/>to follow GxP Regulations</h2> 
                           <p className='m-0'>GxP is a set of regulations and quality guidelines formulated to ensure the safety of life sciences products while maintaining the quality of processes throughout every stage of manufacturing, control, storage, and distribution. Good Manufacturing Practices (GMP) – GMP are the guidelines recommended by agencies for the authorization and control of manufacturing of products such as drugs, medical devices, active pharmaceutical ingredients (APIs) etc. Adhering to these guidelines assure the agencies about the quality of the products and that the manufacturers have taken every possible measure to ensure the safety of the product.
                           </p>
                          <div className='pb-3 mt-4'>
                            <h3 className='mt-3'>Additional <span className='gradient-text'>Key Findings:</span></h3>
                              <ul className='whitepaper-square ps-0 mt-3'>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                              </ul>
                          </div>                                                                   
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='whitepaper-padding'>
                      <Image alt='' src={whitepaper} className="w-100"  />
                        {/* <img  src="../assets/images/publication/whitepaper.svg" alt=""  className='w-100'/> */}
                        <div className='d-flex justify-content-center mt-2'>
                          <a className="er_btn er_btn_border"> Get Your Copy Now </a>
                          <a className="er_btn er_btn_two mx-2"> Book A Demo </a>
                        </div>                                                           
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
            </div> 
            <div className='whitepaper-content'>
              <div className='container'>
                <h2 className=" center-heading mb-30 py-4">Importance of <span className='span-blue'>GxP Regulations</span></h2> 
                <div className='row'>
                  <div className='col-lg-5'>
                    <Image  alt='' src={Rectangle} className="w-100 img-fluid"  />
                    {/* <img src="./assets/images/publication/Rectangle.svg" alt="" className='w-100'/>      */}
                  </div>
                  <div className='col-lg-7'>
                    <p>Since the regulations of GxP are global, every company manufacturing life sciences product is affected by it. Therefore, meeting the GxP requirements is highly important. Though there are several GxPs, few of them are highly important for the life cycle of any product. Good Manufacturing Practices (GMP) – GMP are the guidelines recommended by agencies for the authorization and control of manufacturing of products such as drugs, medical devices, active pharmaceutical ingredients (APIs) etc. Adhering to these guidelines assure the agencies about the quality of the products and that the manufacturers have taken every possible measure to ensure the safety of the product. Good Laboratory Practices (GLP). 
                    </p>  
                  </div>
                </div>
                <h2 className="center-heading mb-30 py-4 mt-5"><span className='span-blue'>Logilab ELN’s Role</span> in GxP Regulations</h2> 
                <div className='row'>
                  <div className='col-lg-7'>
                    <p>The following features built into Logilab ELN will help laboratories and organizations to comply with GxP Regulations:</p>
                      <div className='pb-3 mt-4'>
                        <ul className='whitepaper-right ps-0 mt-3'>
                          <li> User access control (with a unique username and password combination) i.e. 
                                Logilab ELN provides a closed system with restricted access. This is assured by secured system-login, which is unique for each individual Logilab ELN user.</li>
                          <li>Role-based user access - User groups and project management </li>
                          <li>Robust encryption standards </li>
                          <li>Review and approval of data by assigned reviewers or approversds </li>
                        </ul>
                      </div>  
                  </div>
                  <div className='col-lg-5'>
                    <Image  alt='' src={Rectangle} className="w-100 img-fluid"  />
                    {/* <img src="./assets/images/publication/Rectangle.svg" alt="" className='w-100'/>      */}
                  </div>
                </div>
              </div>                   
            </div> 
            <div className='customer-section py-5'>
              <div className='container'>
                <div className="section-title-wrap text-center section-space--mb_10">
                  <h3 className="center-heading mb-30 py-4 mt-4" style={{color:'#1C53A1'}}>Trusted by Industry leaders Loreum inpsum</h3>
                </div>
                <div className="cust-logo pb-4">
                  <div className='row'>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer20} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/20.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer21} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/21.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer9} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/9.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer25} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/25.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer11} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/11.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                      <div className='col-lg-2'>
                        <Image  alt='' src={customer22} className="w-100 img-fluid"  />
                        {/* <img src="assets/images/customers/22.webp" className="img-fluid" alt="Customer Logo" /> */}
                      </div>
                  </div>                             
                </div>
              </div>         
            </div>
                <div className='pt-5'>                   
                    {/* <RelatedArticle title="Most Recent Resources" className="heading"/> */}
                </div>
                <Footer />
        </div>
  );
};

export default Whitepaper;
