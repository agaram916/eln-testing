'use client'; 

import Header from "@/components/header";
import Footer from "../footer";
import React, { useState ,useEffect } from "react";
import { SyncLoader } from 'react-spinners';
function Request() {
  const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const iframe = document.getElementById("JotFormIFrame-240250148145447") as HTMLIFrameElement;

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
    <>
      {/* <div className="whitepaper-banner">
        <div className="container text-center">
          <h2>Request A Demo</h2>
          <p className="f_400 w_color l_height28 wow fadeInUp text-center para_respons">
            We are here to provide you with more information, answer any questions or queries you may have, and create an
            <br />
            effective solution for your laboratory needs.
          </p>
        </div>
      </div> */}

      <Header/>
 <div className='about-us'>
 <div className="soltionbg security_banner_content ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-5" data-wow-delay="0.3s">
                    Request A Demo
                    </h1>
                    <p className='f_400 w_color l_height28 wow fadeInUp text-center para_response'>
                      We are here to provide you with more information, answer any questions or queries you may have, and create an
                    <br/>effective solution for your laboratory needs</p>
                              
                  </div>
                </div>
        
              </div>
            </div>
      </div>
 </div>
     

      <div className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="contact_form">
            <div className="row">
              <div className="col-md-8">
                <div className="contact_form_box">
                  <h2 className="f_p f_size_24 t_color3 f_800 l_height28 mt_20 mb_20">Thank you for your interest in Logilab ELN.</h2>
                  <p className="mt_20">Want to know more about Logilab ELN, or are you interested in implementing it in your laboratory?</p>
                  <p className="mt_20">Fill out the form below and someone from our team will be in touch soon. Old-fashioned phone calls work too.</p>
                  {/* <iframe
                    src="https://form.jotform.com/240250148145447"
                    title="JotForm Embed"
                    width="100%"
                    className="jotform-iframe1"
                    frameBorder="0"
                    scrolling="no"
                  ></iframe> */}
      <iframe
      id="JotFormIFrame-240250148145447"
       src="https://form.jotform.com/240250148145447"
      title="JotForm Embed"
      width="100%"
      className="jotform-iframe1"
      frameBorder="0"
      scrolling="no"
    ></iframe>

     {/* <iframe
      id="JotFormIFrame-250682820166457"
       src="https://form.jotform.com/250682820166457"
      title="JotForm Embed"
      width="100%"
      className="jotform-iframe1"
      frameBorder="0"
      scrolling="no"
    ></iframe> */}

                </div>
              </div>

              <div className="col-md-4 px-5">
                <h2 className="f_p f_size_24 t_color3 f_800 l_height28 mt_20 mb_40">Technical Support</h2>
                <div className="contact_info_item">
                  <h6 className="f_p f_size_20 t_color3 f_600 mb_20">Contact Info</h6>
                  <p className="f_400 f_size_15">
                    <span className="f_400">Need help on our products?</span> <br />
                    <a href="mailto:info@agaramtech.com">info@agaramtech.com</a>
                  </p>
                  <p className="f_400 f_size_15">
                    <span className="f_400">Customer Support Portal</span> <br />
                    <a href="https://support.agaramtech.com/" target="_blank" rel="noopener noreferrer">
                      support.agaramtech.com
                    </a>
                  </p>
                </div>
                <div className="contact_info_item">
                  <h6 className="f_p f_size_20 t_color3 f_500 mb_20">Office Address</h6>
                  <p className="f_400 f_size_15">
                    <b>Global HQ </b> <br />
                    306, Raheja Towers, 510 Alpha Wing, <br />
                    Anna Salai, Chennai - 600002, India
                    <br />
                    T: +91 44 4208 2005
                    <br />
                    T: +91 44 4218 9406
                    <br />
                    E: <a href="mailto:info@agaramtech.com">info@agaramtech.com</a>
                  </p>
                  <a href="https://goo.gl/maps/my3amtgSubVdu9ZN6" target="_blank" rel="noopener noreferrer">
                    <u>View Map</u>
                  </a>
                  <br />
                  <br />
                  <p className="f_400 f_size_15">
                    <b>South Korea</b>
                    <br />
                    941 Hogye-Geumjeong SK V1 Center, 42, LS-ro, Dongan-gu, Anyang-si, Gyeonggi-do 14118, South Korea <br />
                    T: +82 31 429 8958
                    <br />
                    E: <a href="mailto:info@agaramtech.com">info@agaramtech.com</a>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Request;
