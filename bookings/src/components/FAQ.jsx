import React from "react";

const FAQ = () => {
  return (
    <>
      <div
        className="accordion container mt-5 mb-4 bg-warning p-4"
        id="accordionExample"
      >
        <h4 className="mb-5">Frequently Asked Questions</h4>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              How does your agency find the best deals?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Our agency utilizes advanced search tools and algorithms to
                compare prices across multiple airlines and travel websites. We
                also monitor fare trends to notify you of price drops.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What if my flight gets canceled or delayed?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                In the event of cancellations or delays, we will assist you in
                rebooking your flight and exploring alternative options to
                ensure you reach your destination as smoothly as possible.
              </p>
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I contact customer support?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                You can reach our customer support team via phone, email, or
                live chat on our website. We’re here to assist you with any
                questions or concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQ;
