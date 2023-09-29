/* eslint-disable no-unused-vars */
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";
import Featuredproducts from "../components/featuredproducts";
import Newarrivals from "../components/newarrivals";
import banner from "../assets/images/banner/b17.jpg";
import banner1 from "../assets/images/banner/b10.jpg";
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";
import Newsletter from "../components/newsletter";
import Hero from "../components/hero";
import ReactPlayer from "react-player";
import Video from "../assets/videos/video1.webm";

const home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <h1>
                        Discover Beauty's Secret Equation: <br /> Science +
                        Self-Love = <br />
                        Your Timeless Radiant Self!
                      </h1>

                      <p className="mb-3">
                        Purchase your <br />
                        CosmeCare Product Now!
                      </p>

                      <Link
                        to="/shop"
                        className="btn btn-primary"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Skincare Products</h1>
              <p>For All Types of Skin</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="videoplayer">
              {" "}
              <video src={Video} autoPlay loop muted />
              <div className="repair-details text-center align-items-center">
                <h5 className="mb-3 text-black">
                  Unlock Your Radiance: Where Beauty Meets Science!
                </h5>
                <h2 className="mb-3 text-black">
                  Check All Products And Accessories
                </h2>
                <button>Explore Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1 className="mb-3 text-black">Products Made Just For You</h1>
              <p>For All Skin Types</p>
            </div>
            <Newarrivals />
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-3">What our customers say...</h1>
              <p className="mb-4">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog1} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog2} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog3} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={blog4} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link to="about">
                    <button className="mt-4">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default home;
