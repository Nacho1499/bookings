import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Updates = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container mt-5 mb-5">
          <h4>Available Updates</h4>
          <hr className="text-warning" />
          <Link to="/" className="btn btn-outline-warning mt-4">
            <i class=" fa-solid fa-circle-arrow-left"></i>
          </Link>
          <div className="mt-4 text-light bg-warning p-3 rounded shadow text-black">
            <h6 className="mb-3">Welcome mesage</h6>
            <p>
              Welcome to Partcy Travel Agency, where your journey begins! We’re
              thrilled to have you join our community of explorers and
              adventurers. At Partcy, we believe that travel is more than just
              visiting new places; it’s about creating unforgettable memories
              and experiencing the world in a meaningful way.
            </p>
          </div>
          <div className="mt-4 text-light bg-warning p-3 rounded shadow text-black">
            <h6 className="mb-3">Regular Updates</h6>
            <p>
              Welcome to the latest updates from Partcy Travel Agency! We’re
              excited to keep you informed about new offerings, travel tips, and
              inspiration for your next adventure.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Updates;
