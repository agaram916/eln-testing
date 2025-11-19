'use client'
import Link from 'next/link'
import Image from "next/image";
import '../resposive.css'
import Header from "@/components/header";
import home_banner_image from '../../../eln/public/assets/images/home/home_banner_image.svg'
import perfect_start from '../../../eln/public/assets/images/home/perfect_og.svg'
import perfect_start_mobile from '../../../eln/public/assets/images/home/perfect_start_mobile.svg'  
import perfect_start_two from '../../../eln/public/assets/images/home/perfect_og_two.svg'    
import perfect_start_three from '../../../eln/public/assets/images/home/perfect_og_three.svg'  
import testing_one from '../../../eln/public/assets/images/home/testing_one.svg'
import testing_two from '../../../eln/public/assets/images/home/testing_two.svg'  
import testing_three from '../../../eln/public/assets/images/home/testing_threeg.svg'
import testing_three_mobile from '../../../eln/public/assets/images/home/testing_three-mobile.svg'    
import up_arrow from '../../../eln/public/assets/images/home/up_arrow.svg'
import down_arrow from '../../../eln/public/assets/images/home/down_arrow.svg'
import capture_data from '../../../eln/public/assets/images/home/capture_data.svg' 
import Design_protocols from '../../../eln/public/assets/images/home/Design_protocols.svg' 
import create_dynamic from '../../../eln/public/assets/images/home/create_dynamic.svg' 
import assign_individual from '../../../eln/public/assets/images/home/assign_individual.svg' 
import Organise from '../../../eln/public/assets/images/home/Organise.svg' 
import Register from '../../../eln/public/assets/images/home/Register.svg' 
import chemical from '../../../eln/public/assets/images/home/chemical.svg' 
import workflows from '../../../eln/public/assets/images/home/workflows.svg' 
import automate_card_one  from '../../../eln/public/assets/images/home/automate_card_one.svg'
import automate_card_two  from '../../../eln/public/assets/images/home/automate_card_two.svg'    
import automate_card_three  from '../../../eln/public/assets/images/home/automate_card_three.svg'
import one_size_splash  from '../../../eln/public/assets/images/home/one_size_splash.svg' 
import learn_more  from '../../../eln/public/assets/images/home/learn_more.svg'
import learn_more_calender  from '../../../eln/public/assets/images/home/learn_more_calender.svg'
import learn_more_downlode  from '../../../eln/public/assets/images/home/learn_more-downlode.svg'
import learn_downlode_black  from '../../../eln/public/assets/images/home/learn_downlode_black.svg'
import learn_downlode_white from '../../../eln/public/assets/images/home/learn_downlode_white.svg'
import capsule_two from '../../../eln/public/assets/images/home/capsule_two.svg'     
import Sliders from '@/components/slider'; 
import loglab_Eln from '../../public/assets/images/loglab_Eln_new.svg'
import Slide from '@/components/slide';
import Footer from '../footer';
import TrustedBy from '@/components/slide';

