import React from 'react';
import { Link } from 'react-router-dom';
import paris from "../assets/paris.jpg";
import usa from "../assets/usa.jpg";
import dubai from "../assets/dubai.avif";
import italy from "../assets/italy.jpg";
import moro from "../assets/moro.jpg";
import spain from "../assets/spain.webp";
import Footer from './Footer';
import Scroll from "./Scroll";
import Visa from './Visa';

const Alldestination = () => {
    return(
        <>
        <Scroll/>
             <div className='all container-fluid '>
                <div>
             <h4 className="text-light text-center">Our Popular Destinations</h4>
             <p className="text-light text-center">World best tourist destinations</p>
             </div>

             </div>
        <div className="container mb-5 mt-5">
          
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
                  <button className="btn btn-warning shadow">Book Now</button>
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
                  <button className="btn btn-warning shadow">Book Now</button>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card p-1">
              <img className="img-fluid des" src={italy} alt="" />
              <div className="card-body">
              <div className="tour mt-3 p-2">
                <div>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <h5 className="mt-2">Rome</h5>
                </div>
                <div>
                  <p>over - 80,000 visits</p>
                  <button className="btn btn-warning shadow">Book Now</button>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card p-1">
              <img className="img-fluid des" src={moro} alt="" />
              <div className="card-body">
              <div className="tour mt-3 p-2">
                <div>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <h5 className="mt-2">Morocco</h5>
                </div>
                <div>
                  <p>over - 18,000 visits</p>
                  <button className="btn btn-warning shadow">Book Now</button>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card p-1">
              <img className="img-fluid des" src={spain} alt="" />
              <div className="card-body">
              <div className="tour mt-3 p-2">
                <div>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <h5 className="mt-2">Spain</h5>
                </div>
                <div>
                  <p>over - 45,000 visits</p>
                  <button className="btn btn-warning shadow">Book Now</button>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
                <div className="card p-1">
              <img className="img-fluid des" src={dubai} alt="" />
              <div className="card-body">
              <div className="tour mt-3 p-2">
                <div>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <i className="text-warning fa-solid fa-star"></i>
                  <h5 className="mt-2">Dubai</h5>
                </div>
                <div>
                  <p>over - 10,000 visits</p>
                  <button className="btn btn-warning shadow">Book Now</button>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
          
          <Link to="/" className="btn btn-outline-warning mt-4">
            <i class=" fa-solid fa-circle-arrow-left"></i>
          </Link>
        </div>
        <Visa/>
        <Footer/>
      
        </>
    )
}
export default Alldestination;