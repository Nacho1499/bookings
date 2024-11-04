import React from 'react';

const Services = () => {
    return(
        <>
        
            <div className=' services container mt-5  p-3 mb-4'>
                <h4>Our Services</h4>
                <hr className='text-warning' />
                <div className='row g-3 mt-3 text-center'>
                    <div className='col-12 col-lg-4'>
                        <div className='service1 p-3 rounded shadow'>
                            <div className='mt-4'>
                        <i class="fa-solid fa-plane-departure fa-2x text-warning mb-3"></i>
                        <hr className='text-warning' />
                        <h4 className='text-light'>Flight Booking</h4>
                        
                         <p className='text-light'>A smooth and informative booking experience is crucial for customer
                         satisfaction and retention in the travel industry.</p>
                         </div>


                        </div>
                    
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='service2 p-3 rounded shadow'>
                            <div className='mt-4'>
                            <i class="fa-solid fa-car fa-2x text-warning mb-3"></i>
                            <hr className='text-warning' />
                        <h4 className='text-light'>Car Rentals</h4>
                         <p className='text-light'>A smooth and informative booking experience is crucial for customer
                         satisfaction and retention in the travel industry.</p>
                         </div>


                        </div>
                    
                    </div>
                    <div className='col-12 col-lg-4'>
                        <div className='service3 p-3 rounded shadow'>
                            <div className='mt-4'>
                            <i class="fa-solid fa-hotel text-warning fa-2x mb-3"></i>
                            <hr className='text-warning' />
                        <h4 className='text-light'>Hotel Booking</h4>
                         <p className='text-light'>A smooth and informative booking experience is crucial for customer
                         satisfaction and retention in the travel industry.</p>
                         </div>


                        </div>
                    
                    </div>
                    
                    

                </div>
                <a  className='text-decoration-none text-warning ' href="">View More <i className="fa-solid fa-arrow-right mt-4"></i></a>

            </div>
        </>
    )
}
export default Services;