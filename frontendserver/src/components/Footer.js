import React from 'react'
import {FaFacebook} from '@react-icons/all-files/fa/FaFacebook';
import {FaTwitter} from '@react-icons/all-files/fa/FaTwitter';
import {FaGoogle} from '@react-icons/all-files/fa/FaGoogle';
import logo from '../assets/Medical Rep Logo.png';

export default function Footer(props) {
    return (
       
        <footer className="text-center text-lg-start text-black" style={{backgroundColor:'#E1ECF3'}}>
        
        <section
            className=" container d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          >
        
            <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
        
        
            <div>
                    
                    <a href="" className="me-4 text-reset">
                       <FaFacebook/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FaTwitter/>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <FaGoogle/>
                    </a>
                   
            </div>
            
        </section>
        

        
        <section className="">
            <div className="container text-center text-md-start mt-5">
        
            <div className="row mt-3">
            
                <div className="col-md-6 col-lg-4 col-xl-8 mx-auto mb-4">
                    <div className='row col-xl-6 '>
                            <div className='col-sm-12'>
                                <img src={logo} className="pb-3" width="80rem"/>
                            </div>
                            <div className='col-sm-12'>
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Medical Rep
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                    </div>
                </div>
            

                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Laravel</a>
                </p>
                </div>
            

            
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                    <a href="#!" className="text-reset">Help</a>
                </p>
                </div>
            
                
            </div>
                  
            </div>
        </section>
        

        
        <div className="text-center p-2" style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
               @ MC 2021. All Rights Reversed
        </div>
        
        </footer>

    )
}
