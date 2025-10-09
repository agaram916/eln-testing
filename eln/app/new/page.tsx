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
    const iframe = document.getElementById("JotFormIFrame-241490785757470") as HTMLIFrameElement;

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
    <div className="col-md-12">
    <div className="contact_form_box">  
      <p className="mt_20">Want to know more about Logilab ELN, or are you interested in implementing it in your laboratory?</p>
      <p className="mt_20">Fill out the form below and someone from our team will be in touch soon. Old-fashioned phone calls work too.</p>
      <div>
      <iframe
      id="JotFormIFrame-241490785757470"
      src="https://form.jotform.com/241490785757470"
      title="JotForm Embed"
      style={{
       maxWidth:"100%",
       minWidth:"100%",
        height: "900px",
        border: "none",
      }}
      // className="jotform-iframe"
     // onLoad={() => window.parent.scrollTo(0, 0)} // This scrolls the parent window to the top after iframe loads
      frameBorder="0"
      scrolling="no"
    ></iframe>
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