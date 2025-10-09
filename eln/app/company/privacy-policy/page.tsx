"use client";
import React, { useState ,useEffect } from "react";
import { Nav, Tab, Row, Col } from "react-bootstrap";
import Footer from "../../footer";
import Moreproduct from "@/components/moreproduct";
import cta2 from '../../../public/assets/images/cta2.svg'
import Image from "next/image";
import Link from "next/link"; 
import Header from "@/components/header";
import { SyncLoader } from 'react-spinners';
function TermsConditions() { 
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
    <div>
      <Header/>
       <div className='about-us'>
     <div className="soltionbg security_banner_content ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-5" data-wow-delay="0.3s">
                        Privacy Policy
                    </h1>
                    <div className="d-flex action_btn justify-content-center mt_40 bannerresolution_btn" data-wow-delay="0.6s">
                  <Link href="/contact-us" className="btn btn--white text-center">
                  Contact Us
                  </Link>
                  <Link href="/solution" className="btn btn--white mx-4 text-center">
                  Explore Solutions
                  </Link>
                </div>                   
                  </div>
                </div>
        
              </div>
            </div>
        </div>
        </div>

        <div className="software_service_area sec_pad terms-conditions">
        <div className="container">
          <div
            className="sec_title mb_70 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <p className="f_400 f_size_16 mb-0">
            Agaram Technologies (Private) Limited (hereinafter called Agaram in this Private Policy) understands and recognizes that privacy is of great importance to individuals everywhere – our customers, website visitors, product users, and everyone.
            </p>
            <p className="f_400 f_size_16 mb-0">
            Providing utmost priority to the responsible use and protection of personal private information is a core value to Agaram. In Agaram, we have set out a Private Policy which describes how Agaram handles information that can be used directly or indirectly to identify an individual in the course of conducting business
            </p>
            <p className="f_400 f_size_16 mb-0">
            This Privacy Policy is issued on behalf of Agaram Technologies (Private) Limited and its subsidiaries globally, so when we say “Agaram”, “we”, “us” or “our” in this Privacy Policy, we are referring to Agaram Technologies (Private) Limited and the relevant subsidiaries of Agaram that are responsible for handling personal information..
            </p>
            <p className="f_400 f_size_16 mb-0">
            If you have any further questions or concerns, please feel free to reach us at privacy@agaramtech.com. The privacy statement was last updated on 30th September 2020..
            </p>
          </div>

          <Tab.Container id="terms-and-conditions" defaultActiveKey="#tab1">
            <Row>
              <Col sm={3}>
                <Nav
                  className="flex-column  software_service_tab "
                  variant="pills"
                >
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab1">
                      <h5>1. Introduction</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab2">
                      <h5>2. Collecting personal information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab3">
                      <h5>3. Using your personal information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab4">
                      <h5>4. Disclosing personal information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab5">
                      <h5>
                       5. International data transfers
                      </h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab6">
                    <h5>6. Retaining personal information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab7">
                    <h5>7. Security of your personal information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab8">
                    <h5>8. Amendments</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab9">
                      <h5>9. Your rights</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab10">
                      <h5>10. Privacy Rights for the European Union Countries</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab11">
                      <h5>11. About Cookies</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab12">
                      <h5>12. Updating information</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab13">
                      <h5>13. Our details</h5>
                    </Nav.Link>
                  </Nav.Item>
 
                </Nav>
              </Col>
              <Col sm={9}>
                <div className="tab-content software_service_tab_content">
                  <Tab.Content>
                    <Tab.Pane eventKey="#tab1">
                    
                      <h4>1. Introduction</h4> 
                    <p>1.1 Agaram is committed to safeguarding the privacy of www.agaramtech.com visitors. In this Privacy policy, it is explained how Agaram will treat your personal information.</p>

                    <p>1.2 You can visit our website without disclosing any personally identifiable information about yourself (although please note that we may use cookies and collect other non-personally identifiable information about your browsing activity).</p>

                    <p>  1.3 Agaram will ask you to consent to our use of cookies in accordance with the terms of this policy when you first visit www.agaramtech.com. By using www.agaramtech.com and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy. Please refer to ‘About Cookies’ section for more details
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab2">
                    <h5>2. Collecting Personal Information</h5>
		   <p>2.1  Agaram Technologies (Private) Limited may collect, store and use the following kinds of personal information:</p>
	   
	    <ul className="dark-check-list">
                                        <li className="list-item">
										information about your computer and about your visits to and use of this website (including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths)
										</li>
										<li className="list-item">
										information that you provide to us when using the services on www.agaramtech.com or that is generated in the course of the use of those services (including the timing, frequency and pattern of service use)

										</li>
										<li className="list-item">
										information contained in or relating to any communications that you send to us or send through www.agaramtech.com (including the communication content and meta data associated with the communication
										</li>
										<li className="list-item">
										any other personal information that you choose to send to us

										</li>
										
							</ul>	
							
							<p>2.2  Before you disclose to us the personal information of another person, you must obtain that person’s consent to both the disclosure and the processing of that personal information in accordance with this policy</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab3">
                    <h5>3. Using your personal information</h5>
      <br />
      <p>
        3.1 Personal information submitted to us through www.agaramtech.com will
        be used for the purposes specified in this policy or on the relevant
        pages of the website.
      </p>
      <p>3.2 Agaram may use your personal information to:</p>
      <ul className="dark-check-list">
        <li className="list-item">
          To provide Products and Services information, respond to your
          inquiries, and otherwise administer our relationship with you.
        </li>
        <li className="list-item">
          To communicate with you about content and Product offerings,
          newsletters, webinars, seminars, and event invitations which are
          relevant to your interests and in line with your preferences.
        </li>
        <li className="list-item">
          To provide inquirers with support via email or by telephone, including
          recording conversations for monitoring, training, and quality
          purposes.
        </li>
        <li className="list-item">To process and respond to complaints.</li>
        <li className="list-item">
          To monitor and record information relating to the use of our Products
          and Services, including our website.
        </li>
        <li className="list-item">
          To remarket, target, and retarget content to you about our Products
          and Services.
        </li>
        <li className="list-item">
          To verify compliance with the Terms of Use, license, subscription
          agreement, or other agreement governing the use of the website or our
          Products and Services.
        </li>
        <li className="list-item">
          To conduct human resource administration to include assessing
          suitability, eligibility, and/or fitness to work.
        </li>
        <li className="list-item">To send you non-marketing commercial communications.</li>
        <li className="list-item">
          To send you marketing communications relating to our business or the
          businesses of carefully-selected third parties, which Agaram thinks
          may be of interest to you, by post or, where you have specifically
          agreed to this, by email or similar technology (you can inform us at
          any time if you no longer require marketing communications).
        </li>
        <li className="list-item">
          To provide third parties with statistical information about our users
          (but those third parties will not be able to identify any individual
          user from that information).
        </li>
        <li className="list-item">To keep agaramtech.com secure and prevent fraud.</li>
        <li className="list-item">
          To verify compliance with the terms and conditions governing the use
          of agaramtech.com (including monitoring private messages sent through
          www.agaramtech.com private messaging service).
        </li>
      </ul>
      <br />
      <p>
        3.3 If you submit personal information for publication or testimonials
        on www.agaramtech.com, Agaram will publish and otherwise use that
        information in accordance with the license or permission you grant to
        us.
      </p>
      <p>
        3.4 Agaram will not, without your express consent, supply your personal
        information to any third party for the purpose of their or any other
        third party’s direct marketing.
      </p>
                     
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab4">
                    <h5>4. Disclosing personal information</h5>
      
      <p>
        4.1 Agaram may disclose your personal information to any of our
        employees, officers, insurers, professional advisers, agents, suppliers,
        or subcontractors insofar as reasonably necessary for the purposes set
        out in this policy.
      </p>
      <p>
        4.2 Agaram may disclose your personal information to any member of our
        subsidiaries, insofar as reasonably necessary for the purposes set out
        in this policy.
      </p>
      <p>4.3 Agaram may disclose your personal information:</p>
      <ul className="dark-check-list">
        <li className="list-item">
          to the extent that Agaram is required to do so by law
        </li>
        <li className="list-item">
          in connection with any ongoing or prospective legal proceedings
        </li>
        <li className="list-item">
          in order to establish, exercise, or defend our legal rights (including
          providing information to others for the purposes of fraud prevention
          and reducing credit risk)
        </li>
        <li className="list-item">
          to the purchaser (or prospective purchaser) of any business or asset
          that Agaram is (or are contemplating) selling
        </li>
        <li className="list-item">
          to any person who Agaram reasonably believes may apply to a court or
          other competent authority for disclosure of that personal information
          where, in our reasonable opinion, such court or authority would be
          reasonably likely to order disclosure of that personal information.
        </li>
      </ul>
      <br />
      <p>
        4.4 Except as provided in this policy, Agaram will not provide your
        personal information to third parties.
      </p>                
      
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab5">
                    <h5>5. International data transfers</h5>
		   <p>5.1  Information that Agaram collects may be stored and transferred between any of the countries in which Agaram or its subsidiaries operate in order to enable us to use the information in accordance with this policy.</p>
		   <p>5.2  Agaram will handle such personal data in accordance with this privacy policy with utmost care regardless of where your personal data is stored/accessed</p>
		   <p>5.3  Personal information that you publish on www.agaramtech.com or submit for publication or testimonials on www.agaramtech.com may be available, via the internet, around the world. Agaram cannot prevent the use or misuse of such information by others.</p>
		   <p>5.4  You expressly agree to the transfers of personal information described in this Section 5.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab6">
                    <h5>6. Retaining personal information</h5>
                      <p>6.1 This Section 6 sets out our data retention policies and procedure, which are designed to help ensure that Agaram Technologies (Private) Limited comply with our legal obligations in relation to the retention and deletion of personal information.</p>
                      <p>6.2 Personal information that Agaram Technologies (Private) Limited process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes.</p>
                      
                      <p>6.3 Without prejudice to Section 6.2, Agaram Technologies (Private) Limited will usually delete personal data falling within the categories set out below at the date/time set out below</p>
                      <p>6.4 Notwithstanding the other provisions of this Section 6, Agaram Technologies (Private) Limited will retain documents (including electronic documents) containing personal data:
                      </p>
                      <ul className="dark-check-list">
                      <li className="list-item">to the extent that Agaram Technologies (Private) Limited is required to do so by law</li>

                      <li className="list-item">if Agaram Technologies (Private) Limited believe that the documents may be relevant to any on-going or prospective legal proceedings and</li>

                      <li className="list-item">in order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk).</li>										
										</ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab7">
                    <h5>7. Security of your personal information</h5>
		              <p>7.1 Agaram will take reasonable technical and organizational precautions to prevent the loss, misuse or alteration of your personal information.</p>

		           <p>7.2 Agaram will store all the personal information you provide on our secure (password- and firewall-protected) servers with encryption.

             </p>
		   
		   <p>7.3 Agaram takes all precautionary steps to secure our Internet Services; however, the confidentiality of information transmitted over the Internet cannot be guaranteed. You must acknowledge that the risk of transmission of information over the internet is inherently insecure.</p>
		   <p>7.4 We urge you to exercise caution when transmitting personal information over the Internet, especially personal information related to your health.</p>
		   <p>7.5 Agaram cannot guarantee that unauthorized third parties will not gain access to your information; therefore, when submitting personal information to Abbott websites or apps, you must weigh both the benefits and the risks.</p>
		   <p>7.6 Agaram website or apps may link to third-party websites that are not controlled by Agaram or subject to an Agaram privacy policy. You should check the privacy policies of such third-party websites before submitting personal information.

       </p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab8">
                    <h5>8. Amendments</h5>
		   <p>8.1 Agaram may update this policy from time to time by publishing a new version on www.agaramtech.com.

</p>
		   <p>8.2 You should check this page periodically to ensure you are satisfied with any changes to this policy.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab9">
                    <h5>9. Your rights</h5>
		   <p>9.1 Agaram may withhold personal information that you request to the extent permitted by law.</p>
		   <p>
9.2 You may instruct us at any time not to process your personal information for marketing purposes.
</p>
		   
		   <p>9.3 In practice, you will usually either expressly agree in advance to our use of your personal information for marketing purposes, or Agaram will provide you with an opportunity to opt out of the use of your personal information for marketing purposes.</p>

	
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab10">
                    <h5>10. Privacy Rights for the European Union Countries</h5>
		   <p>If you are in any of the European Union countries, you have certain data protection rights under the General Data Protection Regulation (GDPR); these include the following:</p>
		   <b>Your right to be informed:</b>
		   <p>This Privacy Policy, together with our Cookie Policy, tells you about the ways in which we use your personal information (which is referred to as “Personal Data” in the GDPR).</p>
		   
		   <b>Your right of access:</b>
		   <p>You have the right to ask us for copies of your personal information. There are some exemptions and limitations in what we can provide in response to such requests, which means you may not always receive all the personal information we process. We will inform you if any exemption or limitation applies and what its impact is.</p>
		     <b>Your right to correction:</b>
		   <p>You have the right to ask us to correct personal information you think is inaccurate. You also have the right to ask us to complete your personal information you think is incomplete.</p>
		     <b>Your right to erasure:</b>
		   <p>You have the right to ask us to erase your personal information in certain circumstances. Where it is appropriate that we comply, your request will be fully actioned within 30 days. Please note that we may not always be able to remove your personal information from ongoing or completed research studies. We may also retain some account information related to purchase and service history. This enables us to provide ongoing support regarding prior purchases and services, and is also necessary for accounting, audit and compliance purposes. We may also retain limited backup copies and archival files of your personal information to satisfy our state and federal legal obligations or regulatory requirements, including those set by the Clinical Laboratory Improvement Amendments (CLIA).</p>
		   
		   <b>Your right to restriction of processing:</b>
		   <p>You have the right to ask us to restrict the processing of your personal information in certain circumstances. For example, you can request that we limit the way in which we use your “Personal Data” (as defined by the GDPR) if you are concerned about the accuracy of the data or how it is being used.</p>
		   <b>Your right to object to processing:

</b>
		   <p>You have the right to object to processing of your personal information in certain circumstances. Where it is appropriate that we comply with your request, we will stop processing your information for the use you have objected to.

</p>
		   
		   <b>Your right to data portability:</b>
		   <p>You have the right to receive your personal information which you have provided to us. You also have the right to have us send your personal information to another organization where our lawful basis for the processing is your consent, or where the processing is necessary for the performance of an agreement and the processing is carried out by automated means.

</p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab11">
                      <h5>11. About Cookies</h5>
                    <br />

                    <p><strong>11.1 Cookie definitions</strong></p>
                    <p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your device, which is like computer memory.</p>
                    <p><strong>First and third-party cookies: </strong></p>
                    <p>whether a cookie is ‘first’ or ‘third’ party refers to the domain placing the cookie.</p>
                    <p>i. First-party cookies are those set by a website that is being visited by the user at the time (e.g. cookies placed by our website domain).</p>
                    <p>ii. Third-party cookies are cookies that are set by a domain other than that of the website being visited by the user. If a user visits a website and another entity sets a cookie through that website, this would be a third-party cookie.</p>
                    <p><strong>Persistent cookies:</strong> these cookies remain on a user’s device for the period of time specified in the cookie. They are activated each time that the user visits the website that created that particular cookie.</p>
                    <p><strong>Session cookies: </strong> these cookies allow website operators to link the actions of a user during a browser session. A browser session starts when a user opens the browser window and finishes when they close the browser window. Session cookies are created temporarily. Once you close the browser, all session cookies are deleted.</p>
                    
                    <p><strong>11.2 What cookies do we use and why?</strong></p>
                    <p>Generally, the website uses cookies to distinguish you from other users of the website. This helps us to provide you with a good experience when you browse the website and also allows us to improve it. The cookies we may use on the website may be categorized as follows:</p>
                    <p>i. Strictly necessary</p>
                    <p>ii. Performance</p>
                    <p>iii. Functionality</p>
                    <p>iv. Targeting</p>
                    <p>Some cookies may fulfill more than one of these purposes.</p>
                    
                    <p><strong>Strictly Necessary cookies</strong> let you move around the website and use essential features like secure areas. Without these cookies, we cannot provide the requested services.</p>
                    <p><strong>We use these Strictly Necessary cookies to:</strong></p>
                    <ul>
                      <li>Identify you as being logged in to the website and to authenticate you</li>
                      <li>Make sure you connect to the right service on the website when we make any changes to the way it works</li>
                      <li>For security purposes</li>
                      <li>Make sure you connect to the right service on the website when we make any changes to the way it works</li>
                    </ul>
                    
                    <p>If you prevent these cookies, we can’t guarantee how the website or the security on the website will perform during your visit.</p>
                    
                    <p><strong>Performance cookies</strong> collect information about how you use the website, e.g., which pages you visit, and if you experience any errors. These cookies do not collect any information that could identify you and are only used to help us improve how the website works, understand the interests of our users and measure the effectiveness of our advertising.</p>
                    <p><strong>We use performance cookies to:</strong></p>
                    <ul>
                      <li>Carry out web analytics: Provide statistics on how the website is used.</li>
                      <li>Perform affiliate tracking: Provide feedback to affiliated entities that one of our visitors also visited their site.</li>
                      <li>Obtain data on the number of users of the website that have viewed a product or service.</li>
                      <li>Help us improve the website by measuring any errors that occur.</li>
                      <li>Test different designs for the website</li>
                    </ul>
                    
                    <p>Some of our performance cookies are managed for us by third parties. ‘Functionality’ cookies are used to provide services or to remember settings to improve your visit. We use ‘Functionality’ cookies for such purposes as:</p>
                    <ul>
                      <li>Remember settings you’ve applied such as layout, text size, preferences, and colors</li>
                      <li>Remember if we’ve already asked you if you want to fill in a survey</li>
                      <li>Remember if you have engaged with a specific component or list on the website so that it won’t repeat</li>
                      <li>Show you when you’re logged in to the website</li>
                      <li>To provide and show embedded video content</li>
                    </ul>
                    
                    <p>Some of these cookies are managed for us by third parties.</p>
                    
                    <p><strong>Targeting cookies</strong> are used to track your visit to the website, as well other websites, apps, and online services, including the pages you have visited and the links you have followed, which allows us to display targeted ads to you on the website.</p>
                    <p><strong>We may use targeting cookies to:</strong></p>
                    <ul>
                      <li>Display targeted ads within the website.</li>
                      <li>Improve how we deliver personalized ads and content, and to measure the success of ad campaigns on the website.</li>
                    </ul>
                    
                    <p><strong>11.3. When do we require your consent</strong></p>
                    <p>All cookies require your consent.</p>
                    <p>We request your consent before placing them on your device. You can give your consent by clicking on the appropriate button on the banner displayed to you. If you do not wish to give consent or wish to withdraw your consent to any cookies at any time, you will need to delete, block, or disable cookies via your browser settings. Please note that disabling these cookies will affect the functionality of the website and may prevent you from being able to access certain features on the website.</p>
                    
                    <p><strong>11.4. How to delete and block our cookies</strong></p>
                    <p>Most web browsers allow some control of most cookies through the browser settings. However, if you use your browser settings to block all cookies (including strictly necessary cookies), you may not be able to access all or parts of the website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies as soon as you visit the website.</p>
                    
                    <p><strong>Changing your Cookie Settings.</strong> The browser settings for changing your cookies settings are usually found in the ‘options’ or ‘preferences’ menu of your internet browser. For more information on how to control cookies, check your browser or device’s settings for how you can control or reject cookies, or visit the following links:</p>
                    
                    <ul>
                      <li><strong>Apple Safari</strong></li>
                      <li><strong>Google Chrome</strong></li>
                      <li><strong>Microsoft Edge</strong></li>
                      <li><strong>Microsoft Internet Explorer</strong></li>
                      <li><strong>Mozilla Firefox</strong></li>
                      <li><strong>Opera</strong></li>
                      <li><strong>Android (Chrome)</strong></li>
                      <li><strong>Blackberry</strong></li>
                      <li><strong>iPhone or iPad (Chrome)</strong></li>
                      <li><strong>iPhone or iPad (Safari)</strong></li>
                    </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab12">
                    <h5>12. Updating information</h5>
		                <p>12.1 Please let us know if the personal information that Agaram holds about you needs to be corrected or updated.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab13">
                    <h5>13. Our details</h5>
		   <p>13.1 This website is owned and operated by Agaram Technologies (Private) Limited</p>
		   <p>13.2 Our principal place of business is at Chennai, India</p>
		   
		   <p>13.3 You can contact us by writing to the business address given above, by using www.agaramtech.com contact form, by email to info@agaramtech.com or by telephone +91 44 4208 2005</p>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
      <div className="cont backgr_col calender_cont">
      <div className="Devepoe_space">
        <div className="Devepoe_space">
                  <div className="">
                    <div className='container tab2 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 l_height15">Digitize. Simplify. Organize</h3>
                              <p className='Ensure-sub-bl'>Accelerate GxP lab processes</p>
                              <div className="d-flex action_btn justify-content-center align-items-center mt-4"> 
                                        <Link href="/solution" className="btn btn--blue mx-4">Explore Solutions</Link>         
                                        <Link href="/" className="btn btn--blue ">Compare Plans</Link> 
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
        </div>
      <Moreproduct/>
      <Footer/>
    </div>
  )
}

export default TermsConditions;