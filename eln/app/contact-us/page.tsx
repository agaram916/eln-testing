"use client";
import React, { useState ,useEffect } from "react";
import Footer from '../footer';
import Moreproduct from '@/components/moreproduct';
import cta2 from '../../public/assets/images/cta2.svg';
import loginewimage from '../../../public/assets/images/loginewimage.svg'
import LogilabELNwhite from '../../public/assets/images/Logilab-ELN_white.svg'
import home_calender from '../../public/assets/images/home_calender.svg'
import Image from "next/image";
import  Link  from 'next/link'
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
function Contact() {
   const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const iframe = document.getElementById("JotFormIFrame-240092031021435") as HTMLIFrameElement;

    // Function to handle incoming messages from the iframe
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string") return;

      const args = e.data.split(":");

      if (!iframe) return;

      switch (args[0]) {
        case "setHeight":
          iframe.style.height = `${args[1]}px`;
          break;
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            iframe.style.height = `${window.innerHeight}px`;
          }
          break;
        default:
          break;
      }
    };

    // Add event listener for message events
    window.addEventListener("message", handleIFrameMessage);

    // Add event listener to trigger when iframe content is fully loaded
    const onIframeLoad = () => {
      // Optionally trigger height update after iframe is fully loaded
      if (iframe) {
        iframe.contentWindow?.postMessage('heightUpdate', '*'); // Custom event to trigger height adjustment inside iframe
      }
    };

    if (iframe) {
      iframe.onload = onIframeLoad; // Trigger onIframeLoad when iframe is fully loaded
    }

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener("message", handleIFrameMessage);
      if (iframe) {
        iframe.onload = null; // Cleanup the load event handler
      }
    };
  }, []);


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
    <div className='about-us '>
     <div className="soltionbg security_banner_content ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-5" data-wow-delay="0.3s">
                    Thank you for your interest in Logilab ELN
                    </h1>
                    <p className='f_400 w_color l_height28 wow fadeInUp text-center para_response'>Contact us to simplify research, boost collaboration, and ensure data integrity</p>
                              
                  </div>
                </div>
        
              </div>
            </div>
        </div>
    </div>

    <div className='contact_info_area sec_pad bg_color'>
 <div className="container">
    <div className="contact_form">
    <div className="row">
    <div className="col-md-7">
    <div className="contact_form_box">  
      <p className="mt_20">Want to know more about Logilab ELN, or are you interested in implementing it in your laboratory?</p>
      <p className="mt_20">Fill out the form below and someone from our team will be in touch soon. Old-fashioned phone calls work too.</p>
      <div>
      <iframe
      id="JotFormIFrame-240092031021435"
      src="https://form.jotform.com/240092031021435"
      title="JotForm Embed"
      width="100%"
      className="jotform-iframe-contact"
      // className="jotform-iframe"
     // onLoad={() => window.parent.scrollTo(0, 0)} // This scrolls the parent window to the top after iframe loads
      frameBorder="0"
      scrolling="no"
    ></iframe>
    </div>

 </div>
</div>



{/* <div className="col-md-5 px-5"> */}
<div className="col-md-5">
     
  <div className="main-video-box video-popup ">
    <h4 className="Sneakpeak f_size_24"><strong><span style={{color:"#000;"}}>Sneak Peek:</span> </strong> Logilab ELN in Action</h4>
                            <a href="https://www.youtube.com/watch?v=kRnDkU3sZ_M" target="_blank" className="video-link  mt_30 Sneakpeakshadow">                            
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

      <h2 className="f_p f_size_24 t_color3 f_800 l_height28 mt_20 mb_40 mt-4">Technical Support </h2>
      <div className="contact_info_item">
        <h6 className="f_p f_size_20 t_color3 f_600 mb_20">Contact Info</h6>
        <p className="f_400 f_size_15"><span className="f_400">For product enquiries and questions contact :</span> <br />
          <a href="mailto:sales@agaramtech.com" target="_blank">sales@agaramtech.com</a>
        </p>
        <p className="f_400 f_size_15"><span className="f_400">Customer Support Portal</span> <br />
          <a href="https://agaramtech.freshdesk.com/support/login" target="_blank" rel="noopener noreferrer">agaramtech.freshdesk.com</a>
        </p>
      </div>
      <div className="contact_info_item">
        <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
        <p className="f_400 f_size_15">
          <b>Global HQ </b> <br />
          {/* 306, Raheja Towers, 510 Alpha Wing, <br />Anna Salai, Chennai - 600002, India<br />
          T: +91 44 4208 2005<br />
          T: +91 44 4218 9406<br />
          E: info@agaramtech.com */}
          Raheja Towers, 510 Alpha wing, Anna Salai, <br />Chennai - 600 002,
          Tamilnadu, India<br />
          T: +91 44 4208 2005<br />
          T: +91 44 4218 9406<br />
          E: <a href="mailto:info@agaramtech.com" target="_blank">info@agaramtech.com</a><br/>
           <span style={{marginLeft:'19px'}}><a href="mailto:enquiry@agaramtech.com" target="_blank">enquiry@agaramtech.com</a></span>  
        </p>
        <a href="https://maps.app.goo.gl/8Hr3UUGty7FwQ39Z9" target="_blank" rel="noopener noreferrer"><u>View Map</u></a><br />
        <br />
        <p className="f_400 f_size_15 southkoreamail">
          <b>South Korea</b><br />
          941 Hogye-Geumjeong SK V1 Center, 42, LS-ro, Dongan-gu, Anyang-si, Gyeonggi-do 14118, South Korea <br />
          T: +82 31 429 8958<br />
          E: <a href="#" target="_blank">info@agaramtech.com</a><br />
          
        </p>
      </div>
    </div>
</div>
</div>
</div>
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
        <div className="last_imag_backgr pt-5">
                        <div className="container">
                    <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <Image src={home_calender} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center ">                            
                                      <div className="text-center">
                                         <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                         <h3 className="text-white mt-3 f_800 l_height15">Bridge the gap between you and your breakthroughs 
                                         </h3>
                                        <div className="d-flex  justify-content-center align-items-center pb-3 pt-2">
                                          <div className="job-button action_btn text-md cont_compare">
                                            <Link href="/request-a-demo" className="btn btn--blue">Request a Demo</Link>
                                          </div>
                                          <div className="job-button action_btn text-md Registorheader">
                                            <Link href="/product-brochure-download" className="btn btn--blue ms-4">Download Brochure</Link>
                                          </div>
                                        </div>
                                       </div>                                                              
                            </div>
                        </div>                        
                    </div>
                    </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact;