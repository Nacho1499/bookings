import React from "react";
import morocco from "../assets/morocco.webp";
import credit from "../assets/credit.webp";
import ice from "../assets/ice.webp";

const Blog = () => {
  return (
    <>
      <div className="container-fluid mt-4 mb-5">
        <div className="container mt-5 mb-5">
          <h4>Our Recent Blog Posts</h4>
          <hr className="text-warning" />

          <div className="row g-3 mt-4">
            <div className="col-12 col-lg-4">
              <a
                className="text-decoration-none text-dark"
                href="https://www.wandererscompass.com/destinations/embracing-moroccos-customs-and-traditions-a-guide-for-visitors/?_gl=1*5nw66u*_up*MQ..&gclid=EAIaIQobChMIkqeL6bnDiQMVhJRQBh04cTjVEAAYASAAEgKVg_D_BwE"
              >
                <img className="img-fluid" src={morocco} alt="" />
                <h5 className="mt-3">
                  Embracing Morocco’s Customs and Traditions: A Guide for
                  Visitors
                </h5>
              </a>
            </div>
            <div className="col-12 col-lg-4">
              <a
                className="text-decoration-none text-dark"
                href="https://www.wandererscompass.com/travel-tips-resources/best-credit-cards-for-travel-in-2024/?_gl=1*edhe4y*_up*MQ..&gclid=EAIaIQobChMIkqeL6bnDiQMVhJRQBh04cTjVEAAYASAAEgKVg_D_BwE"
              >
                <img className="img-fluid" src={credit} alt="" />
                <h5 className="mt-3">Best Credit Cards for Travel in 2024</h5>
              </a>
            </div>
            <div className="col-12 col-lg-4">
              <a
                className="text-decoration-none text-dark"
                href="https://www.wandererscompass.com/destinations/best-season-to-visit-iceland/?_gl=1*86r3u4*_up*MQ..&gclid=EAIaIQobChMIkqeL6bnDiQMVhJRQBh04cTjVEAAYASAAEgKVg_D_BwE"
              >
                
                <img className="img-fluid" src={ice} alt="" />
                <h5 className="mt-3">
                  Discover the Ideal Season to Explore Iceland
                </h5>
              </a>
            </div>
          </div>
        </div>
        <hr className="text-warning" />
      </div>
    </>
  );
};
export default Blog;
