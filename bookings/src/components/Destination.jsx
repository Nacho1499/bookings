import React from "react";
import { Link } from "react-router-dom";
import paris from "../assets/paris.jpg";
import usa from "../assets/usa.jpg";
import dubai from "../assets/dubai.avif";

const Destination = () => {
  return (
    <>
      <div className="container-fluid mt-4 mb-5 ">
        <div className="container">
          <hr className="text-warning" />
          <h4 className="text-center">Our Popular Destinations</h4>
          <p className="text-center">World best tourist destinations</p>
          <div className="row g-3 mt-3">
            <div className="col-12 col-lg-4">
              <div className="card p-1">
                <img className="img-fluid des" src={paris} alt="" />
                <div className="card-body">
                  <div className="tour mt-3 p-2">
                    <div>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <h5 className="mt-2">Paris</h5>
                    </div>
                    <div>
                      <p>over - 50,000 visits</p>
                      <button className="btn btn-warning shadow">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card p-1">
                <img className="img-fluid des" src={usa} alt="" />
                <div className="card-body">
                  <div className="tour mt-3 p-2">
                    <div>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <h5 className="mt-2">United State</h5>
                    </div>
                    <div>
                      <p>over - 20,000 visits</p>
                      <button className="btn btn-warning shadow">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card p-1">
                <img className="img-fluid des" src={dubai} alt="" />
                <div className="card-body">
                  <div className="tour mt-3 p-2 ">
                    <div>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <i className="text-warning fa-solid fa-star"></i>
                      <h5 className="mt-2">Dubai</h5>
                    </div>
                    <div>
                      <p>over - 10,000 visits</p>
                      <button className="btn btn-warning shadow">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/destination"
            className="text-decoration-none text-warning "
            href=""
          >
            View More <i className="fa-solid fa-arrow-right mt-4"></i>
          </Link>
        </div>
      </div>
      
    </>
  );
};
export default Destination;
