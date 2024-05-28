import Navbar from "../Navbar"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css" 

const LandingPage =()=>{
    return (
        <>
         <Navbar /> 
         <div className="landing-main-container">
            <div className="dental-main-container">
                <div className="dental-container">
                    <h1 className="dental-heading"> Discover a world where dental excellence meets facial artistry </h1> 
                    <button className="dental-request-btn">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716794382/Vector_lisqvz.png" /> 
                        <p className="button-request-para"> Request a Call Back </p>
                    </button>
                </div>
                <div className="dental-icon-container">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798342/Group_29_ojuwub.png" /> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798605/Group_eohm2k.png" /> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798610/linkedin_black.1_gujvxm.png" /> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798613/youtube_color.1_v6eavf.png" /> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716798618/instagram_black.1_nxeb7h.png" /> 
                </div>
            </div>
            <div className="booking-appointment-container">
                <div className="booking-section-button">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800161/Frame_3_aczcu8.png"  className="booking-appointment-logo"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800171/Frame_6_q1rjdz.png"  className="booking-appointment-logo"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png"  className="booking-appointment-logos"/> 
                </div>
            </div>
            <div className="dental-checking-container">
                <div className="checking-container">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803054/8_kg8ljm.png" className="checking-image"/>  
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803060/9_uhythc.png"  className="checking-image" /> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716803068/10_s16pvz.png" className="checking-images"/> 
                </div>
            </div>  
            <div className="about-main-container">
                <div className="about-container">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716809273/Group_1_vuhw7m.png" className="about-image"/> 
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
                <div className="carousel-container">
                    <Slider slidesToShow={2} dots={true}>
                        <div className="carouse-image-container">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image"/> 
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image"/> 
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716818529/Group_15_nkmwym.png" className="carousel-image" /> 
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="advanced-technology-container">
                <div className="technology-container">
                    <h1 className="technology-heading"> Advanced technology  </h1>
                    <ul className="technology-image-container">
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821962/Group_35_omdaot.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821978/Group_33_vezqku.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821985/Group_34_suumxj.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716821991/Frame_75_f6x4wd.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822007/Frame_81_a5jpqg.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822019/Group_42_zlmhft.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822024/Group_41_bg4y9y.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822028/Group_37_i2efmt.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822033/Group_38_ivucnp.png" className="technology-image"/> </li>
                        <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716822038/Frame_80_pdyuay.png" className="technology-image"/> </li>
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
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716823946/Frame_21_h2k2dv.png" /> 
                </div>
            </div>

         </div>
        </>
    )
} 

export default LandingPage 