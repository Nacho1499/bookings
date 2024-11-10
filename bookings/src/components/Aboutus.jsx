import React from "react";
import travel from "../assets/Travel.mp4";

const Aboutus = () => {
  return (
    <>
      <section className="container-fluid mt-5 mb-5">
        <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <video
              className="travel-video  img-fluid "
              src={travel}
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="col-12 col-lg-6">
            <h4>About Us</h4>
            <hr className="text-warning" />
            <p>In a world brimming with wanderlust, Patcy Travel Agency stands out
            as a premier destination for travelers seeking unique experiences.
            Founded on the belief that travel should be accessible and enjoyable
            for everyone, Patcy specializes in crafting personalized
            itineraries that cater to diverse interests and budgets. One of the
            hallmarks of Patcy is its commitment to customizing travel plans.
            Whether you’re dreaming of a tranquil beach getaway, an adventurous
            mountain trek, or a cultural city tour, the agency’s team of
            experienced travel consultants works closely with clients to create
            the perfect itinerary. They take into account individual
            preferences, ensuring each trip is memorable and fulfilling.</p>
            <button className="btn btn-outline-warning mt-3 shadow">Read More <i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;