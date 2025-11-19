
"use client";
import React, { useState, useEffect } from 'react';
import home_calender from '../../../public/assets/images/home_calender.svg'
import LogilabELNwhite from '../../../public/assets/images/Logilab-ELN_white.svg'
import Link from 'next/link';
import { Accordion, Card, Button } from 'react-bootstrap';
import { TfiPlus,TfiMinus } from "react-icons/tfi"; 
import Moreproduct from '@/components/moreproduct';
import Footer from '../../footer';
import cta2 from '../../../public/assets/images/cta2.svg'
import Image from "next/image";
import Header from '@/components/header';
import { SyncLoader } from 'react-spinners';
function FaqSection () {
  const [activeCollapse, setActiveCollapse] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const toggleCollapse = (id: string) => {
    setActiveCollapse(activeCollapse === id ? null : id);
  };

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
        {/* <div className="breadcrumb_area">
          <img className="breadcrumb_shap" src="img/breadcrumb/banner_bg.png" alt="" />
         <div className="container pricingBanner">
        <div className="breadcrumb_content text-center">
          <h1 className="f_p f_700 f_size_40 w_color l_height50 mb_20">Frequently Asked Questions</h1>
        </div>
      </div>
        </div> */}
        
      
        <div className="soltionbg security_banner_content " style={{display:"flex", alignItems:"center"}}>
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                    Frequently Asked Questions
                    </h1>               
                  </div>
                </div>
        
              </div>
            </div>
        </div>
        <section className="faq_area bg_color sec_pad">
      <div className="container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              When should I consider Logilab ELN Cloud SaaS Premium over Logilab ELN Cloud SaaS Standard?
            </Accordion.Header>
            <Accordion.Body>
              Logilab ELN Cloud SaaS Standard is for small scale laboratories with only one site requirement with basic inventory functionality and only one instance. Logilab ELN Cloud SaaS Premium helps teams confidently scale Software across their organization with multiple sites by offering advanced inventory features, API access, and more storage of data. Please check this <Link href="/pricing">page</Link> for more details.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How do I upgrade from Logilab ELN Cloud SaaS Standard to Logilab ELN Cloud SaaS Premium?
            </Accordion.Header>
            <Accordion.Body>
              Logilab ELN Cloud SaaS can be upgraded from Standard to Premium at any time by filling the ‘Update your Plan’ form on the <Link href="/pricing">Logilab ELN Pricing</Link> Page.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is a Logilab ELN Cloud SaaS user?
            </Accordion.Header>
            <Accordion.Body>
              A Logilab ELN Cloud SaaS user is any user that can login to Logilab ELN Cloud SaaS site and exists in User Management module of ELN.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How are users counted for billing?
            </Accordion.Header>
            <Accordion.Body>
              You can add and remove users as your team changes. At the end of each monthly billing cycle (or annual cycle), an invoice will be sent by Agaram for the following month's subscription based on the exact number of users that are active at that time.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Do you offer annual subscriptions?
            </Accordion.Header>
            <Accordion.Body>
              Yes! For annual subscriptions, you will be billed for the tier that you have opted for based on when you start your subscription. Annual subscriptions price includes a discount (as against monthly) of 10% depending on the number of users purchased.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              What payment options do we accept?
            </Accordion.Header>
            <Accordion.Body>
              Monthly and annual subscriptions are payable by bank transfer to our designated bank account or through wire transfer based on the details provided in the invoice.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>
              What is the minimum term of service?
            </Accordion.Header>
            <Accordion.Body>
              The minimum term of service is one month. You can choose to renew on a month-by-month basis, or you can purchase an annual subscription.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Where can I find the General Terms of Service?
            </Accordion.Header>
            <Accordion.Body>
              Please refer Agaram’s <Link href="/terms-and-conditions">Terms of Service</Link> for more information.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              How can I get a refund for my Logilab ELN subscription?
            </Accordion.Header>
            <Accordion.Body>
              If you are not satisfied with Logilab ELN Cloud SaaS product or service, you may opt to cancel the subscription. In that case, please contact us, and we offer a refund within 30 days of payment for monthly and annual subscriptions. Please refer to the <Link href="/refund-policy">refund policy here</Link>.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
            What is Logilab ELN Academics?
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Academics is a cost-effective digital solution designed for small labs, academic institutions, startups, and individual researchers. It offers essential functionalities that enable users to manage experiments, document results, and share data efficiently.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
            Who should use Logilab ELN Academics?
            </Accordion.Header>
            <Accordion.Body >
              <ul className="dark-check-list">
                <li className="list-item">  
                  Logilab ELN Academics is perfect for those seeking an affordable, budget-friendly ELN solution, including.
                </li>
                <li className="list-item">
                Individual researchers and students: Users who need a basic yet powerful system for managing their lab work but do not require complex regulatory compliance features.
                </li>
                <li className="list-item">
                Small academic labs: These labs can benefit from an organized digital solution without incurring significant costs.
                </li>
                <li className="list-item">
                  Startups and small biotech companies: New organizations looking to establish a digital workflow without significant financial investment.
                </li>
              </ul>      
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
               Can multiple users collaborate on the free edition of Logilab  ELN? 
            </Accordion.Header>
            <Accordion.Body>
            Yes, Logilab ELN Lite allows maximum of 3 users to collaborate and share data in real-time for free. This enables lab teams to work together efficiently, with shared access to protocols, results, and experiment notes, ensuring that everyone stays aligned on tasks and progress.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
               How can I get started with Logilab ELN Free?
            </Accordion.Header>
            <Accordion.Body>
              Getting started is quick and hassle-free. Simply visit the registration page, sign up with your email or log in using your Google/Microsoft account, and you can begin using the platform. With pre-configured templates and context-aware help guides, labs can start working within minutes
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>
            What makes Logilab ELN Academics different from other ELN solutions?
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN Academics stands out due to its simplicity, affordability, and focus on smaller labs or academic institutions. While offering essential features like basic inventory management, pre-designed templates, and real-time collaboration, it also provides a seamless upgrade path to the full version. This makes it an ideal starting point for labs looking to go digital without a heavy financial investment to evaluate the system
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>
            How does Logilab ELN ensure data security?
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN follows industry-standard security protocols to protect your data. It includes features such as role-based access control, encrypted data storage, and secure cloud-based backups (if using the cloud version). This ensures that lab data is safe, secure, and accessible only to authorized users.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>
              Can I export my data from Logilab ELN?
            </Accordion.Header>
            <Accordion.Body>
            Yes, Logilab ELN allows users to export their data in multiple formats, including Excel, CSV, and PDF. This enables labs to maintain control over their data and use it in other systems or for reporting purposes
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="19">
            <Accordion.Header>
            Who is the free version of Logilab ELN ideal for?
            </Accordion.Header>
            <Accordion.Body>
            Logilab ELN's free version is a valuable tool for students, individual researchers, small labs, and start-ups to explore and utilize an ELN solution, while larger labs/organizations can use it to evaluate the system before making a full commitment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="20">
            <Accordion.Header>
            Are there discounts available when upgrading?
            </Accordion.Header>
            <Accordion.Body>
            Yes, annual subscriptions offer up to 10% off, and volume-based discounts are available for 
            larger labs or organizations. These options make it cost-effective for labs to upgrade as their 
            needs grow. For academic - 30% discount on top of annual discounts
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="21">
            <Accordion.Header>
            Can I switch between subscription tiers after upgrading?
            </Accordion.Header>
            <Accordion.Body>
            Yes, Logilab ELN allows labs to switch between the Standard and Premium tiers as their needs 
            evolve. This flexibility ensures that labs can always access the tools they require without 
            committing to unnecessary features.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>  
         
        <br /><br />
      </div>
    </section>
    <div className="cont backgr_col calender_cont">
      <div className="Devepoe_space">
        <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 mt_110 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 l_height15">Simple, customizable, and organized</h3>
                              <p className='Ensure-sub-bl'>Kickstart your lab with Logilab ELN </p>
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
                  
        <div className=" last_imag_backgr pt-5">
                        <div className="container">
                    <div className="row">
                            <div className="col-lg-6 order-last order-lg-first">
                                <Image src={home_calender} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 order-first order-lg-last d-flex flex-column justify-content-center align-items-center ">                            
                                      <div className="text-center">
                                         <Image src={LogilabELNwhite} className="img-fluid " alt=""/>
                                         <h3 className="text-white mt-3 f_800">Drive scientific progress forward 
                                          <br/>with Logilab ELN</h3>
                                        <div className="d-flex pb-3" style={{justifyContent:"center"}}>
                                          <div className="action_btn job-button text-md cont_compare ">
                                             <Link href="/request-a-demo" className="btn btn--blue">Request a Demo</Link>
                                          </div>
                                          <div className="action_btn job-button text-md Registorheader">
                                             <Link href="/product-brochure-download" className="btn btn--blue ms-4">Download Brochure</Link>
                                          </div>
                                        </div>

                                       </div>                                
                              
                            </div>
                        </div>                        
                    </div>
                    </div>



        </div>
 
    < Footer/>  
      </div>
    );
}

export default FaqSection;
