import React from "react";

const Choose = () => {
  return (
    <>
      <div className="choose container-fluid mt-5 mb-5">
        <div className="container">
          <h4 className="text-center">Why Choose Us</h4>
          <p className="text-center mb-4">
            A brand name you can trust and rely on
          </p>
          <hr className="text-warning mb-3" />
          <div className="row text-center mt-3">
            <div className="col-12 col-lg-4">
              <i class=" text-warning fa-solid fa-earth-americas fa-2x mb-3"></i>
              <h5 className="mb-3">Affordable price guarantee</h5>
              <p>
                Booking early often results in better prices, especially for
                flights and accommodations. However, last-minute deals can
                sometimes offer discounts for unsold rooms or tickets, so it's
                worth checking closer to the date as well.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <i class=" text-warning fa-solid fa-bag-shopping fa-2x mb-3"></i>
              <h5 className="mb-3">Wide variety of destinations</h5>
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
              <i class="text-warning fa-solid fa-thumbs-up fa-2x mb-3"></i>
              <h5 className="mb-3">Highly qualified services</h5>
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
