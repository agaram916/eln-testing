"use client";

import React, { useState, useEffect } from "react";
import Footer from "../footer";
import Header from "@/components/header";
import { SyncLoader } from "react-spinners";

function ProductDownload() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [iframeHeight, setIframeHeight] = useState("690px");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return; // Skip execution until loading is complete

    const iframe = document.getElementById("JotFormIFrame-233192618220450") as HTMLIFrameElement;
    if (!iframe) return;

    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string" || !e.origin.includes("jotform")) return; // Ensure message is from JotForm
      const args = e.data.split(":");

      switch (args[0]) {
        case "setHeight":
          setIframeHeight(`${args[1]}px`);
          break;
        case "scrollIntoView":
          iframe.scrollIntoView();
          break;
        case "reloadPage":
          window.location.reload();
          break;
        case "collapseErrorPage":
          if (iframe.clientHeight > window.innerHeight) {
            setIframeHeight(`${window.innerHeight}px`);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("message", handleIFrameMessage, false);

    return () => {
      window.removeEventListener("message", handleIFrameMessage, false);
    };
  }, [loading]);

  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="soltionbg security_banner_content"
        style={{ display: "flex", alignItems: "center" }}
      >
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

      <div className="contact_info_area sec_pad bg_color mb_100">
        <div className="container">
          <div className="contact_form">
            <div className="row">
              <div className="col-md-5 offset-md-1 order-2 order-lg-1 mt_20">
                <h2 className="f_p f_size_32 t_color3 f_600 l_height45 mt_20 mb_20">
                  Download Logilab ELN Product Brochure.
                </h2>
                <p className="mt-4 f_size_17">
                  Want to know more about Logilab ELN, or are you interested in implementing it in your laboratory?
                </p>
                <p className="mb-4 mt-2 f_size_17">
                  To access these informative brochures, please fill out the form provided. Once you've completed the form, you'll be able to download the brochures instantly and embark on a journey to transform your laboratory operations with advanced software solutions.
                </p>
              </div>

              <div className="col-md-6 download-form1 order-1 order-lg-2">
                <p className="f_size_16 f_600 p-3">
                  Please submit the form below to immediately access a comprehensive overview of the Product Brochure.
                </p>
                <iframe
                  id="JotFormIFrame-233192618220450"
                  title="ELN Website ELN Brochure Download form"
                  allowTransparency={true}
                  allowFullScreen={true}
                  allow="geolocation; microphone; camera"
                  src="https://form.jotform.com/233192618220450?isIframeEmbed=1"
                  frameBorder="0"
                  width="100%"
                  height={iframeHeight}
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDownload;
