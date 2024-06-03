import React, { useEffect } from 'react';
import {Link} from "react-router-dom"

// import { motion} from "framer-motion";

// import { fadeIn } from "../../variants";

import './index.css';
import Navbar from "../Navbar"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const LandingPage =()=>{
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in-right');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });

        elements.forEach(element => {
            observer.observe(element);
        });

        // Clean up the observer on unmount
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);
    return (
        <>
         <Navbar /> 
         <div className="landing-main-container">
            <div className="dental-main-container">
                <div className="dental-container fade-in-right">
                    <h1 
                    //    variants={fadeIn("up",0.2)}
                    //    initial="hidden"
                    //    whileInView={"show"} 
                    //    viewport={{once:false,amount:0.7}}
                       className="dental-heading"> Discover a world where dental excellence meets facial artistry </h1> 
                       <Link to="contact">
                       <button className="dental-request-btn">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716794382/Vector_lisqvz.png" alt="call" /> 
                        <p className="button-request-para"> Request a Call Back </p>
                    </button>
                       </Link>

                </div>
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}                 
                className="dental-icon-container fade-in-right">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798342/Group_29_ojuwub.png" className="social-icon" alt="social media"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798605/Group_eohm2k.png" className="social-icon-twitter" alt="social media"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798610/linkedin_black.1_gujvxm.png" className="social-icon" alt="social media"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798613/youtube_color.1_v6eavf.png" className="social-icon" alt="social media"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798618/instagram_black.1_nxeb7h.png" className="social-icon" alt="social media"/> 
                </div>
            </div>
            
            <div className="booking-appointment-container">
                <div className="booking-section-button fade-in-right">
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800161/Frame_3_aczcu8.png"  className="booking-appointment-logo" alt="landing consult" /> 
                    </Link>
                    <Link to="contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800171/Frame_6_q1rjdz.png"  className="booking-appointment-logo" alt="landing consult"/> 
                    </Link>
                    <Link to="contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png"  className="booking-appointment-logos" alt="landing consult"/>
                    </Link>
                </div>
            </div>
            <div className="dental-checking-container">
                <div
                //  initial={{ x: -100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                className="checking-container">
                    <img 
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803054/8_kg8ljm.png" className="checking-image" alt="landing section" />  
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803060/9_uhythc.png"  className="checking-image" alt="landing section"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803068/10_s16pvz.png" className="checking-images" alt="landing section"/> 
                </div>
            </div>  
            <div
                    className="about-main-container">
                <div className="about-container">
                    <img
                            // variants={fadeIn("up", 0.2)} 
                            // initial="hidden"
                            // whileInView={"show"} 
                            // viewport={{once:false,amount:0.7}}
                            src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716809273/Group_1_vuhw7m.png" className="about-image" alt="about" /> 
                    <div className="about-info-container">
                        <h1 className="about-heading"> About us  </h1> 
                        <p className="about-para"> standard dummy text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. It has 
                            survived not only five centuries, but also the leap into electronic 
                            typesetting, remaining essentially unchanged. It was popularised in 
                            the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                            passages, and more recently with desktop publishing software like Aldus 
                            PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="carousel-main-container">
                <div
                className="carousel-container">
                    <Slider slidesToShow={2} dots={true}>
                        <div className="carouse-image-container">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image" alt="carousel" /> 
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image" alt="carousel"/> 
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image" alt="carousel" /> 
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="advanced-technology-container">
                <div className="technology-container">
                    <h1 
                    //   variants={fadeIn("up",0.2)}
                    //   initial="hidden"
                    //   whileInView={"show"} 
                    //   viewport={{once:false,amount:0.7}}
                    className="technology-heading"> Advanced technology  </h1>
                    <ul 
                    //    variants={fadeIn("left",0.2)}
                    //    initial="hidden"
                    //    whileInView={"show"} 
                    //    viewport={{once:false,amount:0.7}}
                    className="technology-image-container">
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821962/Group_35_omdaot.png" className="technology-image" alt="technology" /> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821978/Group_33_vezqku.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821985/Group_34_suumxj.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821991/Frame_75_f6x4wd.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822007/Frame_81_a5jpqg.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822019/Group_42_zlmhft.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822047/Frame_78_aowdrw.png" className="technology-image" alt="technology"/> </li> 
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716960861/Group_40_xnfeqo.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822024/Group_41_bg4y9y.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822028/Group_37_i2efmt.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822033/Group_38_ivucnp.png" className="technology-image" alt="technology"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822038/Frame_80_pdyuay.png" className="technology-image" alt="technology"/> </li>
                    </ul>
                </div>
            </div> 
            <div className="fotter-main-container">
                <div className="fotter-container">
                    <p className="fotter-item"> About </p> 
                    <p> Contact us </p> 
                    <p> Help </p> 
                    <p> Privacy Policy </p> 
                    <p> Disclaimer </p>
                </div> 
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716823946/Frame_21_h2k2dv.png" alt="social icon" /> 
                </div>
            </div>

         </div>
         
        </>
    )
} 

export default LandingPage 