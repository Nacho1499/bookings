import React from 'react';

const Footer = () => {
    const date= new Date();
    const dateRunning= date.getFullYear();
    return(
        <>
            <div className='container-fluid bg-dark p-5'>
                
                <div className='text-center'>
                    <a href=""><i className="footer text-warning fa-brands fa-square-whatsapp fa-2x"></i></a>
                    <a href=""><i className=" footer text-warning fa-brands fa-telegram fa-2x"></i></a>
                    <a href=""><i className="footer text-warning fa-brands fa-square-x-twitter fa-2x"></i></a>
                    <a href=""><i className=" footer text-warning fa-brands fa-square-instagram fa-2x"></i></a>
                    
            

                </div>
                <hr className='text-warning' />
                
                <p className='text-light text-center mt-4' >©<span>{dateRunning}</span>.  Patcy<span className='text-warning'>Bookings</span> All Right Reserved.</p>

            

            </div>
        </>
    )
}
export default Footer;