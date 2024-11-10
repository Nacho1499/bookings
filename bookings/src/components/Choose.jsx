import React from "react";

const Choose = () => {
  return (
    <>
      <div className="choose container-fluid mt-5 mb-5">
        <div className="container">
          <h4 className="text-center">Why Choose Us</h4>
          <p className="text-center mb-3">
            A brand name you can trust and rely on
          </p>
          <hr className="text-warning mb-2" />
          <div className="row g-5 text-center mt-2">
            <div className="col-12 col-lg-4">
              <i class=" bg-warning fa-solid fa-earth-americas fa-1x mb-3 shadow p-3 rounded"></i>
              <h5 className="mb-3">Affordable price guarantee</h5>
               <hr className="text-warning" />
              <p>
                Booking early often results in better prices, especially for
                flights and accommodations. However, last-minute deals can
                sometimes offer discounts for unsold rooms or tickets, so it's
                worth checking closer to the date as well.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <i class=" bg-warning fa-solid fa-bag-shopping fa-1x mb-3 shadow p-3 rounded"></i>
              <h5 className="mb-3">Wide variety of destinations</h5>
               <hr className="text-warning" />
              <p>
                If you're looking for a variety of destinations at affordable
                prices, there are plenty of incredible spots around the world
                where you can get great value for your money. Whether you're
                interested in relaxing beaches, cultural experiences, outdoor
                adventures, or vibrant cities, there’s something for every type
                of traveler.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <i class=" fa-solid fa-thumbs-up fa-1x mb-3 shadow p-3 rounded bg-warning"></i>
              <h5 className="mb-3">Highly qualified services</h5>
              <hr className="text-warning" />
              <p>
                At patcy bookings we provide services that consistently meet or
                exceed customer expectations, are reliable, and provide value.
                High-quality services are essential for building customer
                loyalty, enhancing brand reputation, and ensuring customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Choose;
