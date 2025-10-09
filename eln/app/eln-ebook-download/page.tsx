"use client";

import React, { useState, useEffect, useRef } from "react";
import { SyncLoader } from "react-spinners";
import Link from "next/link";
import Footer from "../footer";
import Header from "@/components/header";

const EbookDownload = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const messageListenerRef = useRef<(e: MessageEvent) => void>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return; // Wait until preloader disappears

    const iframe = document.getElementById("JotFormIFrame-240101257158447") as HTMLIFrameElement;

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

    messageListenerRef.current = handleIFrameMessage;
    window.addEventListener("message", handleIFrameMessage);

    const onIframeLoad = () => {
      iframe.contentWindow?.postMessage("heightUpdate", "*");
    };

    if (iframe) {
      iframe.onload = onIframeLoad;
    }

    return () => {
      if (messageListenerRef.current) {
        window.removeEventListener("message", messageListenerRef.current);
      }
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, [loading]); // Run only after loading state is `false`

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
      <div className="soltionbg security_banner_content" style={{ display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="solution_security_banner_content bannerresolution text-center">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">Downloads</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_info_area sec_pad bg_color mb_100">
        <div className="container">
          <div className="contact_form">
            <div className="row">
              <div className="col-md-4 order-2 order-lg-1 mt_20">
                <h2 className="f_p f_size_32 t_color3 f_600 l_height45 mt_20 mb_20">
                  Download Logilab ELN Ebook.
                </h2>
                <p className="mt-4 f_size_17">
                  Want to know more about Logilab ELN, or are you interested in implementing it in your laboratory?
                </p>
                <p className="mb-4 mt-2 f_size_17">
                  To access this informative Ebook, please fill out the form provided. Once you've completed the form, you'll be able to download the brochures instantly and embark on a journey to transform your laboratory operations with advanced software solutions.
                </p>
              </div>

              <div className="col-md-8 download-form1 order-1 order-lg-2 px-5">
                <p className="f_size_16 f_600 p-3">
                  Please submit the form below to immediately access a comprehensive overview of the Product Brochure.
                </p>
                <iframe
                  id="JotFormIFrame-240101257158447"
                  title="ELN Ebook Download form"
                  onLoad={() => window.parent?.scrollTo(0, 0)}
                  allowTransparency
                  allowFullScreen
                  allow="geolocation; microphone; camera"
                  src="https://form.jotform.com/240101257158447?isIframeEmbed=1"
                  frameBorder="0"
                  scrolling="no"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EbookDownload;
