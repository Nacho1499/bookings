import React from 'react';
import paris from "../assets/paris.jpg"
import italy from "../assets/italy.jpg"
import dubai from "../assets/dubai.avif"

const Destination = () => {
    return(
        <>
            <div className='container-fluid mt-4 mb-5 '>
                <div className='container'>
                <hr className='text-warning' />
                    <h4 className='text-center'>Our Popular Destinations</h4>
                    <p className='text-center'>World best tourist destinations</p>
                    <div className='row g-3 mt-3'>
                        <div className='col-12 col-lg-4'>
                            <div className='card  shadow'>
                                <img className='rounded' src={paris} alt="" />
                                <div className='card-body'>
                                <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                                    <h5>Paris</h5>

                                </div>

                            </div>
                            

                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='card  shadow'>
                                <img className='rounded' src={italy} alt="" />
                                <div className='card-body'>
                                <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                                <h5>Rome</h5>

                                </div>

                            </div>
                            

                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='card  shadow'>
                                <img className='rounded' src={dubai} alt="" />
                                <div className='card-body'>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                                <h5>Dubai</h5>

                                </div>

                            </div>
                            

                        </div>

                    </div>
                    <a  className='text-decoration-none text-warning ' href="">View More <i className="fa-solid fa-arrow-right mt-4"></i></a>
                    


                </div>

            </div>
        </>
    )
}
export default Destination;