import React from "react";
import visa from "../assets/visa.webp";

const Visa1 = () => {
  return (
    <>
      <div className="container-fluid mt-4 mb-4">
        <div className="container">
          <div className="row g-3 mt-4 mb-4">
            <div className="col-12 col-lg-6">
              <img className="visa-img img-fluid" src={visa} alt="" />
            </div>
            <div className="col-12 col-lg-6">
                <h4 className="mb-3">Apply for your visa !!</h4>
                <hr className="text-warning" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                temporibus ut perspiciatis officiis nihil nostrum labore facere,
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                mollitia rerum dolores, tempore iste consequuntur sequi vitae
                totam tenetur porro omnis doloremque quis nisi debitis explicabo
                necessitatibus, corporis enim cupiditate fuga quia asperiores
                dicta minima excepturi commodi. Quibusdam, quasi magnam?
                sapiente incidunt neque!
              </p>
              <button className="btn btn-warning ">Apply Here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Visa1;
