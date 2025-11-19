"use client";
import React from 'react'
import CountUp from "react-countup";
import  Link  from 'next/link'
import Image from "next/image";
import { Container, Row, Col} from 'react-bootstrap';  
import { BrowserRouter, Route} from "react-router-dom";
import Reactt, { useState, useEffect, useRef } from 'react';
import cta2 from '../../public/assets/images/thank.png' 
import 'animate.css';
import WOW from 'wowjs';
import { BsArrowUpRightCircle} from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import Moreproduct from '@/components/moreproduct';
import CorevalueItem from '@/components/corevalueItem';
import Clientsimage from '@/components/clients-image-section';
import Footer from '@/app/footer';
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
// import Clientsimage from '@/components/clients-image-section';
// import Moreproduct from '@/components/moreproduct';

function AboutUs() { 
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const ref = useRef(null);

  const facts = [
    { title: "Successfully work with", count: 250, text: "Customers across several Industries" },
    { title: "Across the globe", count: 30, text: "Countries" },
    { title: "Team of more than", count: 100, text: "Team Members" },
    { title: "Enterprise class solution stack of", count: 5, text: "Products" },
  ];

  const [animatedFacts, setAnimatedFacts] = useState(
    facts.map((fact) => ({
      ...fact,
      currentCount: 0, // Start count at 0
    }))
  );

  // Preloader logic: Runs for 3 seconds, then disappears
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out animation
      setTimeout(() => setLoading(false), 500); // Remove preloader after fade-out
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer: Detect when section is in viewport (only after preloader)
  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [loading]); // Only run observer after preloader finishes

  // Animate facts when section is visible
  useEffect(() => {
    if (isVisible) {
      const totalDuration = 1000; // 2 seconds animation
      const steps = 25; // Smooth animation in 50 steps
      const interval = totalDuration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setAnimatedFacts((prevFacts) =>
          prevFacts.map((fact) => ({
            ...fact,
            currentCount: Math.min(fact.count, fact.currentCount + fact.count / steps),
          }))
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    }
  }, [isVisible]); // Run only when the section is visible

  // Render preloader first
  if (loading) {
    return (
      <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
        <SyncLoader color="#1163ea" size={20} />
      </div>
    );
  }
  return (
    <div> 
      <Header/>
      <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
                <div className="container">
                    <div className="row text-center "> 
                    <div className='col-lg-12' style={{ background:'#fafafa', padding:'20px 50px 70px 40px', maxWidth:'900px', margin:'auto'}}>
                            <div className="thank-you">
                            <div className="">
                                <div className="">
                                <Image src={cta2} className="img-fluid " alt="" style={{maxWidth:'300px'}}/>     
                                </div>
                                <h4 className="mb-20 dark-heading">
                                Thank you for contacting Agaram Technologies.
                                </h4>
                                <p>
                                Your interest means a lot to us and we are excited to assist you.
                                </p>
                                <p>
                                Our team will review your submission and get back to you shortly with more details.
                                </p>
                                <p>
                                Feel free to reach out if you have any immediate questions.
                                </p>
                                <div >
                                <b>Email:</b>{" "}
                                <a
                                    href="mailto:info@agaramtech.com"
                                    style={{color:'#000', fontWeight:'500'}  
                                   }
                                >
                                    info@agaramtech.com
                                </a>{" "}
                                | <b>Phone:</b>  <span style={{fontWeight:'500'}}> +91 44 4208 2005</span>
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

export default AboutUs;