import React from "react";

const Testimonia = () => {
  return (
    <>
      <div className="testimonia container-fluid mt-5">
        <div
          id="carouselExampleInterval"
          className="customer container-fluid carousel slide p-5 mb-5"
          data-bs-ride="carousel"
        >
          <h4 className=" mb-5 text-center text-light">
            Our customers feed backs
          </h4>
          <div className="carousel-inner text-center text-black bg-dark rounded   mx-auto">
            <div className="carousel-item  p-5 active" data-bs-interval="3000">
              <p className="text-light">
                I recently had the pleasure of using Patcy Booking for my family
                vacation, and I couldn't be more satisfied with the experience!
                From the moment we inquired about our trip, the team was
                incredibly responsive and attentive to our needs.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5  className="text-light">Tochukwu</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                I recently booked a trip through Patcy Booking, and I can
                honestly say it was one of the best travel experiences I've ever
                had! From start to finish, the team was incredibly helpful and
                professional.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5  className="text-light"> Miss Adora</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                I recently returned from an incredible trip booked through Patcy
                Booking, and I can't recommend them highly enough! From the very
                beginning, their team demonstrated a level of professionalism
                and dedication that truly set them apart from other agencies.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5  className="text-light">Mr Paul</h5>
            </div>
            <div className="carousel-item  p-5" data-bs-interval="3000">
              <p className="text-light">
                The booking process was smooth and organized. My travel advisor
                provided clear information about costs and details, making
                everything easy to understand.
                <p className="mt-4"> ⭐️⭐️⭐️⭐️⭐️</p>
              </p>
              <h5 className="text-light">Miss Joy</h5>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Testimonia;
