import {Link} from "react-router-dom"
// import { motion} from "framer-motion";
// import { fadeIn } from "../../variants";

import Navbar from "../Navbar"
import "./index.css" 
// import { GiLongLeggedSpider } from "react-icons/gi"

const CosmeticDentist  =()=>{
    // const scrollRef = useRef(null)
    return (
        <>
        <Navbar /> 
        <div className="landing-main-container">
            
            <div className="cosmetic-main-container">
                <div 
                //   variants={fadeIn("up",0.2)}
                //   initial="hidden"
                //   whileInView={"show"} 
                //   viewport={{once:false,amount:0.7}}
                className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Cosmetic Dentistry at Tech Smiles </h1>
                    <p className="cosmetic-para"> Crafting Your Dream Smile in Delhi/NCR </p> 
                    <p className="cosmetic-description"> Welcome to Tech Smiles Dentistry & Facial Esthetics, where we believe that a beautiful smile is the key to unlocking a world of confidence and opportunity. Our cosmetic dentistry services in Delhi/NCR are designed to enhance your natural beauty and give you the smile you’ve always dreamed of. </p> 
                </div>
                <div>

                    <img 
                    // initial={{ x: 100, opacity: 0 }}
                    // whileInView={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 0.5 }}
                    
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869453/unsplash_7lBJaJpS3z4_gvvi30.png" className="cosmetic-image" alt="cosmetic" /> 
                </div>
            </div>
            <div className="cosmetic-main-container">
                <div className="order1">
                    <img 
                    //  initial={{ scale: 0.8, rotate: 0 }}
                    //  whileInView={{ scale: 1, rotate: 360 }}
                    //  transition={{ duration: 1 }}
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869448/unsplash_8BkF0sTC6Uo_rd4qbh.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
                <div 
                //   initial={{ x: -100, opacity: 0 }}
                //   whileInView={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5 }}
                // variants={{
                //     hidden: { opacity: 0, x: -100 },
                //     show: { opacity: 1, x: 0 }
                //   }}
                //   initial="hidden"
                //   whileInView="show"
                //   transition={{ duration: 0.5 }}
                className="cosmetic-container order2">
                    <h1 className="cosmetic-heading"> Dental Veneers & Laminates </h1>
                    <p className="cosmetic-description">Dental veneers and laminates are your secret to a celebrity-like smile. These thin, custom-made shells are designed to cover the front surface of your teeth, correcting a variety of dental imperfections such as discoloration, chips, or gaps. Our veneers are crafted from the finest materials to ensure a natural look and a perfect fit.</p> 
                </div>
            </div>
            
            <div className="cosmetic-information-container">
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                 
                className="cossmetic-info-button">
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873218/Frame_39_jfvxcu.png" className="cosmetic-booking-button" alt="know more"/> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873213/Frame_40_v8bq08.png"  className="cosmetic-booking-button" alt="know more"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873210/Frame_41_jlvtba.png" className="cosmetic-booking-button" alt="know more"/> 
                        </Link>
                    </div>
                </div>
            </div> 
            <div className="cosmetic-main-container">
                <div 
                //    initial={{ x: -100, opacity: 0 }}
                //    whileInView={{ x: 0, opacity: 1 }}
                //    transition={{ duration: 0.5 }}
                className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Brilliant Tooth Whitening  </h1>
                    <p className="cosmetic-description"> Our tooth whitening services are here to restore the brilliance of your smile. Using the latest techniques and safest bleaching agents, we can lighten your teeth by several shades, ensuring a bright and attractive smile that stands out in any crowd.</p> 
                </div>
                <div>
                    <img 
                    //  initial={{ x: 100, opacity: 0 }}
                    //  whileInView={{ x: 0, opacity: 1 }}
                    //  transition={{ duration: 0.5 }}                     
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869441/unsplash_Pc0ToyoR5Xo_meyt77.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
            </div>
            <div className="cosmetic-information-container one">
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                 
                className="cossmetic-info-button">
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874376/Frame_39_1_qzj9tv.png" className="cosmetic-booking-button" alt="learn more" /> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874390/Frame_40_1_kmxiau.png"  className="cosmetic-booking-button" alt="learn more"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874395/Frame_41_1_igoxqt.png" className="cosmetic-booking-button" alt="learn more"/> 
                        </Link>
                    </div>
                </div>
            </div> 
            <div className="cosmetic-main-container">
                <div className="order1">
                    <img 
                    //  initial={{ x: -100, opacity: 0 }}
                    //  whileInView={{ x: 0, opacity: 1 }}
                    //  transition={{ duration: 0.5 }}
                     
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869434/unsplash_NtyeAi5JeQU_srkuoc.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
                <div 
                //    initial={{ x: 100, opacity: 0 }}
                //    whileInView={{ x: 0, opacity: 1 }}
                //    transition={{ duration: 0.5 }}
                className="cosmetic-container order2">
                    <h1 className="cosmetic-heading"> Gum Depigmentation </h1>
                    <p className="cosmetic-description">Gum depigmentation is a cosmetic procedure that removes dark spots and uneven colouring from the gums, resulting in a more uniform and aesthetically pleasing appearance. Our gentle laser treatment is quick, virtually painless, and provides long-lasting results.</p> 
                </div>
            </div>
            <div className="cosmetic-information-container">
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                 
                className="cossmetic-info-button">
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873218/Frame_39_jfvxcu.png" className="cosmetic-booking-button" alt="know more" /> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873213/Frame_40_v8bq08.png"  className="cosmetic-booking-button" alt="know more"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873210/Frame_41_jlvtba.png" className="cosmetic-booking-button" alt="know more"/> 
                        </Link>
                    </div>
                </div>
            </div> 
            <div className="cosmetic-main-container">
                <div 
                //   initial={{ x: -100, opacity: 0 }}
                //   whileInView={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5 }}
                className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Gummy Smile Treatment </h1>
                    <p className="cosmetic-description"> A gummy smile can overshadow even the most beautiful teeth. Our gummy smile treatment reshapes the gum line to reveal more of your teeth, creating a balanced and harmonious smile. This  procedure can have a dramatic impact on your overall appearance.</p> 
                </div>
                <div>
                    <img 
                    //  initial={{ x: 100, opacity: 0 }}
                    //  whileInView={{ x: 0, opacity: 1 }}
                    //  transition={{ duration: 0.5 }}                     
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869406/unsplash_1AhGNGKuhR0_glvoc0.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
            </div>
            <div className="cosmetic-information-container one">
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                 
                className="cossmetic-info-button">
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874376/Frame_39_1_qzj9tv.png" className="cosmetic-booking-button" alt="learn more" /> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874390/Frame_40_1_kmxiau.png"  className="cosmetic-booking-button" alt="learn more"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874395/Frame_41_1_igoxqt.png" className="cosmetic-booking-button" alt="learn more"/> 
                        </Link>
                    </div>
                </div>
            </div>
            <div className="cosmetic-main-container">
                <div className="order1">
                    <img 
                    // initial={{ x: -100, opacity: 0 }}
                    // whileInView={{ x: 0, opacity: 1 }}
                    // transition={{ duration: 0.5 }}                    
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869434/unsplash_NtyeAi5JeQU_srkuoc.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
                <div 
                //   initial={{ x: 100, opacity: 0 }}
                //   whileInView={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5 }}
                className="cosmetic-container order2">
                    <h1 className="cosmetic-heading"> Seamless Teeth-Gap Closure  </h1>
                    <p className="cosmetic-description"> Gum depigmentation is a cosmetic procedure that removes dark spots and uneven colouring from the gums, resulting in a more uniform and aesthetically pleasing appearance. Our gentle laser treatment is quick, virtually painless, and provides long-lasting results. </p> 
                </div>
            </div>
            <div className="cosmetic-information-container">
                <div 
                //  initial={{ x: 100, opacity: 0 }}
                //  whileInView={{ x: 0, opacity: 1 }}
                //  transition={{ duration: 0.5 }}
                 
                className="cossmetic-info-button">
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873218/Frame_39_jfvxcu.png" className="cosmetic-booking-button" alt="know more" /> 
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873213/Frame_40_v8bq08.png"  className="cosmetic-booking-button" alt="know more"/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873210/Frame_41_jlvtba.png" className="cosmetic-booking-button" alt="know more"/> 
                        </Link>
                    </div>
                </div>
            </div> 
            <div className="cosmetic-main-container">
                <div 
                //   initial={{ x: -100, opacity: 0 }}
                //   whileInView={{ x: 0, opacity: 1 }}
                //   transition={{ duration: 0.5 }}
                className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Why Choose Tech Smiles for Cosmetic Dentistry?  </h1>
                    
                    <p className="cosmetic-description"> At Tech Smiles, we combine technical expertise with an artistic touch to provide you with exceptional cosmetic dentistry services. Our team is committed to excellence, and we use only the highest quality materials and state-of-the-art technology to ensure the best outcomes for our patients. </p> 
                </div>
                <div>
                    <img 
                    //  initial={{ x: 100, opacity: 0 }}
                    //  whileInView={{ x: 0, opacity: 1 }}
                    //  transition={{ duration: 0.5 }}                     
                    src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874734/unsplash_fmB7IdFjhTM_1_d5dltx.png" className="cosmetic-image" alt="cosmetic"/> 
                </div>
            </div>
            <div className="dental-checking-container">
                <div 
                //    initial={{ x: -100, opacity: 0 }}
                //    whileInView={{ x: 0, opacity: 1 }}
                //    transition={{ duration: 0.5 }}
                className="checking-container">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874907/8_1_kp4d6h.png" className="cosmetic-section-image" alt="cosmetic section" />  
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874898/10_1_hprbch.png"  className="cosmetic-section-image" alt="cosmetic section"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874894/11_otx7ol.png" className="cosmetic-section-image" alt="cosmetic section"/> 
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874889/9_1_b0ovla.png" className="cosmetic-section-image" alt="cosmetic section"/> 
                </div>
            </div>  
            <div className="cosmetic-bottom-main-container">
                <div className="cosmetic-bottom-container">
                    <p 
                    //  initial={{ x: 100, opacity: 0 }}
                    //  whileInView={{ x: 0, opacity: 1 }}
                    //  transition={{ duration: 0.5 }}
                     
                    className="bottom-para"> <span className="botton-span-para"> Embrace the Art of a Beautiful Smile. </span> Are you ready to transform your smile with Tech Smiles? Contact us today to schedule your appointment and take the first step towards the smile you deserve. </p>
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

export default CosmeticDentist  