export default function Solution() {
  return ( 
    <>                                          
       <Header  whiteHeader/>
      <div className='banner-home'>
        <div className='container'>
          <div className="d-flex align-items-center justify-content-between flex-wrap">
            <div className="col-lg-5 banner-content text-center text-lg-start">
              <h1>Record, execute, collaborate, store</h1>
              <p>An Intuitive ELN designed for compliance, <br/>
                collaboration, and paperless processes.</p>
                 <div className="homebutton d-flex justify-content-start align-items-center mt-4" data-wow-delay="0.6s">
                    <Link href="/request-a-demo" className="home-btn rounded-pill">
                       <Image src={learn_more_calender} alt="Banner Image" className="img-fluid " style={{marginTop:'-3px'}}/> Request a Demo
                    </Link>
                   <Link
                    href="/product-brochure-download"
                    className="home-btn home-btn-white rounded-pill ms-4"
                  >
                    <span className="icon-wrapper d-inline-block  position-relative" style={{ width: "17px", height: "20px" }}>
                      {/* Black icon (default) */}
                      <Image
                        src={learn_downlode_black}
                        alt="Black Icon"
                        fill
                        className="icon-default"
                      />

                      {/* White icon (hover) */}
                      <Image
                        src={learn_downlode_white}
                        alt="White Icon"
                        fill
                        className="icon-hover"
                      />
                    </span>

                    Download Brochure
                  </Link>

                </div>
            </div>
            
            <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0 ">
             <div className='home_banner_image-gif'>
              
                <Image src={home_banner_image} alt="Banner Image" className="img-fluid" />
             </div>
            </div>
          </div>
        </div>
             <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0 home_banner_image-gif-one">
             <div className='home_banner_image-gif-one-inside'>
                <Image src={home_banner_image} alt="Banner Image" className="img-fluid" />
             </div>
            </div>

          <div className='slider-section-mt'>
              <TrustedBy/>
          </div>
          <div className='one-size-section container mt-5'>
            <div className='text-center '>
                    <h2 className='position-relative'><Image src={one_size_splash} alt="one size" className="img-fluid one_size_splash" style={{width:'22px', }}/> One Size Fits All</h2>
                    <p className='mb-0'>Logilab ELN is a completely paperless environment for labs to record, execute, and store their tests, experiments, & research data. </p>
                      <p>Be it QA/QC labs and Research Organizations involved in projects, or  industry-specific laboratories that test and develop products, 
                      <br /> Logilab ELN is a flexible solution that caters to a myriad of laboratory needs.</p>  
            </div> 
            <div className="one-size-section-mt5 mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="row justify-content-center align-items-center mt-5 one-size-section-mt5">
  <div className="col-lg-7 order-2 order-md-1">
    <Image
      src={perfect_start}
      alt="Banner Image"
      className="img-fluid w-100 Quality-Testing-img-mt perfect_start_desktop"
    />
        <Image
              src={perfect_start_mobile}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt perfect_start_mobile"
            />
  </div>
  <div className="col-lg-5 ps-lg-5 order-1 order-md-2">
    <h3 className="fw-bold mb-1">The Perfect Start</h3>
    <p className="mb-0">
      Input structured and unstructured data, set up configurable templates and
      manage experiments all in one place.
    </p>
  </div>
</div>

              <div className='row align-items-center mt-5 '>
                  <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold mb-1">Research made faster</h3>
            <p className="mb-0">
              Accelerate your lab processes by utilizing dynamic templates for experiments and data capture.
            </p>
          </div>
                    <div className="col-lg-7">
            <Image
              src={perfect_start_two}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt"
            />
          </div>
          
            </div>
              <div className='row align-items-center mt-5'>
                    <div className="col-lg-7 order-2 order-md-1">
            <Image
              src={perfect_start_three}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt"
            />
          </div>
          <div className="col-lg-5 ps-lg-5  order-1 order-md-2 ">
            <h3 className="fw-bold mb-1">All on record</h3>
            <p className="mb-0">
                  Secure your data through multiple levels of permissions within projects, audit trails, electronic signatures etc.
            </p>
          </div>
            </div>
        </div>
            </div>
            <div className='container'>
                <div className='capsule-two text-center mt-3'>
                   <Image
                src={capsule_two}
                alt="Banner Image"
                className="img-fluid "
              />
                </div>
                <div className="impact-section  position-relative">
  <div className="row align-items-center bg-light-blue p-5 position-relative">
    {/* Left Content */}
    <div className="col-lg-5 mt-5 Powerful-mt">
      <h2 className="fw-bold">Powerful Impact<br/> on Lab Operations</h2>
    </div>

    {/* Right Stats */}
    <div className="col-lg-7 d-flex  justify-content-around text-center mt-5 Powerful-mt-flex">
      <div className=''>
            <div className="stat-item mb-4 d-flex flex-column">
        <h3 className="text-primary fw-bold" style={{lineHeight:'0px'}}>   
          <Image src={up_arrow} alt="Banner Image" className="img-fluid Increase-arrow"/> 
          <span className='ms-2 Increase'>84%</span>
      </h3>
        <p className="mb-0">Increase in lab <br className='break-sm'/>workflow efficiency</p>
      </div>
      </div>
       <div className="stat-item stat-item-down d-flex flex-column">
             <h3 className="text-primary fw-bold" style={{lineHeight:'0px'}}>   
          <Image
        src={up_arrow}
        alt="Banner Image"
        className="img-fluid Increase-arrow"
      /> <span className='ms-2 Increase'>72%</span></h3>
        <p className="mb-0">Increase in <br className='break-sm'/> productivity</p>
      </div>
      <div className="stat-item mb-4 d-flex flex-column">
                   <h3 className="text-primary fw-bold" style={{lineHeight:'0px'}}>   
          <Image
        src={down_arrow}
        alt="Banner Image"
        className="img-fluid Increase-arrow"
      /> <span className='ms-2 Increase'>65%</span>
      </h3>
        <p className="mb-0">Decrease in <br className='break-sm'/>downtime</p>
      </div>
    </div>
  </div>
      {/* Floating Pills */}
       

              <div className='capsule'>
                  <div className="floating-label uptime">Uptime</div>
                  <div className="floating-label productivity">Productivity</div>
                  <div className="floating-label efficiency">Efficiency</div>
              </div>

             
                  </div>
        
            </div>
          </div>
              <div className='container'>
            <div className='discover-everything'>
              <div className='text-center'>
                    <h2 className='Discover'>Discover everything</h2>
                   <p>Logilab ELN can do for you</p>
              </div>
              <div className='discover-everything-card-section'>
                    <div className='row'>
                          <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card capture_data_card   px-3 py-4 text-center'>
                                             <Image src={capture_data} alt="Banner Image" className="img-fluid capture_data capture_data"/>
                                             <h4 className='mt-4'>Capture data with Labsheets</h4>
                                             <p className='mt-4'>Record and store data in a familiar spreadsheet-style interface with field-based data capture.</p>
                                </div>
                          </div>
                             <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card  px-3 py-4 text-center'>
                                             <Image src={Design_protocols} alt="Banner Image" className="img-fluid capture_data"/>
                                             <h4 className='mt-4'>Design protocols with effective templates</h4>
                                             <p className='mt-4'>Standardize complex procedures with multi-step protocol templates to streamline scientific workflows.</p>
                                </div>
                          </div>
                             <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card capture_data_card capture_data_card-991 px-3 py-4 text-center '>
                                             <Image src={create_dynamic} alt="Banner Image" className="img-fluid create_dynamic" />
                                             <h4 className='mt-4'>Create dynamic reports</h4>
                                             <p className='mt-4'>Generate real-time, audit-ready comprehensive reports using data across multiple experiments. </p>
                                </div>
                          </div>
                                   <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card  capture_data_card-991 px-3 py-4 text-center'>
                                             <Image src={assign_individual} alt="Banner Image" className="img-fluid assign_individual"/>
                                             <h4 className='mt-4'>Assign individual roles & privileges</h4>
                                             <p className='mt-4'>Enable secure team collaboration with controlled, role-based access to data.</p>
                                </div>
                          </div>

                    </div>
                           <div className='row'>
                          <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card discover-everything-card-five capture_data_card-991  px-3 py-4 text-center discover-everything-card-height'>
                                             <Image src={Organise} alt="Banner Image" className="img-fluid capture_data capture_data"/>
                                             <h4 className='mt-4'>Organize Your Inventory & Instruments</h4>
                                             <p className='mt-4'>Register, track, and manage samples, reagents, consumables and instruments with full traceability. </p>
                                </div>
                          </div>
                             <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card Design_card capture_data_card-991 px-3 py-4 text-center'>
                                             <Image src={Register} alt="Banner Image" className="img-fluid capture_data"/>
                                             <h4 className='mt-4'>Draw chemical structures</h4>
                                             <p className='mt-4'>Draw and embed chemical structures/reactions /mechanisms directly into labsheets and protocols.</p>
                                </div>
                          </div>
                             <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card discover-everything-card-five capture_data_card-991 px-3 py-4 text-center '>
                                             <Image src={chemical} alt="Banner Image" className="img-fluid  workflows" />
                                             <h4 className='mt-4'>Set-up configurable workflows</h4>
                                             <p className='mt-4'>Create multi-level role-based workflows with sequential steps and step-wise validation.</p>
                                </div>
                          </div>
                                   <div className='col-lg-3 col-md-6'>
                                <div className='discover-everything-card  Design_card capture_data_card-991 px-3 py-4 text-center'>
                                             <Image src={workflows} alt="Banner Image" className="img-fluid capture_data"/>
                                             <h4 className='mt-4'>Register & Execute Task experiments </h4>
                                             <p className='mt-4'>Create, assign, and track task orders within the ELN to streamline experiment execution. </p>
                                </div>
                          </div>

                    </div>
              </div>
            </div>
          </div>
           <div className='Centralize-section'>
            <div className='container discover-everything '>            
                  <div className='text-center'>
                    <h2 className='Quality-Testing' style={{paddingTop:'10px'}}> Centralize your Research and Quality Testing</h2>
                  </div> 
                        <div className="Quality-Testing-mt">
        <div className="row align-items-center">
                <div className='row mt-3'>
            {/* Image should be first on desktop, second on mobile */}
            <div className="col-lg-7 order-2 order-lg-1">
              <Image
                src={testing_one}
                alt="Banner Image"
                className="img-fluid w-100 Quality-Testing-img-mt"
              />
            </div>

            {/* Content should be second on desktop, first on mobile */}
            <div className="col-lg-5 ps-lg-5 Quality-Testing-flex order-1 order-lg-2">
              <div>
                <Link href='' className='Centralize-section-firt-cta-btn'>
                  Collaborate on R&D
                </Link>
              </div>
              <h4 className="fw-bold mt-4">
                Experiment without constraints <br className="break-sm"/> — where you are doesn’t matter
              </h4>
              <ul className='ms-3 mt-3'>
                <li>Collaborate with anyone, anywhere</li>
                <li>Maintain centralized repository for all experiments, regardless of the scientific domain</li>
                <li>Access Logilab ELN at any time via a browser-based interface within a single login</li>
              </ul>
              <div className='mt-4'>
                <Link href='' className='Centralize-section-cta'>
                  <Image 
                    src={learn_more} 
                    alt="Banner Image" 
                    className="img-fluid me-2" 
                    style={{ marginTop: '-3px' }} 
                  />
                  Learn More...
                </Link>
              </div>
            </div>
          </div>



              <div className='row align-items-center discover-everything'>
                  <div className="col-lg-5 ps-lg-5  Quality-Testing-flex order-1 order-lg-1">
                           <div className=''>
                    <Link href='' className='Centralize-section-firt-cta-btn Centralize-section-firt-cta-btn-blue'>Eliminate paper</Link>
                  </div>
                           <h4 className="fw-bold mt-4">You set up procedures — Logilab <br className="break-sm"/> ELN will ensure they are followed</h4>
              <ul className='ms-3 mt-3'>
                  <li>Conduct assays of samples and inventory materials</li>
                  <li>Execute protocols to capture data for SOPs and experiments</li>
                  <li>Manage lab and research activities</li>
                  <li>Conduct day-to-day lab processes</li>
                  <li>Calculate essential values</li>
              </ul>
              <div className='mt-4'>
                    <Link href='' className='Centralize-section-cta '><Image src={learn_more_calender} alt="Banner Image" className="img-fluid me-2" style={{marginTop:'-3px'}}/>Request a Demo...</Link>
              </div>
          </div>
                    <div className="col-lg-7 order-2 order-lg-2">
            <Image
              src={testing_two}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt"
            />
          </div>
          
            </div>

            
              <div className='row align-items-center discover-everything'>
                    <div className="col-lg-7 order-2 order-lg-1">
            <Image
              src={testing_three}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt perfect_start_desktop"
            />
             <Image
              src={testing_three_mobile}
              alt="Banner Image"
              className="img-fluid w-100 Quality-Testing-img-mt perfect_start_mobile"
            />
          
          </div>
          <div className="col-lg-5 ps-lg-5 mt-5 Quality-Testing-flex order-1 order-lg-2">
                   <div className=''>
                    <Link href='' className='Centralize-section-firt-cta-btn Centralize-section-firt-cta-btn-green'>Execute Lab Tasks</Link>
              </div>
                  <h4 className="fw-bold mt-4">Sky is the limit — conduct vital  <br className="break-sm"/> tasks that get closer to your breakthroughs</h4> 
              <ul className='ms-3 mt-3'>
                  <li>Monitor and  Manage laboratory activities</li>
                  <li>Calibrate and maintain instruments</li>
                  <li>Execute test procedures</li>
                  <li>Develop analytical methods</li>
                  <li>Record research activities  e.g., formulation, reaction conditions, sampling etc</li>
              </ul>
              <div className='mt-4'>
                    <Link href='' className='Centralize-section-cta'><Image src={learn_more_downlode} alt="Banner Image" className="img-fluid me-2" style={{marginTop:'-3px'}}/>Download Brochure...</Link> 
              </div>
          </div>
            </div>
        </div>
            </div>        
            </div>
          </div>
            <div className='container'>
                  <div className='discover-everything'>
                        <div className='text-center'>
                        <h2>Automate All Manual Lab Processes</h2>
                      </div> 
                        <div className='Automate-card-section'>
                            <div className='row'>
                                  <div className='col-lg-4 col-md-6 col-12'>
                                        <div className='Automate-card'>
                                          <div className='text-center'>
                                                <Image src={automate_card_one} alt="Banner Image" className="img-fluid Automate-card-img"/>
                                                <h4 className='pt-5'>Improve efficiency <br/>& accuracy</h4>
                                          </div>
                                            <ul className='ms-3 mt-3'>
                                            <li>Collaborate with your colleagues on multiple projects & tasks</li>
                                            <li className='mt-2'>Record data in a controlled and secure environment</li>
                                            <li className='mt-2'>Auto-generate dynamic summary reports using data tags</li>
                                          </ul>
                                        </div>
                                  </div>

                                          <div className='col-lg-4 col-md-6 col-12 ps-lg-5'>
                                        <div className='Automate-card'>
                                          <div className='text-center'>
                                                <Image src={automate_card_two} alt="Banner Image" className="img-fluid Automate-card-img" />
                                                <h4 className='pt-5'>Standardize, implement,<br/> and iterate</h4>
                                          </div>
                                            <ul className='ms-3 mt-3'>
                                            <li>Set up standardized templates.</li>
                                            <li className='mt-2'>Configure specific role based access to project tasks modules</li>
                                            <li className='mt-2'>Optimized task execution timelines — individual experiments, SOPs management</li>
                                          </ul>
                                        </div>
                                  </div>
                                          <div className='col-lg-4 col-md-6 col-12 ps-lg-5'>
                                        <div className='Automate-card'>
                                          <div className='text-center'>
                                                <Image src={automate_card_three} alt="Banner Image" className="img-fluid Automate-card-img"/>
                                                <h4 className='pt-5'>21 CFR Part 11 & Data<br/> integrity Compliance</h4>
                                          </div>
                                            <ul className='ms-3 mt-3'>
                                            <li>Comprehensive 100 % Audit Trail</li>
                                            <li className='mt-2'>Version and release control for all captured data</li>
                                            <li className='mt-2'>Electronic records protection with e-signature support</li>
                                          </ul>
                                        </div>
                                  </div>
                            </div>
                        </div> 
                          <div className='free-cta-section discover-everything'>
                                   <div className='d-flex flex-column  flex-lg-row flex-md-column   flex-sm-row  align-items-center'>
                                     <div className='order-2 order-md-2 order-sm-1 order-lg-1'>
                                    <h2 className='text-black ps-5 three-user'>Try it for free for up to 3 users </h2> 
                                         <p className='text-black ps-5 three-user-ps pt-3 mb-0'> Take control of your lab data today! </p>
                                   <div className='text-start mb-4 ps-5  pt-4 cta-btn-ps mt-5'>
                                   <a className=' home-btn btn--black rounded-pill' href='https://logilabelnlite.azurewebsites.net/register'>Get Started</a>
                                    <a className=' home-btn home-btn-white  btn--white rounded-pill ms-4 cta-btn-ms' href='/contact-us'>Compare Plans</a>
                                     </div>
                                 </div>
                                 <div className='order-1 order-md-1 order-sm-2 order-lg-2'>
                                       <Image src={loglab_Eln} className="img-fluid cta-free-logo ms-5" alt="" />    
                                 </div>
                                 
                                 </div>
                          </div>
                         <div className="hero-section container">
                            <div className="d-flex justify-content-between  align-items-center text-white px-4  hero-text">
                              <div className="d-flex flex-column ">
                                <h1 className="text-white">
                                  Digitize <span className="text-white">.</span> Simplify <span className="text-white">.</span> Organize <span className="text-white">.</span>
                                </h1>
                                <p className="lead text-white mt-2">
                                  Kickstart your paperless lab with Logilab ELN
                                </p>
                              </div>
                              <div className="d-flex justify-content-center hero-text mt-4">
                                <Link href="#" passHref legacyBehavior>
                                  <a className="home-btn rounded-pill">Request a Demo</a>
                                </Link>
                                <Link href="#" passHref legacyBehavior>
                                  <a className="home-btn home-btn-white rounded-pill ms-3">Book A Demo</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                  </div>
                    

            </div>
      </div>
      <Footer/>
    </>
  );
}
