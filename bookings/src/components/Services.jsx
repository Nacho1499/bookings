import React from "react";

const Services = () => {
  return (
    <>
      <div className=" services container mt-4  p-3 mb-4">
        <h4>Our Services</h4>
        <hr className="text-warning" />
        <div className="row g-3 mt-3 text-center">
          <div className="col-12 col-lg-4">
            <div className="service1 p-3 ">
              <div className="">
                <i class="fa-solid fa-plane-departure fa-2x text-warning mb-3"></i>
                <hr className="text-warning" />
                <h4 className="text-light">Flight Booking</h4>

                <p className="text-light">
                  Booking a flight can be an overwhelming task, especially with
                  the multitude of options available. However, with the right
                  approach, you can streamline the process and find the best
                  deals tailored to your travel needs. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="service2 p-3 ">
              <div className="">
                <i class="fa-solid fa-car fa-2x text-warning mb-3"></i>
                <hr className="text-warning" />
                <h4 className="text-light">Car Rentals</h4>
                <p className="text-light">
                  To secure the best rates and availability, it’s wise to book
                  your rental car ahead of time. Prices can fluctuate based on
                  demand, so reserving early can help you snag better deals,
                  especially during peak travel seasons.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="service3 p-3 ">
              <div className="">
                <i class="fa-solid fa-hotel text-warning fa-2x mb-3"></i>
                <hr className="text-warning" />

                <h4 className="text-light">Hotel Booking</h4>
                <p className="text-light">
                  Consider the purpose of your trip. If you’re traveling for
                  business, proximity to the conference center may be key. For
                  leisure travelers, staying near attractions or public
                  transportation can enhance the experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a className="text-decoration-none text-warning " href="">
          View More <i className="fa-solid fa-arrow-right mt-4"></i>
        </a>
      </div>
    </>
  );
};
export default Services;
