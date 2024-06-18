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
                       className="dental-heading"> Dental Excellence and Facial Aesthetics in North East Delhi </h1> 
                       <Link to="contact">
                       <button className="dental-request-btn">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716794382/Vector_lisqvz.png" alt="call" /> 
                        <p className="button-request-para"> Request a Call Back </p>
                    </button>
                       </Link>
                </div>
                <div className="dental-icon-container fade-in-right">
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798342/Group_29_ojuwub.png" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798605/Group_eohm2k.png" className="social-icon-twitter" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798610/linkedin_black.1_gujvxm.png" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798613/youtube_color.1_v6eavf.png" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798618/instagram_black.1_nxeb7h.png" className="social-icon" alt="social media"/> 
                    </Link>
                </div>
                
            </div>
            
            <div className="booking-appointment-container">
                <div className="booking-section-button fade-in-right">
                    <Link to="/contact">
                        <button className='econsult-button'>  
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717742965/Vector_j49jtd.svg" className='econsult-icon'/> 
                            <p className='econsult-para'> E-Consult </p>
                        </button>
                    </Link>
                    <Link to="contact">
                        <button className='econsult-button'>  
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717742956/pajamas_smile_zyxchc.svg" className='econsult-icon' /> 
                            <p className='econsult-para'> Analyze your smile </p>
                        </button>
                    </Link>

                </div>
            </div>

            <div className="dental-checking-container">
                <div className="checking-container">
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717742943/Image_rev2zb.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Your <span className='consult-safety-span'> safety  </span>is our priority </h1>
                            <p className='consult-image-para'> 3 step <span className='consult-safety-span'> sterilization </span> protocol to be 100% sure that you are completely safe. </p>
                        </div>
                    </div>
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717742936/Image_1_rwbgis.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> We’re there when you need us the most  </h1>
                            <p className='consult-image-para'> <span className='consult-safety-span'> 24X7 </span> personalized assistance through a round-the-clock helpline number. </p>
                        </div>
                    </div>
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717742919/Young_family_with_child_posing_on_an_abandoned_building_jmwnpa.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Personalized care for you and your family </h1>
                            <p className='consult-image-para'> Our dedicated patient care executives who know your needs well.  </p>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="about-main-container">
                <div className="about-container">
                    <img
                            // variants={fadeIn("up", 0.2)} 
                            // initial="hidden"
                            // whileInView={"show"} 
                            // viewport={{once:false,amount:0.7}}
                            src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716809273/Group_1_vuhw7m.png" className="about-image" alt="about" /> 
                    <div className="about-info-container">
                        <h1 className="about-heading"> About us  </h1> 
                        <p className="about-para"> Tech Smiles Dentistry & Facial Aesthetics offers comprehensive dental and facial care in Shahdara, northeast Delhi, India. With expert and experienced dental and facial aesthetics specialists, our services include general dentistry and facial aesthetics, aiming to improve your oral health and appearance. Tech Smiles provides the best dental treatment, emphasizing quality, safety, cleanliness, and personalized care. We provide all types of dental treatment including dental implants, emergency dental care, orthodontist, veneers, tooth whitening, and painless root canal treatment among others
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
                    <Link to="/contact">
                        <p className="fotter-item"> About </p>
                    </Link>
                    <Link to="/contact">
                        <p className="fotter-item"> Contact us </p> 
                    </Link> 
                    <Link to="/contact">
                        <p className="fotter-item"> Help </p>
                    </Link>
                    <Link to="/contact">
                        <p className="fotter-item"> Privacy Policy </p>
                    </Link> 
                    <Link to="/contact">
                        <p className="fotter-item"> Disclaimer </p>
                    </Link>
                </div> 
                <div className="fotter-icon-container">
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717858554/Group_29_k6vaae.svg" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717858547/prime_twitter_msmoy0.svg" className="social-icon-twitter" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717858540/linkedin_black.1_bmghhe.svg" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact"> 
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717858534/youtube_color.1_x2nw6g.svg" className="social-icon" alt="social media"/> 
                    </Link>
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717858528/instagram_black.1_cpyusj.svg" className="social-icon" alt="social media"/> 
                    </Link>
                </div>
            </div>

         </div>
         
        </>
    )
} 

export default LandingPage 