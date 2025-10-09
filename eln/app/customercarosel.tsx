"use client";
import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import Owl Carousel default theme CSS
import OwlCarousel from "react-owl-carousel"; // Import React Owl Carousel

const CustomerCarousel = () => {
  // const carouselOptions = {
  //   loop: true,
  //   margin: 10,
  //   dots: false,
  //   autoPlay:true,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 2,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 5,
  //     },
  //   },
  // };

  return (
    <section
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
      className="erp_service_area mt_140"
    >
      <div className="container">
        {/* <OwlCarousel className="brand-carousel section-padding owl-carousel" {...carouselOptions}  items={ } margin={8} autoplay ={true} > */}

        <div className="row">
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/dbos.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/e.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/hp.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/mbs.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/mega.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-4">
            <div className="single-logo">
              <img
                className="carousel-img img-fluid w-100 h-100"
                src="../assets/images/customers/cipla.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* </OwlCarousel> */}
      </div>
    </section>
  );
};

export default CustomerCarousel;
