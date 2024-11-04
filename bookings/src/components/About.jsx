import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="about container-fluid bg-black">
        <div className="container p-3 ">
          <h4 className="text-light mt-5">
            Partcy<span className="text-warning">Bookings</span>{" "}
          </h4>
          <hr className="text-warning" />
          <h4 className="text-light">
            Exploring the World with Partcy Travel Agency
          </h4>
          <p className="text-light mt-3">
            In a world brimming with wanderlust, Partcy Travel Agency stands out
            as a premier destination for travelers seeking unique experiences.
            Founded on the belief that travel should be accessible and enjoyable
            for everyone, Partcy specializes in crafting personalized
            itineraries that cater to diverse interests and budgets. One of the
            hallmarks of Partcy is its commitment to customizing travel plans.
            Whether you’re dreaming of a tranquil beach getaway, an adventurous
            mountain trek, or a cultural city tour, the agency’s team of
            experienced travel consultants works closely with clients to create
            the perfect itinerary. They take into account individual
            preferences, ensuring each trip is memorable and fulfilling.
          </p>
          <br />

          <p className="text-light">
            With its personalized service, expert guidance, and commitment to
            sustainability, Partcy Travel Agency is redefining the travel
            experience. Whether you’re a seasoned explorer or a first-time
            traveler, Partcy promises to turn your travel dreams into reality,
            one destination at a time. So pack your bags and let Partcy take you
            on your next adventure!
          </p>
          <Link to="/" className="btn btn-outline-warning mt-4 mb-4">
            <i className=" fa-solid fa-circle-arrow-left"></i>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;
