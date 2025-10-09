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
          <div className='about-us terms-conditions'>
     <div className="soltionbg security_banner_content ">
          <div className="container">
              <div className="row">
                <div className="col-lg-12  d-flex d-flex justify-content-center pt-4">
                  <div className="solution_security_banner_content bannerresolution text-center">
                    <h1 className="wow fadeInUp pt-3" data-wow-delay="0.3s">
                    Terms and Conditions
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
              THIS GENERAL TERMS OF SERVICE DESCRIBES AN AGREEMENT BETWEEN YOU
              OR THE ENTITY OR THE ORGANIZATION THAT YOU REPRESENT (hereinafter
              “You” or “Your”) AND AGARAM TECHNOLOGIES PRIVATE LIMITED
              (hereinafter “AGARAM”) GOVERNING YOUR USE OF ANY OF AGARAM’S
              LABORATORY INFORMATION MANAGEMENT SOFTWARE PRODUCTS AND RELATED
              SERVICES.
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
                      <h5>1.Contents of this Agreement</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab2">
                      <h5>2.Acceptance of the Terms</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab3">
                      <h5>3.Description of Products and Services</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab4">
                      <h5>4.Fees and Payments</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab5">
                      <h5>
                        5. Subscription to No-charge or Beta Product and Service
                      </h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab6">
                      <h5>6. Amendment of Terms of Service </h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab7">
                      <h5>7. Advanced Custom Fields PRO</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab8">
                      <h5>8. Software Terms</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab9">
                      <h5>9. Hosted Services Terms</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab10">
                      <h5>10. Personal Information and Privacy</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab11">
                      <h5>11. Communications from AGARAM</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab12">
                      <h5>12. Complaints</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab13">
                      <h5>13. Restrictions on Use</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab14">
                      <h5>14. Products Ownership</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab15">
                      <h5>15. Feedback about Products</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab16">
                      <h5>16. Spamming and Illegal Activities</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab17">
                      <h5>17. Inactive User Accounts Policy</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab18">
                      <h5>18. Data Ownership</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab19">
                      <h5>19. User Generated Conten</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab20">
                      <h5>20. Confidentiality</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab21">
                      <h5>21. Sample files and Applications</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab22">
                      <h5>22. Copyrights and Trademark</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab23">
                      <h5>23. Warranty Disclaim</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab24">
                      <h5>24. Indemnification</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab25">
                      <h5>25. Arbitration and Dispute Resolution</h5>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link className="nav-link" eventKey="#tab26">
                      <h5>26. Suspension and Termination</h5>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <div className="tab-content software_service_tab_content">
                  <Tab.Content>
                    <Tab.Pane eventKey="#tab1">
                      <p>
                        This Agreement consists of the following terms and
                        conditions (hereinafter the “General Terms”) and terms
                        and conditions, if any, specific to the use of
                        individual Product and Services (hereinafter the
                        “Product and Service Specific Terms”). The General Terms
                        and Software Product Specific End-user License Agreement
                        Terms are collectively referred to as the “Terms”. In
                        the event of a conflict between the General Terms and
                        End-user License Agreement Terms of a specific Software
                        product, the latter Terms shall prevail.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab2">
                      <p>
                        As an individual user or a representative of an
                        organization or Entity, you must be of legal age and
                        other applicable legal requirements to enter into a
                        binding agreement in order to accept the Terms. You can
                        accept the Terms by checking a checkbox or clicking on a
                        button indicating your acceptance of the terms or by
                        actually using the Software Product and related
                        Services.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab3">
                      <p>
                        We, at AGARAM, provide a suite of Laboratory Information
                        Management System Software Products including Qualis
                        LIMS, Logilab ELN, Logilab SDMS, Interfacer, etc.
                        (“Software”, “Softwares”, “Product” or “Products”). You
                        may use the Products and related Services i.e.,
                        Software-as-a-Service (“SaaS” or “Services”) for your
                        personal and business use or for internal business
                        purpose in the organization that you represent. You may
                        connect to the Services using any industry standard
                        Internet browser supported by the Services. You are
                        responsible for obtaining access to the Internet and the
                        equipment necessary to use the Services. You can create
                        and edit content with your user account and if you
                        choose to do so, you can publish and share such content.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab4">
                      <p>
                        The Product and Services are available under
                        subscription plans of various durations. Payments for
                        subscription plans of duration of less than a year can
                        be made by Bank Transferor Wire-transfer to our Account.
                        Your subscription will be automatically renewed at the
                        end of each subscription period unless you downgrade
                        your paid subscription plan to a free plan or inform us
                        that you do not wish to renew the subscription. At the
                        end of the billing cycle, an invoice will be generated
                        and communicated via email.
                      </p>
                      <p>
                        The Invoice amount must be paid within 30 days for a
                        monthly subscription, and within 45 days for an annual
                        subscription. Failure to pay the invoice amount will
                        result in suspension of Logilab ELN cloud service.
                      </p>
                      <br />
                      <b>
                        Please<Link href="/company/refundpolicy"> click here</Link> to know
                        about our Refund Policy.
                      </b>

                      <p>
                        From time to time, we may change the price of any
                        Product and Service or charge for use of Services that
                        are currently available free of charge. Any increase in
                        charges will not apply until the expiry of your then
                        current billing cycle. You will not be charged for using
                        any Service unless you have opted for a paid
                        subscription plan.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab5">
                      <p>
                        We may offer certain Services as closed or open beta
                        services (“Beta Product and Service” or “Beta Services”)
                        for the purpose of testing and evaluation as No-Charge
                        ones. You agree that we have the sole authority and
                        discretion to determine the period of time for testing
                        and evaluation of Beta Services. We will be the sole
                        judge of the success of such testing and the decision,
                        if any, to offer the Beta Services as commercial
                        services. You will be under no obligation to acquire a
                        subscription to use any paid Service as a result of your
                        subscription to any Beta Service. We reserve the right
                        to fully or partially discontinue, at any time and from
                        time to time, temporarily or permanently, any of the
                        Beta Services with or without notice to you. You agree
                        that AGARAM will not be liable to you or to any
                        third-party for any harm related to, arising out of, or
                        caused by the modification, suspension or discontinuance
                        of any of the Beta Services for any reason.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab6">
                      <p>
                        We may modify the Terms upon notice to you at any time
                        through a service announcement or by sending email to
                        your primary email address. If we make significant
                        changes to the Terms that affect your rights, you will
                        be provided with at least 30 days advance notice of the
                        changes by email to your primary email address.
                        <br />
                        You may terminate your use of the Services by providing
                        AGARAM notice by email within 30 days of being notified
                        of the availability of the modified Terms if the Terms
                        are modified in a manner that substantially affects your
                        rights in connection with use of the Services. In the
                        event of such termination, you will be entitled to
                        prorated refund of the unused portion of any prepaid
                        fees. Your continued use of the Service after the
                        effective date of any change to the Terms will be deemed
                        to be your agreement to the modified Terms.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab7">
                      <p>
                        Only the designated specific individuals for whom you
                        have paid the required Subscription amount and whom you
                        designate officially (“Authorized Users”) may access and
                        use the Products and Services. Authorized Users may be
                        you or your Affiliates’ employees, representatives,
                        consultants, contractors, agents, or other third parties
                        who are acting for your benefit or on your behalf. You
                        may increase the number of Authorized Users permitted to
                        access your instance of the Product by placing a new
                        order or, in some cases, directly through Agaram portal.
                        In all cases, you must pay the applicable subscription
                        amount for the increased number of Authorized Users.
                      </p>
                      <p>
                        You are responsible for compliance with this Agreement
                        by all Authorized Users. All use of Products and
                        Services by you and your Authorized Users must be within
                        the Scope of Use and solely for the benefit of you or
                        your Partners. “Affiliate” means an entity which,
                        directly or indirectly, owns or controls, is owned or is
                        controlled by or is under common ownership or control
                        with a party, where “control” means the power to direct
                        the management or affairs of an entity, and “ownership”
                        means the beneficial ownership of 50% (or, if the
                        applicable jurisdiction does not allow majority
                        ownership, the maximum amount permitted under such law)
                        or more of the voting equity securities or other
                        equivalent voting interests of the entity.
                      </p>
                      <p>
                        You need to sign up for a user account by providing all
                        required information in order to access or use the
                        Services. If you represent an organization and wish to
                        use the Product and Services for corporate internal use,
                        we recommend that you, and all other users from your
                        organization, sign up for user accounts by providing
                        your corporate contact information. In particular, we
                        recommend that you use your corporate email address.
                      </p>
                      <b>You agree to:</b>
                      <ul>
                        <li>
                          provide true, accurate, current and complete
                          information about yourself as prompted by the signup
                          process; and
                        </li>
                        <li>
                          maintain and promptly update the information provided
                          during sign up to keep it true, accurate, current, and
                          complete.
                        </li>
                      </ul>
                      <p>
                        If you provide any information that is untrue,
                        inaccurate, outdated, or incomplete, or if AGARAM has
                        reasonable grounds to suspect that such information is
                        untrue, inaccurate, outdated, or incomplete, AGARAM may
                        terminate your user account and refuse current or future
                        use of any or all of the Services.
                      </p>
                      <p>
                        AGARAM may prescribe usage limits based on the number of
                        subscription/users purchased by you. You must make sure
                        that your usage is within the usage limits prescribed by
                        AGARAM in order to avail uninterrupted service. You
                        understand that AGARAM may restrict an activity if you
                        reach the usage limit corresponding to such activity.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab8">
                      <p>
                        Subject to the terms and conditions of this Agreement,
                        AGARAM grants you a non-exclusive, non-sublicensable and
                        non-transferable license to use the Software during the
                        applicable Subscription Term in accordance with this
                        Agreement, your applicable Scope of Use, and the
                        Documentation. The subscription term of Software
                        (“Subscription Term”) will be specified in your Order.
                        Your Subscription Term will end upon any termination of
                        this Agreement, even if no expiration date is specified
                        in your Order. The Software requires a log-in
                        credentials in order to operate, which will be delivered
                        as described in the email from AGARAM.
                      </p>
                      <p>
                        Unless otherwise specified in your Order, for Software
                        that you purchase, you get one instance of the Software.
                        <br />
                        The Software may include code and libraries licensed to
                        us by third parties including open-source software.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab9">
                      <b> 9.1 Access to Hosted Services</b>
                      <p>
                        Subject to the terms and conditions of this Agreement,
                        AGARAM grants you a non-exclusive right to access and
                        use the Hosted Services during the applicable
                        Subscription Term (as defined below) in accordance with
                        this Agreement, your applicable Scope of Use and the
                        Documentation. If AGARAM offers client software (e.g., a
                        desktop or mobile application) for any Hosted Service,
                        you may use such software solely with the Hosted
                        Service, subject to the terms and conditions of this
                        Agreement. You acknowledge that our Hosted Services are
                        on-line, subscription-based products and that we may
                        make changes to the Hosted Services from time to time.
                      </p>
                      <b>9.2 Subscription Terms and Renewals</b>
                      <p>
                        Hosted Services are provided on a subscription basis for
                        a set term specified in your Order (“Subscription
                        Term”). Except as otherwise specified in your Order, all
                        subscriptions will automatically renew for periods equal
                        to your initial Subscription Term (and you will be
                        charged at the then-current rates) unless you cancel
                        your subscription through your account. If you cancel,
                        your subscription will terminate at the end of
                        then-current billing cycle, but you will not be entitled
                        to any credits or refunds for amounts accrued or paid
                        prior to such termination.
                      </p>
                      <p>
                        From time to time, we may change the price of any
                        service or charge for use of services that are currently
                        available free of charge. Any increase in charges will
                        not apply until the expiry of your then current billing
                        cycle. You will not be charged for using any service
                        unless you have opted for a paid subscription plan.
                      </p>
                      <b>9.3 Credentials </b>
                      <p>
                        You must ensure that all Authorized Users keep their
                        user IDs and passwords for the Hosted Services strictly
                        confidential and not share such information with any
                        unauthorized person. User IDs are granted to individual,
                        named persons and may not be shared. You are responsible
                        for any and all actions taken using your accounts and
                        passwords, and you agree to immediately notify AGARAM of
                        any unauthorized use of which you become aware.
                      </p>
                      <b>9.4 Inactive User Accounts Policy</b>
                      <p>
                        We reserve the right to terminate unpaid user accounts
                        that are inactive for a continuous period of 30 days. In
                        the event of such termination, all data associated with
                        such user account will be deleted. We will provide you
                        prior notice of such termination and option to back-up
                        your data. The data deletion policy may be implemented
                        with respect to any or all of the Services. Each Service
                        will be considered an independent and separate service
                        for the purpose of calculating the period of inactivity.
                        In other words, activity in one of the Services is not
                        sufficient to keep your user account in another Service
                        active. In case of accounts with more than one user, if
                        at least one of the users is active, the account will
                        not be considered inactive.
                      </p>
                      <b>9.5 Your Data</b>
                      <p>
                        “Your Data” means any data, content, code, video, images
                        or other materials of any type that you upload, submit
                        or otherwise transmit to or through Hosted Services. You
                        will retain all right, title and interest in and to Your
                        Data in the form provided to AGARAM. Subject to the
                        terms of this Agreement, you hereby grant to AGARAM a
                        non-exclusive, worldwide, royalty-free right to (a)
                        collect, use, copy, store, transmit, modify and create
                        derivative works of Your Data, in each case solely to
                        the extent necessary to provide the applicable Hosted
                        Service to you and (b) for Hosted Services that enable
                        you to share Your Data or interact with other people, to
                        distribute and publicly perform and display Your Data as
                        you (or your Authorized Users) direct or enable through
                        the Hosted Service. AGARAM may also access your account
                        or instance in order to respond to your support
                        requests.
                      </p>
                      <b>
                        9.6 Protection of “Protected Health Information” (PHI)
                      </b>
                      <p>
                        You agree to alert AGARAM in writing if you will be
                        using the Services to store or process PHI. To the
                        extent that You do use the Services to store or process
                        PHI, then the terms of the AGARAM Business Associate
                        Agreement will apply to any PHI stored or processed by
                        You using the Services and the terms of the AGARAM
                        Business Associate Agreement are incorporated herein by
                        reference. Upon either Your or AGARAM’s request, both
                        parties will execute a signable version of the AGARAM
                        Business Associate Agreement.
                      </p>
                      <b>9.7 Security</b>
                      <p>
                        AGARAM implements security procedures to help protect
                        Your Data from security attacks. However, you understand
                        that use of the Hosted Services necessarily involves
                        transmission of Your Data over networks that are not
                        owned, operated or controlled by us, and we are not
                        responsible for any of Your Data lost, altered,
                        intercepted or stored across such networks. We cannot
                        guarantee that our security procedures will be
                        error-free, that transmissions of Your Data will always
                        be secure or that unauthorized third parties will never
                        be able to defeat our security measures or those of our
                        third-party service providers.
                      </p>
                      <b>9.8 Storage Limits</b>
                      <p>
                        There may be storage limits associated with a particular
                        Hosted Service. These limits are described in the
                        services descriptions on our websites or in the
                        Documentation for the particular Hosted Service. AGARAM
                        reserves the right to charge for additional storage or
                        overage fees. We may impose new, or may modify existing,
                        storage limits for the Hosted Services at any time at
                        our discretion, with or without notice to you.
                      </p>

                      <b>9.9 Responsibility for Your Data</b>
                      <p>
                        You must ensure that your use of Hosted Services and all
                        Your Data is at all times compliant with our Acceptable
                        Use Policy and all applicable local, state, federal and
                        international laws and regulations (“Laws”). You
                        represent and warrant that:
                      </p>
                      <p>
                        (i) you have obtained all necessary rights, releases and
                        permissions to provide all Your Data to AGARAM and to
                        grant the rights granted to AGARAM in this Agreement and
                      </p>
                      <p>
                        (ii) Your Data and its transfer to and use by AGARAM as
                        authorized by you under this Agreement do not violate
                        any Laws (including without limitation those relating to
                        export control and electronic communications) or rights
                        of any third party, including without limitation any
                        intellectual property rights, rights of privacy, or
                        rights of publicity, and any use, collection and
                        disclosure authorized herein is not inconsistent with
                        the terms of any applicable privacy policies. Other than
                        its security obligations under Section ‘Security’ AGARAM
                        assumes no responsibility or liability for Your Data,
                        and you shall be solely responsible for Your Data and
                        the consequences of using, disclosing, storing, or
                        transmitting it.
                      </p>

                      <b>9.10 Indemnity for Your Data</b>
                      <p>
                        You will defend, indemnify and hold harmless AGARAM from
                        and against any loss, cost, liability or damage,
                        including attorneys’ fees, for which AGARAM becomes
                        liable arising from or relating to any claim relating to
                        Your Data, including but not limited to any claim
                        brought by a third party alleging that Your Data, or
                        your use of the Hosted Services in breach of this
                        Agreement, infringes or misappropriates the intellectual
                        property rights of a third party or violates applicable
                        law. This indemnification obligation is subject to your
                        receiving
                      </p>
                      <p>
                        (i) prompt written notice of such claim (but in any
                        event notice in sufficient time for you to respond
                        without prejudice);
                      </p>
                      <p>
                        (ii) the exclusive right to control and direct the
                        investigation, defense, or settlement of such claim; and
                      </p>

                      <p>
                        (iii) all reasonably necessary cooperation of AGARAM at
                        your expense.
                      </p>
                      <b>9.11 Removals and Suspension </b>
                      <p>
                        AGARAM has no obligation to monitor any content uploaded
                        to the Hosted Services. Nonetheless, if we deem such
                        action necessary based on your violation of this
                        Agreement or in response to takedown requests that we
                        receive following our guidelines for Reporting Copyright
                        and Trademark Violations, we may
                      </p>
                      <p>(i) remove Your Data from the Hosted Services or</p>
                      <p>(ii) suspend your access to the Hosted Services.</p>
                      <p>
                        We will generally alert you when we take such action and
                        give you a reasonable opportunity to cure your breach,
                        but if we determine that your actions endanger the
                        operation of the Hosted Service or other users, we may
                        suspend your access immediately without notice. You will
                        continue to be charged for the Hosted Service during any
                        suspension period. We have no liability to you for
                        removing or deleting Your Data from or suspending your
                        access to any Hosted Services as described in this
                        section.
                      </p>

                      <b>9.12 Deletion at End of Subscription Term</b>
                      <p>
                        We may remove or delete Your Data within a reasonable
                        period of time after the termination of your
                        Subscription Term.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab10">
                      <p>
                        Personal information you provide to AGARAM through the
                        Service is governed by AGARAM Privacy Policy. Your
                        election to use the Service indicates your acceptance of
                        the terms of the AGARAM Privacy Policy. You are
                        responsible for maintaining confidentiality of your
                        username, password and other sensitive information.
                      </p>
                      <p>
                        You are responsible for all activities that occur in
                        your user account and you agree to inform us immediately
                        of any unauthorized use of your user account by email to
                        accounts@agaramtech.com or by calling us on any of the
                        numbers listed on <a href="contant"></a>Logilab Eln. We
                        are not responsible for any loss or damage to you or to
                        any third party incurred as a result of any unauthorized
                        access and/or use of your user account, or otherwise.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab11">
                      <p>
                        The Product and Service may include certain
                        communications from AGARAM, such as product and service
                        announcements, administrative messages and newsletters.
                        You understand that these communications shall be
                        considered part of using the Services. As part of our
                        policy to provide you total privacy, we also provide you
                        the option of opting out from receiving newsletters from
                        us. However, you will not be able to opt-out or
                        unsubscribe from receiving service announcements and
                        administrative messages.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab12">
                      <p>
                        If we receive a complaint from any person against you
                        with respect to your activities as part of use of the
                        Product and Services, we will forward the complaint to
                        the primary email address of your user account. You must
                        respond to the complainant directly within 10 days of
                        receiving the complaint forwarded by us and copy AGARAM
                        in the communication. If you do not respond to the
                        complainant within 10 days from the date of our email to
                        you, we may disclose your name and contact information
                        to the complainant for enabling the complainant to take
                        legal action against you. You understand that your
                        failure to respond to the forwarded complaint within the
                        10 days’ time limit will be construed as your consent to
                        disclosure of your name and contact information by
                        AGARAM to the complainant.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab13">
                      <p>
                        In addition to all other terms and conditions of this
                        Agreement, you shall not:{" "}
                      </p>
                      <ul>
                        <li>
                          rent, lease, reproduce, modify, adapt, create
                          derivative works of, distribute, sell, sublicense,
                          transfer, or provide access to the Subscription Plan
                          of Services or otherwise make it available to any
                          third party;
                        </li>

                        <li>
                          provide any other service to any third-party based on
                          the Services without prior written permission;
                        </li>

                        <li>
                          interfere with any log-in mechanism in the Products or
                          otherwise circumvent mechanisms in the Products
                          intended to limit your use
                        </li>

                        <li>
                          reverse engineer, disassemble, decompile, translate,
                          or otherwise seek to obtain or derive the source code,
                          underlying ideas, algorithms, file formats or
                          non-public APIs to any Products, except as permitted
                          by law
                        </li>

                        <li>
                          use the third-party links to sites without agreeing to
                          their website terms &amp; conditions;
                        </li>

                        <li>
                          post links to third party sites or use their logo,
                          company name, etc. without their prior written
                          permission;
                        </li>

                        <li>
                          publish any personal or confidential information
                          belonging to any person or entity without obtaining
                          consent from such person or entity;
                        </li>
                        <li>
                          use the Services in any manner that could damage,
                          disable, overburden, impair or harm any server,
                          network, computer system, resource of AGARAM;
                        </li>

                        <li>
                          remove or obscure any proprietary or other notices
                          contained in any Product
                        </li>
                        <li>
                          violate any applicable local, state, national or
                          international law; and
                        </li>
                        <li>
                          create a false identity to mislead any person as to
                          the identity or origin of any communication
                        </li>
                        <li>
                          publicly disseminate information regarding the
                          performance of the Products
                        </li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab14">
                      <p>
                        Products are made available on an access basis, and no
                        ownership right is conveyed to you, irrespective of the
                        use of terms such as “purchase” or “sale”. AGARAM and
                        its licensors have and retain all right, title and
                        interest, including all intellectual property rights, in
                        and to the Products (including all No-Charge Products),
                        their “look and feel”, any and all related or underlying
                        technology, and any modifications or derivative works of
                        the foregoing created by or for AGARAM, including
                        without limitation as they may incorporate Feedback
                        (“AGARAM’s Technology”).
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab15">
                      <p>
                        From time to time, you may choose to submit comments,
                        information, questions, data, ideas, description of
                        processes, or other information to AGARAM, including
                        sharing Your Modifications or in the course of receiving
                        Support and Maintenance (“Feedback”). AGARAM may in
                        connection with any of its products or services freely
                        use, copy, disclose, license, distribute and exploit any
                        Feedback in any manner without any obligation, royalty
                        or restriction based on intellectual property rights or
                        otherwise. No Feedback will be considered your
                        Confidential Information, and nothing in this Agreement
                        limits AGARAM’s right to independently use, develop,
                        evaluate, or market products, whether incorporating
                        Feedback or otherwise.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab16">
                      <p>
                        You agree to be solely responsible for the contents of
                        your transmissions through the Services. You agree not
                        to use the Services for illegal purposes or for the
                        transmission of material that is unlawful, defamatory,
                        harassing, libelous, invasive of another’s privacy,
                        abusive, threatening, harmful, vulgar, pornographic,
                        obscene, or is otherwise objectionable, offends
                        religious sentiments, promotes racism, contains viruses
                        or malicious code, or that which infringes or may
                        infringe intellectual property or other rights of
                        another. You agree not to use the Services for the
                        transmission of “junk mail”, “spam”, “chain letters”,
                        “phishing” or unsolicited mass distribution of email. We
                        reserve the right to terminate your access to the
                        Services if there are reasonable grounds to believe that
                        you have used the Services for any illegal or
                        unauthorized activity.{" "}
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab17">
                      <p>
                        From time to time, we may change the price of any
                        Product and Service or charge for use of Services that
                        are currently available free of charge. Any increase in
                        charges will not apply until the expiry of your then
                        current billing cycle. You will not be charged for using
                        any Service unless you have opted for a paid
                        subscription plan.
                      </p>
                      <p>
                        The data deletion policy may be implemented with respect
                        to any or all of the Services. Each Service will be
                        considered an independent and separate service for the
                        purpose of calculating the period of inactivity. In
                        other words, activity in one of the Services is not
                        sufficient to keep your user account in another Service
                        active. In case of accounts with more than one user, if
                        at least one of the users is active, the account will
                        not be considered inactive.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab18">
                      <p>
                        We respect your right to ownership of content created or
                        stored by you. You own the content created or stored by
                        you. Unless specifically permitted by you, your use of
                        the Services does not grant AGARAM the license to use,
                        reproduce, adapt, modify, publish, or distribute the
                        content created by you or stored in your user account
                        for AGARAM’s commercial, marketing or any similar
                        purpose. But you grant AGARAM permission to access,
                        copy, distribute, store, transmit, reformat, publicly
                        display, and publicly perform the content of your user
                        account solely as required for the purpose of providing
                        the Services to you
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab19">
                      <p>
                        You may transmit or publish content created by you using
                        any of the Product and Services or otherwise. However,
                        you shall be solely responsible for such content and the
                        consequences of its transmission or publication. Any
                        content made public will be publicly accessible through
                        the internet and may be crawled and indexed by search
                        engines. You are responsible for ensuring that you do
                        not accidentally make any private content publicly
                        available.
                      </p>

                      <p>
                        Any content that you may receive from other users of the
                        Services, is provided to you AS IS for your information
                        and personal use only and you agree not to use, copy,
                        reproduce, distribute, transmit, broadcast, display,
                        sell, license or otherwise exploit such content for any
                        purpose, without the express written consent of the
                        person who owns the rights to such content. In the
                        course of using any of the Services, if you come across
                        any content with copyright notice(s) or any copy
                        protection feature(s), you agree not to remove such
                        copyright notice(s) or disable such copy protection
                        feature(s) as the case may be.
                      </p>
                      <p>
                        By making any copyrighted/copyrightable content
                        available on any of the Services you affirm that you
                        have the consent, authorization or permission, as the
                        case may be from every person who may claim any rights
                        in such content to make such content available in such
                        manner. Further, by making any content available in the
                        manner aforementioned, you expressly agree that AGARAM
                        will have the right to block access to or remove such
                        content made available by you if AGARAM receives
                        complaints concerning any illegality or infringement of
                        third-party rights in such content.
                      </p>
                      <p>
                        By using any of the Services and transmitting or
                        publishing any content using such Product and Service,
                        you expressly consent to determination of questions of
                        illegality or infringement of third-party rights in such
                        content by the agent designated by AGARAM for this
                        purpose.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab20">
                      <p>
                        Except as otherwise set forth in this Agreement, each
                        party agrees that all code, inventions, know-how,
                        business, technical and financial information disclosed
                        to such party (“Receiving Party”) by the disclosing
                        party (“Disclosing Party”) constitute the confidential
                        property of the Disclosing Party (“Confidential
                        Information”), provided that it is identified as
                        confidential at the time of disclosure.
                      </p>
                      <p>
                        Any Technology of AGARAM and any performance information
                        relating to the Products shall be deemed Confidential
                        Information of AGARAM without any marking or further
                        designation. Except as expressly authorized herein, the
                        Receiving Party will hold in confidence and not use or
                        disclose any Confidential Information.
                      </p>
                      <p>
                        The Receiving Party’s non-disclosure obligation shall
                        not apply to information which the Receiving Party can
                        document:
                      </p>
                      <p>
                        (i) was rightfully in its possession or known to it
                        prior to receipt of the Confidential Information;
                      </p>
                      <p>
                        (ii) is or has become public knowledge through no fault
                        of the Receiving Party;
                      </p>
                      <p>
                        (iii) is rightfully obtained by the Receiving Party from
                        a third party without breach of any confidentiality
                        obligation; or
                      </p>
                      <p>
                        (iv) is independently developed by employees of the
                        Receiving Party who had no access to such information.
                      </p>
                      <p>
                        The Receiving Party may also disclose Confidential
                        Information if so required pursuant to a regulation, law
                        or court order (but only to the minimum extent required
                        to comply with such regulation or order and with advance
                        notice to the Disclosing Party).
                      </p>
                      <p>
                        The Receiving Party acknowledges that disclosure of
                        Confidential Information would cause substantial harm
                        for which damages alone would not be a sufficient
                        remedy, and therefore that upon any such disclosure by
                        the Receiving Party the Disclosing Party shall be
                        entitled to appropriate equitable relief in addition to
                        whatever other remedies it might have at law. For the
                        avoidance of doubt, this Section shall not operate as a
                        separate warranty with respect to the operation of any
                        Product.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab21">
                      <p>
                        AGARAM may provide sample files and applications for the
                        purpose of demonstrating the possibility of using the
                        Services effectively for specific purposes. The
                        information contained in any such sample files and
                        applications consists of random data. AGARAM makes no
                        warranty, either express or implied, as to the accuracy,
                        usefulness, completeness or reliability of the
                        information or the sample files and applications.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab22">
                      <p>
                        AGARAM, AGARAM logo, the names of individual Software
                        Product and Services and their logos are trademarks of
                        AGARAM TECHNOLOGIES PRIVATE LIMITED. You agree not to
                        display or use, in any manner, the AGARAM trademarks,
                        without AGARAM’s prior permission.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab23">
                      <p>
                        You Expressly Understand And Agree That The Use Of The
                        Services Is At Your Sole Risk. The Services Are Provided
                        On An As-is-and-as-available Basis. Agaram Expressly
                        Disclaims All Warranties Of Any Kind, Whether Express Or
                        Implied, Including, But Not Limited To, The Implied
                        Warranties Of Merchantability And Fitness For A
                        Particular Purpose. Agaram Makes No Warranty That The
                        Services Will Be Uninterrupted, Timely, Secure, Or Error
                        Free.
                      </p>
                      <p>
                        Use Of Any Material Downloaded Or Obtained Through The
                        Use Of The Services Shall Be At Your Own Discretion And
                        Risk And You Will Be Solely Responsible For Any Damage
                        To Your Computer System, Mobile Telephone, Wireless
                        Device Or Data That Results From The Use Of The Services
                        Or The Download Of Any Such Material. No Advice Or
                        Information, Whether Written Or Oral, Obtained By You
                        From Agaram, Its Employees Or Representatives Shall
                        Create Any Warranty Not Expressly Stated In The Terms.
                      </p>
                      <b>Limitation Of Liability</b>
                      <p>
                        You Agree That Agaram Shall, In No Event, Be Liable For
                        Any Consequential, Incidental, Indirect, Special,
                        Punitive, Or Other Loss Or Damage Whatsoever Or For Loss
                        Of Business Profits, Computer Failure, Loss Of Business
                        Information, Or Other Loss Arising Out Of Or Caused By
                        Your Use Of Or Inability To Use The Service, Even If
                        Agaram Has Been Advised Of The Possibility Of Such
                        Damage. In No Event Shall Agaram’s Entire Liability To
                        You In Respect Of Any Service, Whether Direct Or
                        Indirect, Exceed The Fees Paid By You Towards Such
                        Service.
                      </p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#tab24">
                      <p>
                        You agree to indemnify and hold harmless AGARAM, its
                        Managers, Directors, Employees, Suppliers, and Partners,
                        from and against any losses, damages, fines and expenses
                        (including attorney’s fees and costs) arising out of or
                        relating to any claims that you have used the Services
                        in violation of another party’s rights, in violation of
                        any law, in violations of any provisions of the Terms,
                        or any other claim related to your use of the Services,
                        except where such use is authorized by AGARAM.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab25">
                      <p>
                        Any controversy or claim arising out of or relating to
                        the Terms shall be settled by binding arbitration in
                        accordance with the commercial arbitration rules of the
                        respective country. Any such controversy or claim shall
                        be arbitrated on an individual basis and shall not be
                        consolidated in any arbitration with any claim or
                        controversy of any other party. The decision of the
                        arbitrator shall be final and unappealable. The
                        arbitration shall be conducted in the respective country
                        and judgment on the arbitration award may be entered
                        into any court having jurisdiction thereof.
                        Notwithstanding anything to the contrary, AGARAM may at
                        any time seek injunctions or other forms of equitable
                        relief from any court of competent jurisdiction.
                      </p>
                      <p>
                        All negotiations and arbitration proceedings pursuant to
                        this Section will be confidential and treated as
                        compromise and settlement negotiations for purposes of
                        all similar rules and codes of evidence of applicable
                        legislation and jurisdictions. The language of the
                        arbitration shall be English.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#tab26">
                      <p>
                        We may suspend your user account or temporarily disable
                        access to whole or part of any Service in the event of
                        any suspected illegal activity, extended periods of
                        inactivity or requests by law enforcement or other
                        government agencies. Objections to suspension or
                        disabling of user accounts should be made to{" "}
                        <a href="mailto:info@agaramtech.com">
                          info@agaramtech.com
                        </a>{" "}
                        within thirty days of being notified about the
                        suspension. We may terminate a suspended or disabled
                        user account after thirty days. We will also terminate
                        your user account on your request.
                      </p>
                      <p>
                        In addition, we reserve the right to terminate your user
                        account and deny the Services upon reasonable belief
                        that you have violated the Terms and to terminate your
                        access to any Beta Service in case of unexpected
                        technical issues or discontinuation of the Beta Service.
                        You have the right to terminate your user account if
                        AGARAM breaches its obligations under these Terms and in
                        such event, you will be entitled to prorated refund of
                        any prepaid fees. Termination of user account will
                        include denial of access to all Services, deletion of
                        information in your user account such as your email
                        address and password and deletion of all data in your
                        user account.
                      </p>
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
                    <div className='container tab2 mt_110 py-5'>
                      <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                          <div className=" text-center logpositionchange">
                              <h3 className="Ensure mt-3 f_800 l_height15">Digitize. Simplify. Organize.</h3>
                              <p className='Ensure-sub-bl'>Accelerate GxP lab processes</p>
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
        </div>
      <Moreproduct/>
      <Footer/>
    </div>
  )
}

export default TermsConditions;