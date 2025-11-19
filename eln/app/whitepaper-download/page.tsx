"use client"; // Add this directive to mark the component as a client component
import React, { useState ,useEffect } from "react";
import Link from 'next/link';
import Footer from '../footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
function Productdownload() {
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
    <>
    <Header/>
      <div className="soltionbg security_banner_content " style={{display:"flex", alignItems:"center"}}>
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center">
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
              <div className="col-md-5 mt_20">
                <h2 className="f_p f_size_32 t_color3 f_600 l_height45 mt_20 mb_20">
                Download Our Whitepapers
                </h2>
                <p className="mt-4 f_size_17">
                Explore our collection of Whitepapers for insights on key industry topics such as Data Integrity, Regulatory Compliance etc and how Agaram’s solutions are helping regulated organisations across the globe adhere to these requirements.
                </p>
                <p className="mb-4 mt-2 f_size_17">
                To access our Whitepapers, please fill out the form provided. Once you've completed the form, you'll be able to download the Whitepapers instantly.
                </p>
              </div>

              <div className="col-md-6 download-form1 order-1 order-lg-2">
                <p className="f_size_16 f_600 p-3">
                Please submit the form below to immediately access a comprehensive overview of the Product Brochure.
                </p>
                {/* <iframe
        src="https://form.jotform.com/240243268833456"
        frameBorder="0"
        width="100%"
        height='600px'
        scrolling="no"
        className="jotform-whitepaper"

      ></iframe> */}

        <iframe
        src="https://form.jotform.com/233193321268454?isIframeEmbed=1"
        frameBorder="0"
        width="100%"
        height='650px'
        scrolling="no"
        className="jotform-whitepaper"

      ></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>

  <Footer/>

    </>
  );
}

export default Productdownload;
