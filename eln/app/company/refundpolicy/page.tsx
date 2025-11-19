"use client";
import React, { useState ,useEffect } from "react";
import Footer from "../../footer";
import Link from "next/link"; 
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
function RefundPolicy() { 
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
      <div className="preloader-activate preloader-active open_tm_preloader">
      <div className="preloader-area-wrap">
        <div className="spinner d-flex justify-content-center align-items-center h-100">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
      
        <div id="main-wrapper">
        <div className="site-wrapper-reveal">
          <div className="soltionbg breadcrumb-area" style={{display:"flex", alignItems:"center"}}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb_box text-center">
                    <h1 className="breadcrumb-title" style={{color:"#fff",fontWeight:"900"}}>Refund Policy</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="bg-white">
            <div className="client-grid-resources-wrapper">
            <h3 className="mt-5 my-5">Refund Policy</h3>
              <div className="full-container">
                <b>Agaram Technologies’ Quality Policy referring to Customer Satisfaction</b>
                <p>
                  According the Quality Policy of Agaram Technologies, we strive to provide the
                  industry best quality software that you can use for your business or professional
                  needs. We have created this policy that details what we will do in case we are
                  unable to meet your expectations.
                </p>

                <b>Monthly Subscriptions</b>
                <p>
                  If at any time, during your first month using our service you are dissatisfied,
                  please contact us before the next due date of payment. We will do our best to
                  address your issue, provide a work around or give a timeline for a solution that
                  will meet your needs. If you are not satisfied, we will gladly offer you a FULL
                  REFUND for your purchase and downgrade your account to a free plan for that
                  service.
                </p>

                <b>Annual Subscriptions</b>
                <p>
                  Agaram Technologies does not force you into an annual subscription as a condition
                  to use our services. We prefer to give you the flexibility to choose. If at any
                  time during your first 45 days using our service you are dissatisfied, please
                  contact us by email subscriptions@agaramtech.com. We will do our best to address
                  your issue, provide a work-around or give a timeline for a solution that will meet
                  your needs. If you are not satisfied, we will gladly offer you a FULL REFUND for
                  your purchase and downgrade your account to the free plan.
                </p>

                <p>
                  We are committed to delivering our products and services throughout your entire
                  subscription period, not only the first 30 days (in case of monthly subscription)
                  and the first 45 days (in case of annual subscription). If at any time during your
                  contract we remove, break or discontinue functionality that was available at the
                  time you signed up for your contract, we ask you to notify us immediately. If we
                  fail to address it on a timely manner to your entire satisfaction, we will offer
                  you a PRO-RATED REFUND for the reminder of your contract.
                </p>

                <b>Auto-Renewal</b>
                <p>
                  For your convenience, your monthly and yearly subscriptions can be opted for
                  auto-renewal until you cancel the service. Every time before your subscription
                  auto-renews, we will send a mail specifying the amount that will be charged to
                  your credit card. Similarly, after each renewal we will send you a payment receipt
                  via e-mail specifying the amount that has been deducted together with the next
                  renewal date and the next renewal amount.
                </p>

                <p>
                  We know that sometimes customers forget to cancel an account they no longer want
                  until it has already been charged. That is the reason why you can cancel your
                  monthly/annual subscription even five business days after your renewal date, and
                  we will still process your cancellation and give you a FULL REFUND.
                </p>

                <b>For questions, please e-mail payments@agaramtech.com</b><br />
                <br />

                <b>Exception to our Refund Policy</b>
                <p>
                  Please note that we will not fulfill your request for refund (FULL or PRO-RATED)
                  when we have suspended or terminated your access to the Product and Services due
                  to a violation of our General Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
    </>
  
  )
}

export default RefundPolicy;