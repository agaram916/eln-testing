"use client"; // Add this directive to mark the component as a client component

import React, { useState ,useEffect } from "react";
import { SyncLoader } from 'react-spinners';
import Footer from "../footer";
import Header from "@/components/header";
function Productdownload() {
    const [loading, setLoading] = useState(true);
      const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const iframe = document.getElementById("JotFormIFrame-233211048510441") as HTMLIFrameElement;

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
    <Header/>
      {/* Banner Section */}
      <div className="soltionbg security_banner_content" style={{ display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="solution_security_banner_content bannerresolution text-center">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Downloads
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact_info_area sec_pad bg_color mb_100">
        <div className="container">
          <div className="contact_form">
            <div className="row">
              {/* Description Section */}
              <div className="col-md-5 mt_20">
                <h2 className="f_p f_size_32 t_color3 f_600 l_height45 mt_20 mb_20">
                  Download Our Case Studies
                </h2>
                <p className="mt-4 f_size_17">
                  Explore our collection of Case Studies for insights on how
                  Agaram’s solutions are addressing the challenges faced by
                  laboratories across different industry verticals.
                </p>
                <p className="mb-4 mt-2 f_size_17">
                  To access our Case Studies, please fill out the form provided.
                  Once you've completed the form, you'll be able to download the
                  Case Studies instantly.
                </p>
              </div>

              {/* JotForm Embed Section */}
              <div className="col-md-7 download-form1 order-1 order-lg-2">
                <p className="f_size_16 f_600 p-3">
                  Please submit the form below to immediately access a
                  comprehensive overview of the Product Brochure.
                </p>
                <iframe
                  id="JotFormIFrame-233211048510441"
                  src="https://form.jotform.com/233211048510441"
                  frameBorder="0"
                  style={{
                    width: "100%",
                    height: "600px",
                    border: "none",
                  }}
                  scrolling="no"
                  title="Download Form"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Productdownload;
