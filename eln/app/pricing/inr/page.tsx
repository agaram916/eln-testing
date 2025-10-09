"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Accordion, Card, Button } from 'react-bootstrap';
import { TfiPlus,TfiMinus } from "react-icons/tfi"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../footer';
import Moreproduct from '@/components/moreproduct';
import Image from "next/image";
import sec1 from '../../../public/assets/images/eln/sec1.svg'; 
import elnvertical from '../../../public/assets/images/eln/eln-vertical.svg'; 
import hosting from '../../../public/assets/images/eln/hosting.svg';
import Cloudsaas from '../../../public/assets/images/eln/cloud-saas.svg';
import box1 from '../../../public/assets/images/eln/box-1.png'; 
import box2 from '../../../public/assets/images/eln/box-2.svg';        
import box3 from '../../../public/assets/images/eln/box-3.svg'; 
import client2 from '../../../public/assets/images/eln/client/2.png';
import client3 from '../../../public/assets/images/eln/client/11.png';
import client4 from '../../../public/assets/images/eln/client/a3.jpg';
// import client5 from '../../../public/assets/images/eln/client/a1.jpg';
import client5 from '../../../public/assets/images/customers/cpi.svg';
import client6 from '../../../public/assets/images/eln/client/a2.jpg';
import award from '../../../public/assets/images/eln/award.webp';
import PriceCalculator from "@/components/inrprice";
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
const USD_TO_INR = 83;
function Plan () {
    const [activePlan, setActivePlan] = useState("monthly");
    const [isMonthly, setIsMonthly] = useState(true);
    const [activeTab, setActiveTab] = useState('saas');
    const [isOpen, setIsOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpandedlist, setIsExpandedlist] = useState(false);
    const [isExpandedvist, setIsExpandedvist] = useState(false);
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const [qty, setQty] = useState(1);
    const [prices, setPrices] = useState({
      lite: 9.99,
      standard: 19.99,
      premium: 29.99,
      loss: 251.99
    });
  
    const [calculatedPrices, setCalculatedPrices] = useState({
      loss: 0,
      lite: 0,
      standard: 0,
      premium: 0,
      liteMonthly: 0,
      standardMonthly: 0,
      premiumMonthly: 0,
      liteAnnual: 0,
      standardAnnual: 0,
      premiumAnnual: 0,
      roundliteAnnual: 0,
      roundstandardAnnual: 0,
      roundpremiumAnnual: 0,
      academiclite: 0,
      academicstandard: 0,
      academicpremium: 0,
      yearlyLite: 0,
      yearlyStandard: 0,
      yearlyPremium: 0,
      roundyearlyLite: 0,
      roundyearlyStandard: 0,
      roundyearlyPremium: 0,
    });
  
  
    const [singleUnitPrices, setSingleUnitPrices] = useState({
      lite: 0,
      standard: 0,
      premium: 0,
    });
    const [country, setCountry] = useState<string | null>(null);
    const [timeZone, setTimeZone] = useState('');
  
    const calculateTotal = () => {
      const { lite, standard, premium, loss } = prices;
  
      let unit_price = { lite, standard, premium, loss };
      const discount = 0.70; // 30% discount for academic users
      const additionalDiscount = 0.90;
      const yearlyMultiplier = 12;
  
      const rounded = (value: number) => Math.round(value);
  
      // Apply discounts based on quantity
      if (qty >= 11 && qty <= 25) {
        unit_price.lite *= 0.95;
        unit_price.standard *= 0.95;
        unit_price.premium *= 0.95;
      } else if (qty >= 26 && qty <= 50) {
        unit_price.lite *= 0.9;
        unit_price.standard *= 0.9;
        unit_price.premium *= 0.9;
      }  else if (qty >= 51 && qty <= 100) {
        unit_price.lite *= 0.85;
        unit_price.standard *= 0.85;
        unit_price.premium *= 0.85;
      } else if (qty >= 101 && qty <= 200) {
        unit_price.lite *= 0.8;
        unit_price.standard *= 0.8;
        unit_price.premium *= 0.8;
      } else if (qty >= 201 && qty <= 300) {
        unit_price.lite *= 0.75;
        unit_price.standard *= 0.75;
        unit_price.premium *= 0.75;
      } else if (qty >= 301 && qty <= 500) {
        unit_price.lite *= 0.7;
        unit_price.standard *= 0.7;
        unit_price.premium *= 0.7;
      }
  
  
      // Calculate total prices
      setCalculatedPrices({
        lite: Math.round(qty * unit_price.lite),
        standard: Math.round(qty * unit_price.standard),
        premium: Math.round(qty * unit_price.premium),
        loss: Math.round(qty * unit_price.loss),
        liteMonthly: Math.round((unit_price.lite * 12) * 0.9000 * 100) / 100,
        standardMonthly: Math.round((unit_price.standard * 12) * 0.9000 * 100) / 100,
        premiumMonthly: Math.round((unit_price.premium * 12) * 0.9000 * 100) / 100,
        liteAnnual:  Math.round(qty * unit_price.lite * 12 * 0.70 * 0.9000),
        standardAnnual:  Math.round(qty * unit_price.standard * 12 * 0.70 * 0.9000),
        premiumAnnual:  Math.round(qty * unit_price.premium * 12 * 0.70 * 0.9000),
        roundliteAnnual: Math.round(qty * unit_price.lite * 12 * 0.9000),
        roundstandardAnnual: Math.round(qty * unit_price.standard * 12 * 0.9000),
        roundpremiumAnnual: Math.round(qty * unit_price.premium * 12 * 0.9000),
        academiclite: parseFloat((unit_price.lite * 0.70).toFixed(2)),    // Ensuring the value is a number
        academicstandard: parseFloat((unit_price.standard * 0.70).toFixed(2)), // Ensuring the value is a number
        academicpremium: parseFloat((unit_price.premium * 0.70).toFixed(2)),
        yearlyLite: parseFloat((unit_price.lite * yearlyMultiplier * discount * 0.9).toFixed(2)), // Discount + additional discount
        yearlyStandard: parseFloat((unit_price.standard * yearlyMultiplier * discount * 0.9).toFixed(2)),
        yearlyPremium: parseFloat((unit_price.premium * yearlyMultiplier * discount * 0.9).toFixed(2)),
        roundyearlyLite: rounded(qty * unit_price.lite * yearlyMultiplier * discount * additionalDiscount),
        roundyearlyStandard: rounded(qty * unit_price.standard * yearlyMultiplier * discount * additionalDiscount),
        roundyearlyPremium: rounded(qty * unit_price.premium * yearlyMultiplier * discount * additionalDiscount),

        // Indian rupees
        
      });
  
      // Calculate single unit prices (keep them as numbers)
      setSingleUnitPrices({
        lite: Math.round(unit_price.lite * 100) / 100,
        standard: Math.round(unit_price.standard * 100) / 100,
        premium: Math.round(unit_price.premium * 100) / 100,
      });
    };
    useEffect(() => {
      const currentTimeZone = (new Date()).toString().split('(')[1].split(' ')[0];
      setTimeZone(currentTimeZone);
      calculateTotal();
    }, [qty]);
  
    // if (country === null) {
    //   return <div>Loading...</div>; // Show while fetching country
    // }

    const toggleRows = () => {
      setIsExpanded(!isExpanded);
    };
    const onClickDown = () => {
      setIsExpandedlist(!isExpandedlist);
    };
    const onClickUp = () => {
      setIsExpandedvist(!isExpandedvist);
    };

     // Initial quantity state

     const handleQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10); // Parse the input value to a number
      if (value > 200) {
        setQty(200);
        setErrorMsg(true);
      } else if (value < 1) {
        setQty(1);
        setErrorMsg(false);
      } else {
        setQty(value);
        setErrorMsg(false);
      }
    };
    const features = [
        ["Site Limit", "Single", "Single", "Multi-Site", "Multi-Site"],
        ["Spreadsheet Templates", "✓", "✓", "✓", "✓"],
        ["Protocol Templates", "✓", "✓", "✓", "✓"],
        ["Project Management", "✓", "✓", "✓", "✓"],
        ["Folder/File Management", "✓", "✓", "✓", "✓"],
        ["Dynamic Inventory", "Basic", "Advanced", "Advanced", "Advanced"],
        ["Configurable workflows", "Fixed | Upto 3 levels only", "✓", "✓", "✓"],
        ["Log Books", "—", "—", "✓", "✓"],
        ["Multiple Environment (Test, Val, Prod)", "Production", "Production", "Validation + Production", "Test + Validation + Production"],
       ["Security & Compliance", "", "", "", ""],
        ["Azure AD SSO", "✓", "✓", "✓", "✓"],
        ["21 CFR Part 11 Compliance", "✓", "✓", "✓", "✓"],
        ["User Roles & Rights", "—", "✓", "✓", "✓"],
        ["Data Encryption", "✓", "✓", "✓", "✓"],
        ["Data Export", "✓", "✓", "✓", "✓"],
        ["Automatic Backups", "—", "—", "✓", "✓"],
        ["Business continuity & disaster recovery", "—", "✓", "✓", "✓"],
        ["Audit Trail", "—", "✓", "✓", "✓"],
        ["Data residency", "USA", "USA", "USA", "Customer chosen"],
        ["Storage & Support", "", "", "", ""],
        ["Storage", "2GB/user", "250 GB File Storage", "1TB storage", "On Request"],
        ["Support", "Help center support", "9/5 Regional Support", "LI: 24/5 (Mon - Fri)<br> L2, L3: 9 hrs (Mon - Fri)", "24/7 Enterprise <br>Support Phone support"],
        ["Optional Add ons", "", "", "", ""],
        ["Chemical Drawings", "N/A", "Kekule.js", "Marvin.js with Chem Draw Support", "Marvin.js with Chem Draw Support"],
        ["Validation", "N/A", "Installation and operational qualification", "Installation, operational and performance qualification", "Installation, operational and performance qualification"]
      ];

    const togglePricing = () => {
        setIsMonthly(!isMonthly);
    };
    const handleToggle = () => {
      setActivePlan(activePlan === "monthly" ? "yearly" : "monthly");
    };
    const handleTabClick = () => {
      setIsOpen(!isOpen);
      };
    
      const handleLinkClick = () => {
      setIsOpen(false);
      }


       
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
           <div className='plan-page'>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb_box bannerresolution text-center">
                                <h2 className="breadcrumb-title">Run Experiments, Not Expenses: Save up to 30x</h2>
                                <p style={{fontSize:"38px"}}  className="white-font mt-10">ROI OF 9X-12X</p> 
                                <div className="hero-button action_btn mt-30">
                                    <Link href="/contact-us" className="mobile-hide btn btn--secondary">Get A Quote</Link>
                                    <Link href="/request-a-demo" className="btn btn--white">Request A Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {timeZone === 'India' ? (
    
    <div>
      <PriceCalculator/>
    </div>

          ) : (<div className="pricing-table-area section-space--ptb_100 bg-gray1 pb-0">
                <div className="container">
                    <div className="row section-space--mb_40">
                        <div className="col-lg-12 ht-tab-wrap">
                            <div className="pricing-table-title-area position-relative">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="section-title-wrapper text-center mb-20 wow move-up animated" >
                                                {/* <h3 className="center-heading mb-20">How Big is your Lab?</h3> */}
                                                <h3 className="center-heading mb-20">Just the right plans for labs of all sizes</h3>
                                                {/* <input type="number"  min="1" max="200" value={qty} className="qty" id="qty" onChange={handleQtyChange} style={{marginBottom:"20px"}}/>
                                                {errorMsg && (<span id="errorMsg" style={{color:"red",display:"block"}}>*For teams larger than 200, check out our Enterprise  plan</span>)}<br/>
                                                <span className="input-title">  Every <span id="output">{qty || 1}</span> user </span> */}
                                                
                                                <span className="inline input-title"> loses $<span id="price_loss">{isNaN(calculatedPrices.loss) ? 252 : calculatedPrices.loss}</span> on paper-based experiments every month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center wow move-up ">
                        <div className={`responsive-tabs ${isOpen ? 'open' : ''}`} onClick={handleTabClick}>
                          <span className="dropdown-arrow" onClick={handleTabClick}></span>
                            <ul className="nav nav-tabs justify-content-center ht-tab-menu" role="tablist" style={{borderBottom:"0"}}>
                                <li className="tab__item nav-item active">
                                    <Link className="nav-link active" id="nav-tab1" data-bs-toggle="tab" href="#standard-tab" role="tab" aria-selected="true">Standard</Link>
                                </li>
                                <li className="tab__item nav-item">
                                    <Link className="nav-link" id="nav-tab2" data-bs-toggle="tab" href="#academic-tab" role="tab" aria-selected="false">Academic</Link>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="tab-content ht-tab__content wow move-up ">
                        <div className="tab-pane fade show active" id="standard-tab" role="tabpanel">
                            {/* <div className="toggle-container">
                                <div className="pricing-options">
                                    <span id="monthly" className={activePlan === "monthly" ? "active" : ""}>Monthly</span>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" id="toggleSwitch" onChange={handleToggle}/>
                                    <span className="slider round"></span>
                                </label>
                                <div className="pricing-options">
                                    <span id="yearly" className={activePlan === "yearly" ? "active" : ""}>Yearly</span>
                                </div>
                            </div> */}
                            <div className="pricing-details">
                              <div id="monthlyPricing" className={`pricing-plan ${activePlan === "monthly" ? "active" : ""}`}>
                                <div className="pricing-table-content-area">
                                  <div className="container">
                                    <div className="row pricing-table-one">
                                      {/* Monthly Pricing Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner free-bg" style={{ background: "#FFE7DB" }}>
                                          <div className="pricing-table__header" style={{marginTop:"40px"}}>
                                            <h6 className="sub-title" style={{marginBottom:"0 !important"}}>ELN Lite</h6><br/>
                                            <b className="sub-para">For getting familiar with ELN</b><br />
                                            <span className="price">$<span id="singleuser_lite">{singleUnitPrices.lite}</span></span><br />
                                            <span>per user / month</span><br />
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Free for 30 days:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Beginner-friendly User Interface</li>
                                                <li className="list-item">Invite up to 10 Users</li>
                                                <li className="list-item">SSO (Google and Microsoft)</li>
                                                <li className="list-item">Experiment Templates</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Repeat the same structure for other pricing plans with appropriate modifications */}
                                      {/* Standard Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner perpul-bg" style={{ background: "#D9DAFB" }}>
                                          <div className="badge badge-standard">Recommended</div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Standard</h6>
                                            <b className="sub-para">Everything in Lite Plan and plus:</b><br />
                                            {/* <span className="price">$<span id="singleuser_standard">{singleUnitPrices.standard}</span></span><br />
                                            <span>per user / month</span><br /> */}
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Lite, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Single Site</li>
                                                <li className="list-item">Basic Inventory</li>
                                                <li className="list-item">Configurable Workflows</li>
                                                <li className="list-item">250 GB File Storage</li>
                                                <li className="list-item">Audit Trails</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Add Premium Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner green-bg" style={{ background: "#E5F4F2" }}>
                                          <div className="pricing-table__feature-mark">
                                            <span>Popular</span>
                                          </div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Premium</h6>
                                            <b className="sub-para">For mid-sized and large teams</b><br />
                                            {/* <span className="price">$<span id="singleuser_premium">{singleUnitPrices.premium}</span></span><br />
                                            <span>per user / month</span><br /> */}
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="https://logilabelnlite.azurewebsites.net/register"  target="_blank" className="ht-btn ht-btn-md">Get started
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Standard, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Multi-Site</li>
                                                <li className="list-item">Advanced Inventory</li>
                                                <li className="list-item">Instrument Integration</li>
                                                <li className="list-item">1 TB Storage</li>
                                                <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Enterprise Plan */}
                                      <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: "visible" }}>
                                        <div className="pricing-table__inner blue-bg" style={{ background: "#E5F3FF" }}>
                                          <div style={{ marginBottom: "40px" }}></div>
                                          <div className="pricing-table__header">
                                            <h6 className="sub-title">Enterprise</h6>
                                            <b className="sub-para enterprise_p_tag">For large teams with {'>'} 200 users</b>
                                          </div>
                                          <div className="pricing-table__body">
                                            <div className="pricing-table__footer">
                                              <Link href="/contact-us"
                                              className="ht-btn ht-btn-md">Contact Us
                                              </Link>
                                            </div>
                                            <div className="align-left mt-30">
                                              <b>Everything in Premium, plus:</b>
                                              <ul className="dark-check-list">
                                                <li className="list-item">Multi-Site</li>
                                                <li className="list-item">Multiple Environments/ Domains</li>
                                                <li className="list-item">Your Choice of Data Residency</li>
                                                <li className="list-item">Storage On Request</li>
                                                <li className="list-item">24/7 Enterprise Support</li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="yearlyPricing" className={`pricing-plan ${activePlan === "yearly" ? "active" : ""}`}>
                              <div className="pricing-table-content-area">
                              <div className="container">
                                <div className="row pricing-table-one">
                                  {/* ELN Lite Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner free-bg" style={{ background: '#FFE7DB' }}>
                                      <div style={{ marginBottom: '40px' }}></div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">ELN Lite</h6>
                                        <b className="sub-para">For getting familiar with ELN</b><br></br>
                                        {/* <span className="price">
                                          $<span id="singleuser_lite2">{calculatedPrices.liteMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          $<span id="price_lite2">{calculatedPrices.roundliteAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output1">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">
                                            Try for free
                                          </Link>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Free for 30 days:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Beginner-friendly User Interface</li>
                                            <li className="list-item">Invite up to 10 Users</li>
                                            <li className="list-item">SSO (Google and Microsoft)</li>
                                            <li className="list-item">Experiment Templates</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Standard Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                                      <div className="badge badge-standard">Recommended</div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Standard</h6>
                                        <b className="sub-para">Everything in Lite Plan and plus:</b>
                                        <br />
                                        {/* <span className="price">
                                          $<span id="singleuser_standard2">{calculatedPrices.standardMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          $<span id="price_standard2">{calculatedPrices.roundstandardAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output2">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">
                                            Get started
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Lite, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Single Site</li>
                                            <li className="list-item">Basic Inventory</li>
                                            <li className="list-item">Configurable Workflows</li>
                                            <li className="list-item">250 GB File Storage</li>
                                            <li className="list-item">Audit Trails</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Premium Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table pricing-table--popular" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                                      <div className="pricing-table__feature-mark">
                                        <span>Popular</span>
                                      </div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Premium</h6>
                                        <b className="sub-para">For mid-sized and large teams</b>
                                        <br />
                                        {/* <span className="price">
                                          $<span id="singleuser_premium2">{calculatedPrices.premiumMonthly.toFixed(2)}</span>
                                        </span>
                                        <br />
                                        <span>per user / month</span>
                                        <br />
                                        <span className="total-price">
                                          $<span id="price_premium2">{calculatedPrices.roundpremiumAnnual.toFixed(2)}</span>
                                        </span>{' '}
                                        <span>for <span id="output3">{qty}</span> users</span> */}
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">
                                            Get started
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Standard, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Multi-Site</li>
                                            <li className="list-item">Advanced Inventory</li>
                                            <li className="list-item">Instrument Integration</li>
                                            <li className="list-item">1 TB Storage</li>
                                            <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Enterprise Plan */}
                                  <div className="col-12 col-md-6 col-lg-3 col-xl-3 pricing-table" style={{ visibility: 'visible' }}>
                                    <div className="pricing-table__inner blue-bg" style={{ background: '#E5F3FF' }}>
                                      <div style={{ marginBottom: '40px' }}></div>
                                      <div className="pricing-table__header">
                                        <h6 className="sub-title">Enterprise</h6>
                                        <b className="sub-para enterprise_p_tag" style={{padding:"15px"}}>For large teams with &gt; 200 users</b>
                                      </div>
                                      <div className="pricing-table__body">
                                        <div className="pricing-table__footer">
                                          <a href="/contact-us" className="ht-btn ht-btn-md">
                                            Contact us
                                          </a>
                                        </div>
                                        <div className="align-left mt-30">
                                          <b>Everything in Premium, plus:</b>
                                          <ul className="dark-check-list">
                                            <li className="list-item">Multi-Site</li>
                                            <li className="list-item">Multiple Environments/Domains</li>
                                            <li className="list-item">Your Choice of Data Residency</li>
                                            <li className="list-item">Storage On Request</li>
                                            <li className="list-item">24/7 Enterprise Support</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                              </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="academic-tab" role="tabpanel">
      <div className="toggle-container">
        <div className="pricing-options">
          <span id="monthly2" className={isMonthly ? 'active' : ''}>Monthly</span>
        </div>
        <label className="switch">
          <input 
            type="checkbox" 
            id="toggleSwitch2" 
            checked={!isMonthly} 
            onChange={togglePricing} 
          />
          <span className="slider round"></span>
        </label>
        <div className="pricing-options">
          <span id="yearly2" className={!isMonthly ? 'active' : ''}>Yearly</span>
        </div>
      </div>
      <div className="pricing-details">
      <div id="monthlyPricing2" className={`pricing-plan ${isMonthly ? 'active' : ''}`}>
        {/* Monthly pricing details */}
        <div className="pricing-table-content-area">
          <div className="container">
            <div className="row pricing-table-one">
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                <div className="pricing-table__inner free-bg"  style={{ background: '#FFE7DB' }}>
                  <div style={{ marginBottom: '40px' }}></div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">ELN Lite</h6>
                    <b className="sub-para">Perfect for getting familiar with ELN</b><br />
                    <span className="price">$<span id="singleuser_lite_a">{calculatedPrices.academiclite}</span></span><br />
                    <span>per user / month</span><br />
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Free for 90 days:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Beginner-friendly User Interface</li>
                        <li className="list-item">Invite up to 10 Users</li>
                        <li className="list-item">SSO (Google and Microsoft)</li>
                        <li className="list-item">Experiment Templates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                  <div className="badge badge-standard">Recommended</div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">Standard</h6>
                    <b className="sub-para">Everything in Lite Plan plus:</b><br />
                    <span className="price">$<span id="singleuser_standard_a">{calculatedPrices.academicstandard}</span></span><br />
                    <span>per user / month</span><br />
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer text-center">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Everything in Lite, plus:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Single Site</li>
                        <li className="list-item">Basic Inventory</li>
                        <li className="list-item">Configurable Workflows</li>
                        <li className="list-item">250 GB File Storage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                  <div className="pricing-table__feature-mark">
                    <span>Popular</span>
                  </div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">Premium</h6>
                    <b className="sub-para">Perfect for mid-sized and large teams</b><br />
                    <span className="price">$<span id="singleuser_premium_a">{calculatedPrices.academicpremium}</span></span><br />
                    <span>per user / month</span><br />
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer text-center">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Everything in Standard, plus:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Multi-Site</li>
                        <li className="list-item">Advanced Inventory</li>
                        <li className="list-item">Instrument Integration</li>
                        <li className="list-item">1 TB Storage</li>
                        <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="yearlyPricing2" className={`pricing-plan ${!isMonthly ? 'active' : ''}`}>
        {/* Yearly pricing details */}
        <div className="pricing-table-content-area">
          <div className="container">
            <div className="row pricing-table-one">
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                <div className="pricing-table__inner free-bg" style={{ background: '#FFE7DB' }}>
                  <div style={{ marginBottom: '40px' }}></div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">ELN Lite</h6>
                    <b className="sub-para">Perfect for getting familiar with ELN</b><br />
                    <span className="price">$<span id="singleuser_lite2_a">{calculatedPrices.yearlyLite}</span></span><br />
                    <span>per user / month</span><br />
                    <span className="total-price">$<span id="price_lite2_a">{calculatedPrices.roundyearlyLite.toFixed(2)}</span></span> <span>for <span id="output4">{qty}</span> users</span>
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" className="ht-btn ht-btn-md">Try for free</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Free for 90 days:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Beginner-friendly User Interface</li>
                        <li className="list-item">Invite up to 10 Users</li>
                        <li className="list-item">SSO (Google and Microsoft)</li>
                        <li className="list-item">Experiment Templates</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table">
                <div className="pricing-table__inner perpul-bg" style={{ background: '#D9DAFB' }}>
                  <div className="badge badge-standard">Recommended</div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">Standard</h6>
                    <b className="sub-para">Everything in Lite Plan plus:</b><br />
                    <span className="price">$<span id="singleuser_standard2_a">{calculatedPrices.yearlyStandard}</span></span><br />
                    <span>per user / month</span><br />
                    <span className="total-price">$<span id="price_standard2_a">{calculatedPrices.roundyearlyStandard.toFixed(2)}</span></span> <span>for <span id="output5">{qty}</span> users</span>
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Everything in Lite, plus:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Single Site</li>
                        <li className="list-item">Basic Inventory</li>
                        <li className="list-item">Configurable Workflows</li>
                        <li className="list-item">250 GB File Storage</li>
                        <li className="list-item">Audit Trails</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular">
                <div className="pricing-table__inner green-bg" style={{ background: '#E5F4F2' }}>
                  <div className="pricing-table__feature-mark">
                    <span>Popular</span>
                  </div>
                  <div className="pricing-table__header">
                    <h6 className="sub-title">Premium</h6>
                    <b className="sub-para">Perfect for mid-sized and large teams</b><br />
                    <span className="price">$<span id="singleuser_premium2_a">{calculatedPrices.yearlyPremium}</span></span><br />
                    <span>per user / month</span><br />
                    <span className="total-price">$<span id="price_premium2_a">{calculatedPrices.roundyearlyPremium.toFixed(2)}</span></span> <span>for <span id="output6">{qty}</span> users</span>
                  </div>
                  <div className="pricing-table__body">
                    <div className="pricing-table__footer">
                      <Link href="https://logilabelnlite.azurewebsites.net/register" target="_blank" className="ht-btn ht-btn-md">Get started</Link>
                    </div>
                    <div className="align-left mt-30">
                      <b>Everything in Standard, plus:</b>
                      <ul className="dark-check-list">
                        <li className="list-item">Multi-Site</li>
                        <li className="list-item">Advanced Inventory</li>
                        <li className="list-item">Instrument Integration</li>
                        <li className="list-item">1 TB Storage</li>
                        <li className="list-item">SLA - L1: 24/5 (Mon to Fri), L2,L3: 9 hrs (Mon to Fri)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-toggle" style={{visibility:"hidden"}}>
        <button onClick={togglePricing}>
          {isMonthly ? 'Switch to Yearly Pricing' : 'Switch to Monthly Pricing'}
        </button>
      </div>
    </div>
    </div>
                    </div>
                    {/* <center>
                    <div className="hero-button">
        
                      <Link href="#plan-table" className="btn btn--blue">See all the features and compare plans</Link>
                    
                  </div>
                    </center> */}
                </div>
            </div>)}
            
            
    
    
    
      <div className="service-projects-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_60">
                <h3 className="center-heading mb-20">Out with the old, in with the bold!</h3>
                <h5 style={{fontSize:"24px"}}>It’s your choice to make</h5>
              </div>
            </div>
          </div>

          <div className="latest-news-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="row" style={{ margin: '5px' }}>
                  <div className="col-lg-4 bg-gray1 lsec">
                    <center>
                      {/* <img
                        src="/assets/images/eln/sec1.svg"
                        alt="Sec 1"
                        className="img-fluid "
                        style={{height:"100px"}}
                      /> */}
                      <Image src={sec1} className="img-fluid" alt="" style ={{height:"100px"}}/>

                      <br></br><br></br>
                      <div className="hero-button mt-40 mb-40">
                          <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue" style={{ padding: '0 18px !important', lineHeight: '35px !important', height: '34px !important' }}>
                            Start For Free
                        </Link>
                      </div>
                    </center>
                  </div>
                  <div className="col-lg-8 bg-lblue lsec">
                    <h5>Without Logilab ELN,</h5><br/>
                    <ul className="cross-check-list" style={{paddingLeft:"0"}}>
                      <li className='list-item'>Too Scattered & Untraceable</li>
                      <li className='list-item'>Susceptible to data loss</li>
                      <li className='list-item'>Locked by location</li>
                      <li className='list-item'>Unscalable</li>
                      <li className='list-item'>Disconnected</li>
                      <li className='list-item'>Increased costs due to non-compliance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row" style={{ margin: '5px' }}>
                  <div className="col-lg-4 bg-gray1 lsec">
                    <center>
                      {/* <img
                        src="/assets/images/eln/eln-vertical.svg"
                        alt="ELN Vertical"
                        className="img-fluid"
                        style={{height:"100px"}}
                      /> */}
                        <Image src={elnvertical} className="img-fluid" alt="" style ={{height:"100px"}}/>
                      <br></br>
                      <br></br>
                      <div className="hero-button mt-40 mb-40">
                        <Link href="/" className="btn btn--blue" style={{ padding: '0 18px !important', lineHeight: '35px !important', height: '34px !important' }}>
                            Get a Full Story
                          </Link>
                      </div>
                    </center>
                  </div>
                  <div className="col-lg-8 bg-lblue lsec">
                    <h5>With Logilab ELN,</h5><br/>
                    <ul className="green-check-list" style={{paddingLeft:"0"}}>
                      <li className='list-item'>Standardized</li>
                      <li className='list-item'>Evergreen</li>
                      <li className='list-item'>Accessible worldwide</li>
                      <li className='list-item'>Scalable</li>
                      <li className='list-item'>Collaborative by nature</li>
                      <li className='list-item'>Compliant and Secure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-slider-wrapper bg-lblue section-space--pt_100 text-center section-space--pb_40">
        <div className="container">
          <div className="row">
            <div className="section-title-wrap text-center section-space--mb_10">
              <h3 className="center-heading">Deployment Options</h3>
            </div>
          </div>

          <div className="row section-space--mb_40 tab-hide-laptop section-space--mt_100">
            <div className="col-lg-12 ht-tab-wrap">
              <div className="row">
                <div className="col-12 text-center">
                <div className={`responsive-tabs ${isOpen ? 'open' : ''}`} onClick={handleTabClick}>
                  <span className="dropdown-arrow" onClick={handleTabClick}></span>
                  <ul className="nav nav-tabs justify-content-center ht-tab-menu" role="tablist">
                    <li className={`tab__item nav-item ${activeTab === 'saas' ? 'active' : ''}`} onClick={() => {setActiveTab('saas')}}>
                    <Link className="nav-link active" id="nav-tab1" data-bs-toggle="tab" href="#" role="tab" aria-selected="true">
                      Cloud-SaaS
                    </Link>

                    </li>
                    <li className={`tab__item nav-item ${activeTab === 'dedicated' ? 'active' : ''}`} onClick={() => {
                          setActiveTab('dedicated');
                          console.log('Active tab:', activeTab);
                        }}>
                     <Link className="nav-link" id="nav-tab2" data-bs-toggle="tab" href="#academic-tab" role="tab" aria-selected="false">
                        Dedicated Hosting
                      </Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>

              <div className="tab-content ht-tab__content">
                {activeTab === 'saas' ? (
                  <div className="tab-pane fade show active">
                    <div className="tab-lims-wrap section-space--mt_60">
                      <div className="row">
                        <div className="col-lg-7">
                          <h3>Cloud-SaaS</h3>
                          <p>
                            Logilab ELN Cloud is a web-based electronic lab notebook that is securely hosted on Microsoft
                            Azure cloud servers. It is a fully platform-agnostic solution and runs on any modern web
                            browser with zero implementation necessary.
                          </p>
                          <ul className="dark-check-list">
                            <li className='list-item'>SaaS-based Monthly or Annual Licensing</li>
                            <li className='list-item'>New features & version updates included</li>
                            <li className='list-item'>Zero implementation & maintenance cost</li>
                          </ul>
                        </div>
                        <div className="col-lg-5">
                          <Image src={Cloudsaas} className="img-fluid price-bottom-img elnimage_size" alt="" width={500} height={500}/>
                        </div>
                      </div>
                    </div>
                  </div>
                ): null}

                {activeTab === 'dedicated' ? (
                  <div className="tab-pane fade show active">
                    <div className="tab-history-wrap section-space--mt_60">
                      <div className="row">
                        <div className="col-lg-7">
                          <h3>Dedicated Hosting</h3>
                          <p>
                            Logilab ELN can also be hosted in a dedicated Azure cloud server or a customer-chosen
                            On-Premise environment.
                          </p>
                          <ul className="dark-check-list">
                            <li className='list-item'>Customer Managed Solution - On-premise</li>
                            <li className='list-item'>Flexible Licensing Options: One-time purchase or SaaS-based subscription</li>
                            <li className='list-item'>Customer chosen server location</li>
                          </ul>
                        </div>
                        <div className="col-lg-5">
                        <Image src={hosting} className="img-fluid price-bottom-img elnimage_size" alt="" width={500} height={500}/>
                        </div>
                      </div>
                    </div>
                  </div>
                ): null}
              </div>
            </div>
          </div>

          <div className="row tab-hide-mobile section-space--ptb_80">
            <div className="col-lg-4">
              <div className="nav flex-column nav-pills">
                <button
                  className={`nav-link ${activeTab === 'saas' ? 'active' : ''}`}
                  onClick={() => setActiveTab('saas')}
                >
                  <h5>Cloud-SaaS</h5>
                </button>
                <button
                  className={`nav-link ${activeTab === 'dedicated' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dedicated')}
                >
                  <h5>Dedicated Hosting</h5>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
      <div className="tab-content" id="v-pills-tabContent">
      {activeTab === 'saas' ? (
        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" style={{padding:"0"}}>
          <div className="row">
            <div className="col-lg-7 align-left">
              {/* Section title */}
              <h3 className="heading">Cloud - SaaS</h3>
              <p>
                Logilab ELN Cloud is a web-based electronic lab notebook that is securely hosted on Microsoft Azure
                cloud servers. It is a fully platform-agnostic solution and runs on any modern web browser with zero
                implementation necessary.
              </p>
              <ul className="dark-check-list">
                <li className="list-item">SaaS-based Monthly or Annual Licensing</li>
                <li className="list-item">New features & version updates included</li>
                <li className="list-item">Zero implementation & maintenance cost</li>
              </ul>
            </div>
            <div className="col-lg-5">
              {/* Image */}
              {/* <img className="img-fluid" src="/assets/images/eln/cloud-saas.svg" alt="Cloud SaaS" width={500} height={500} /> */}
              <Image src={Cloudsaas} className="img-fluid  elnimage_size" alt="" width={500} height={500}/>
            </div>
          </div>
        </div>) :null}
        {activeTab === 'dedicated' ? (
        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" style={{padding:"0"}}>
          <div className="row">
            <div className="col-lg-7 align-left">
              {/* Section title */}
              <h3 className="heading">Dedicated Hosting</h3>
              <p>
                Logilab ELN can also be hosted in a dedicated Azure cloud server or a customer-chosen On-Premise
                environment.
              </p>
              <ul className="dark-check-list">
                <li className="list-item">Customer Managed Solution - On-premise</li>
                <li className="list-item">
                  Flexible Licensing Options: One-time purchase or SaaS-based subscription
                </li>
                <li className="list-item">Customer chosen server location</li>
              </ul>
            </div>
            <div className="col-lg-5">
              {/* Image */}
              {/* <img className="img-fluid" src="/assets/images/eln/hosting.svg" alt="Dedicated Hosting" width={500} height={500} /> */}
              <Image src={hosting} className="img-fluid  elnimage_size" alt="" width={500} height={500}/>
            </div>
          </div>
        </div>):null}
      </div>
    </div>
        </div>
  </div>
  </div>
  <div id="plan-table" className="feature-images-wrapper section-space--pt_60 section-space--pb_30">
      <div className="container">
        <h3 className="center-heading">Find the right plan for you</h3>
        <br />
        <div className="row section-space--ptb_60">
        <table>
    <thead>
	 <tr>
            <th className="empty-head"></th>
			 <th className="red-header text-center">For Beginners</th>
            <th className="empty-head"></th>
            <th className="green-header text-center">Best Value</th>
            <th className="empty-head"></th>
           
        </tr>
        <tr>
            <th></th>
            <th className="lred-header plan-header">ELN Lite</th>
            <th className="plan-header">Standard</th>
            <th className="lgreen-header plan-header">Premium</th>
            <th className="plan-header">Enterprise</th>
        </tr>
      
        <tr style={{height:"140px"}}>
            <th className="tableth"></th>
            <th className="tableth lred-header"><div className="hero-button mt-40 text-center mb-40">
                                    <a href="https://logilabelnlite.azurewebsites.net/register" target="blank"  style={{padding:"0 18px !important",lineHeight:"35px",height:"34px"}} className="btn btn--blue">Try for free</a>
                                
                                    </div></th>
            <th className="tableth"><div className="hero-button mt-40 text-center mb-40">
                                    <a href="https://logilabelnlite.azurewebsites.net/register" target="blank" style={{padding:"0 18px",lineHeight:"35px",height:"34px"}} className="btn btn--blue">Get Started</a>
                                
                                    </div></th>
            <th className="tableth lgreen-header"><div className="hero-button text-center mt-40  mb-40">
                                    <a href="https://logilabelnlite.azurewebsites.net/register" target="blank"  style={{padding:"0 18px",lineHeight:"35px",height:"34px"}} className="btn btn--blue">Get Started</a>
                                
                                    </div></th>
            <th className="tableth"><div className="hero-button mt-40 text-center mb-40">
                                    <a href="/contact" target="blank" style={{padding:"0 18px",lineHeight:"35px",height:"34px"}} className="btn btn--blue">Contact Us</a>
                                
                                    </div></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="feature" data-label="Feature">Site Limit</td>
            <td className="lred-header" data-label="Free">Single</td>
            <td data-label="Standard">Single</td>
            <td className="lgreen-header" data-label="Premium">Multi-Site</td>
            <td data-label="Enterprise">Multi-Site</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Spreadsheet Templates</td>
            <td className="check lred-header" data-label="Free">✓</td>
            <td className="check" data-label="Standard">✓</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Protocol Templates</td>
            <td className="check lred-header" data-label="Free">✓</td>
            <td className="check" data-label="Standard">✓</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Project Management</td>
            <td className="check lred-header" data-label="Free">✓</td>
            <td className="check" data-label="Standard">✓</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Folder/File Management</td>
            <td className="check lred-header" data-label="Free">✓</td>
            <td className="check" data-label="Standard">✓</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Dynamic Inventory</td>
            <td className="lred-header" data-label="Free">Basic</td>
            <td data-label="Standard">Basic</td>
            <td className="lgreen-header" data-label="Premium">Advanced</td>
            <td data-label="Enterprise">Advanced</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Configurable workflows</td>
            <td className="lred-header" data-label="Free">Fixed | Upto 3 levels only</td>
            <td className="check" data-label="Standard">✓</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Log Books</td>
            <td  className="cross lred-header" data-label="Free">—</td>
            <td className="cross" data-label="Standard">—</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr>
        <tr>
            <td className="feature" data-label="Feature">Multiple Environment (Test, Val, Prod)</td>
            <td className="lred-header" data-label="Free">Production</td>
            <td data-label="Standard">Production</td>
            <td className="lgreen-header" data-label="Premium">Validation + Production</td>
            <td data-label="Enterprise">Test + Validation + Production</td>
        </tr>
        {/* <tr>
            <td className="feature" data-label="Feature">Instrument Integration</td>
            <td className="cross lred-header" data-label="Free">—</td>
            <td className="cross" data-label="Standard">—</td>
            <td className="check lgreen-header" data-label="Premium">✓</td>
            <td className="check" data-label="Enterprise">✓</td>
        </tr> */}
        <tr className="feature-header">
            <td className="feature-header" style={{paddingLeft:"50px", position:"relative"}}><b className='block-b' onClick={toggleRows} style={{ cursor: 'pointer' }}>{isExpanded ? " - " : "+"}</b>Security & Compliance</td>
            <td  className="feature-header  tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
        </tr>
        {isExpanded && (<><tr>
                    <td className="feature" data-label="Feature">Azure AD SSO</td>
                    <td className="check lred-header" data-label="Free">✓</td>
                    <td className="check" data-label="Standard">✓</td>
                    <td className="check lgreen-header" data-label="Premium">✓</td>
                    <td className="check" data-label="Enterprise">✓</td>
                  </tr><tr>
                      <td className="feature" data-label="Feature">21 CFR Part 11 Compliance</td>
                      <td className="check lred-header" data-label="Free">✓</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">User Roles & Rights</td>
                      <td className="cross lred-header" data-label="Free">—</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Data Encryption</td>
                      <td className="check lred-header" data-label="Free">✓</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Data Export</td>
                      <td className="cross lred-header" data-label="Free">—</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Automatic Backups</td>
                      <td className="cross lred-header " data-label="Free">—</td>
                      <td className="cross" data-label="Standard">—</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Business continuity & disaster recovery</td>
                      <td className="cross lred-header" data-label="Free">—</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Audit Trail</td>
                      <td className="cross lred-header" data-label="Free">—</td>
                      <td className="check" data-label="Standard">✓</td>
                      <td className="check lgreen-header" data-label="Premium">✓</td>
                      <td className="check" data-label="Enterprise">✓</td>
                    </tr><tr>
                      <td className="feature" data-label="Feature">Data residency</td>
                      <td className="lred-header" data-label="Free">USA</td>

                      <td data-label="Standard">USA</td>
                      <td className="lgreen-header" data-label="Premium">USA</td>
                      <td data-label="Enterprise">Customer chosen</td>
                    </tr></>)}
        <tr className="feature-header">
            <td className="feature-header" style={{paddingLeft:"50px", position:"relative"}}><b className='block-b' onClick={onClickDown} style={{ cursor: 'pointer' }}>{isExpandedlist ? " - " : "+"}</b>Storage & Support</td>
            <td className="feature-header  tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
            <td className="feature-header  tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
        </tr>
        {isExpandedlist && (<><tr>
            <td className="storage text-left" data-label="Feature">Storage</td>
            <td className="lred-header"data-label="Free">2GB/user</td>
            <td data-label="Standard">250 GB File Storage</td>
            <td className="lgreen-header" data-label="Premium">1TB storage</td>
            <td data-label="Enterprise">On Request</td>
        </tr>
        <tr>
            <td className="support" data-label="Feature">Support</td>
            <td className="lred-header" data-label="Free">Help center support</td>
            <td data-label="Standard">9/5 Regional Support</td>
            <td className="lgreen-header" data-label="Premium">LI: 24/5 (Mon - Fri)<br/> L2, L3: 9 hrs (Mon - Fri)</td>
            <td data-label="Enterprise">24/7 Enterprise <br/>Support Phone support</td>
        </tr></>)}
		  <tr className="feature-header">
            <td className="feature-header" style={{paddingLeft:"50px", position:"relative"}}><b className='block-b' onClick={onClickUp} style={{ cursor: 'pointer' }}>{isExpandedvist ? " - " : "+"}</b>Optional Add ons</td>
            <td className="feature-header tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
            <td className="feature-header  tabler-hide"></td>
            <td className="feature-header tabler-hide"></td>
        </tr>
        {isExpandedvist && (<><tr>
            <td className="storage" data-label="Feature">Chemical Drawings</td>
            <td className="lred-header"data-label="Free">N/A</td>
            <td data-label="Standard">Kekule.js</td>
            <td className="lgreen-header" data-label="Premium">Marvin.js with Chem Draw Support</td>
            <td data-label="Enterprise">Marvin.js with Chem Draw Support</td>
        </tr>
        <tr>
            <td className="support" data-label="Feature">IQ/OQ Validations </td>
            <td className="lred-header" data-label="Free">N/A</td>
            <td data-label="Standard">Installation and operational qualification</td>
            <td className="lgreen-header" data-label="Premium">Installation, operational and performance qualification</td>
            <td data-label="Enterprise">Installation, operational and performance qualification</td>
        </tr>
        <tr>
            <td className="support" data-label="Feature">Instrument Integration via Parser</td>
            <td className="cross lred-header" data-label="Free">—</td>
            <td className="cross lred-header" data-label="Free">—</td>
            <td className="check" data-label="Standard">✓ <span style={{display:"block", color:"#273b5e",fontWeight:"normal"}}>(Optional Paid Add-on)</span></td>
            <td className="check" data-label="Standard">✓ <span style={{display:"block", color:"#273b5e",fontWeight:"normal"}}>(Optional Paid Add-on)</span></td>
        </tr>
        </>)}
    </tbody>
        </table>
        </div>
        <center>
          <div className="hero-button mt-40 mb-40">
            <Link href="https://logilabelnlite.azurewebsites.net/register" className="btn btn--blue">Start For Free
            </Link>
          </div>
        </center>
      </div>
    </div>
    <div className="bg-dblue section-space--pt_60 section-space--pb_100">
      <div className="container">
        <div className="row">
          <h3 className="center-heading white-font mb-20">ONLY PAY FOR WHAT YOU NEED!</h3>
          <div className="col-12">
            <div className="feature-images__two small-mt__10">
              <div className="modern-grid-image-box row row--30">
                {/* First Box */}
                <div className="single-item wow move-up col-lg-9 section-space--mt_60 animated" style={{ visibility: 'visible' }}>
                  <a className="ht-box-images style-02">
                    <div className="image-box-wrap icon-box">
                      <div className="content">
                        <h6 className="box-heading">
                          Our on-demand licensing enables ELN to become a user-based expense, rather than a large license cost at the time of purchase
                        </h6>
                      </div>
                      <div className="box-image">
                        {/* <img className="img-fluid image-icon" src="/assets/images/eln/box1.svg" alt="Box 1" /> */}
                        <Image src={box1} className="img-fluid image-icon" alt="" width={500} height={500} />

                      </div>
                    </div>
                  </a>
                </div>

                {/* Empty Space */}
                <div className="single-item wow move-up col-lg-3"></div>
                <div className="single-item wow move-up col-lg-3"></div>

                {/* Second Box */}
                <div className="single-item wow move-up col-lg-9 section-space--mt_60 animated" style={{ visibility: 'visible' }}>
                  <a className="ht-box-images style-02">
                    <div className="image-box-wrap icon-box">
                      <div className="box-image">
                        {/* <img className="img-fluid image-icon" src="/assets/images/eln/box2.svg" alt="Box 2" width={500} height={500} /> */}
                        <Image src={box3} className="img-fluid image-icon" alt="" width={500} height={500} />
                      </div>
                      <div className="content">
                        <h6 className="box-heading">
                          Going digital with Logilab ELN SaaS reduces risk for regulated environments & provides a high level of data integrity, ultimately no surprises
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Third Box */}
                <div className="single-item wow move-up col-lg-9 section-space--mt_60 animated" style={{ visibility: 'visible' }}>
                  <a className="ht-box-images style-02">
                    <div className="image-box-wrap icon-box">
                      <div className="content">
                        <h6 className="box-heading">
                          Users with basic needs can make use of our standard plan, which is perfect for small labs & independent researchers.
                        </h6>
                      </div>
                      <div className="box-image">
                        {/* <img className="img-fluid image-icon" src="/assets/images/eln/box3.svg" alt="Box 3" width={500} height={500} /> */}
                        <Image src={box2} className="img-fluid image-icon" alt="" width={500} height={500} />
                      </div>
                    </div>
                  </a>
                </div>

                {/* Empty Space */}
                <div className="single-item wow move-up col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="feature-images-wrapper bg-lblue section-space--ptb_100">
      <div className="container">
        <h3 className="center-heading">Our Satisfied Customers</h3>
        <div className="row section-space--ptb_80">
          <div className="col-lg-1"></div>

          {/* Customer Testimonial */}
          <div className="col-lg-3 text-center">
            {/* <img
              src="/assets/images/eln/client/2.png"
              style={{ background: '#fff' }}
              width={200}
              height={200}
              className="img-fluid"
              alt="Dr. Sanjay Jadhav"
            /> */}
             <Image src={client2} className="img-fluid"  width={200}
              height={200} alt="Dr. Sanjay Jadhav" style={{background: '#fff', marginBottom:"10px"}}/><br/>
            <b>Dr. Sanjay Jadhav</b>
            <br />
            <i style={{fontSize:"17px"}}>Head of Quality Control and Validation</i>
          </div>
          <div className="col-lg-7">
            <div className="section-title-wrap section-space--mb_10">
              <p>
                "ELN played a significant role in demonstrating our compliance with the regulatory requirements and was
                instrumental in ensuring a successful outcome for us. Your software made compliance easier and more
                efficient, allowing us to focus on our core technical activities while staying on top of our regulatory
                commitments. During inspection, this software was thoroughly challenged and evaluated to the satisfaction
                of the inspectors."
              </p>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>

        {/* Client Logos */}
        <div className="row client-logo align-items-center">
          <div className="col-lg-3">
            <b>Loved by over 1200+ users from companies like</b>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div className="cust-logo">
                  {/* <img
                    src="/assets/images/eln/client/11.png"
                    className="img-fluid"
                    alt="Client 1"
                    width={150}
                    height={150}
                  /> */}

          <Image src={client3} className="img-fluid"  width={160}
              height={160} alt="Client 1" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="cust-logo">
                  {/* <img
                    src="/assets/images/eln/client/a3.jpg"
                    className="img-fluid"
                    alt="Client 2"
                    width={150}
                    height={150}
                  /> */}
                     <Image src={client4} className="img-fluid"  width={160}
              height={160} alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="cust-logo">
                  {/* <img
                    src="/assets/images/eln/client/a1.jpg"
                    className="img-fluid"
                    alt="Client 3"
                    width={150}
                    height={150}
                  /> */}
                      <Image src={client5} className="img-fluid"  width={160}
              height={160} alt="" />
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div className="cust-logo">
                  {/* <img
                    src="/assets/images/eln/client/a2.jpg"
                    className="img-fluid"
                    alt="Client 4"
                    width={150}
                    height={150}
                  /> */}
                          <Image src={client6} className="img-fluid"  width={160}
              height={160} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="clients-images-wrapper section-space--pt_60 section-space--pb_60">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            {/* Section title */}
            <div className="section-title-wrap text-center section-space--mb_60">
              <h3 className="center-heading">Data Security and Regulatory Compliance</h3><br />
              <p style={{padding: "0 50px"}}>
                Logilab ELN offers robust solutions for compliance with FDA 21 CFR Part 11 and Eudralex Annex 11, providing secure, traceable, and reliable electronic record management. 
                With advanced features like audit trails and electronic signatures, it ensures stringent regulatory requirements are met while maintaining data integrity and compliance. 
                <br />
                Logilab ELN provides full control and encryption of data, both at rest and in transit, with enhanced security via a robust Azure firewall.
              </p>
            </div>
            
            {/* Image section */}
            <div className="row section-space--mt_60 client-img">
            <Image src={award} className="img-fluid section-space--mb_60"  width={1200} height={600} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='plan-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 plan-left'>
            <h3>See for yourself</h3>
            <p style={{fontWeight:"600"}}>150+ companies choose us for their everyday experiements and centralized laboratory automation</p>
            <p style={{fontWeight:"600"}}>Will you be the next?</p>
            <div className='hero-button'><Link href="/request-a-demo" className='btn btn--blue'>Schedule My Demo</Link></div>
          </div>
          <div className='col-lg-7 '>
            <div className='custom-footer'>
              <div className='inner-footer'>
                <h2>Still Have Questions</h2>
                <p style={{fontWeight:"600"}}>Visit our Help Center to get a comprehensive overview of Logilab ELN and its capabilities.</p>
                <Link href="/contact-us" className="plan-help">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <Moreproduct/> */}
    <Footer/>
  </div>
      </>
   
    );

}
export default Plan;

function setSingleUnitPrices(arg0: { lite: string; standard: string; premium: string; }) {
  throw new Error('Function not implemented.');
}
