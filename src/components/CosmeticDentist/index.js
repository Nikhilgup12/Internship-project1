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
                <div className="cosmetic-knowmore-container">
                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Know more </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> about our veneers and how they can transform your smile. </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Book an Appointment  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> to consult with our cosmetic dentistry experts.</p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Request a Call Back  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> to discuss your veneer options with our team.  </p>
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
                <div className="cosmetic-knowmore-container">
                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Learn More </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon '/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> about our tooth whitening process and what to expect.  </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Schedule Your Session  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> for a brighter, more confident smile.</p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Request a Call Back  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> for personalized advice on tooth whitening.  </p>
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
                <div className="cosmetic-knowmore-container">
                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Discover More </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> about gum depigmentation and its benefits. </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Book Your Consultation   </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> with our skilled dental professionals. </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Request a Call Back  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> for more information on this transformative treatment.  </p>
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
                <div className="cosmetic-knowmore-container">
                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Know More </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon '/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> about correcting a gummy smile..  </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Book an Appointment  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> for a consultation and see the potential of your smile.</p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button white-button'> 
                                <p className='cosmetic-know-para white'> Request a Call Back  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717764062/Vector_1_rrgvpl.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para white"> to learn if gummy smile treatment is right for you.  </p>
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
                <div className="cosmetic-knowmore-container">
                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'>Discover More</p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> about our gap closure solutions. </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Book an Appointment  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> to explore your options. </p>
                    </div>

                    <div className="cosmetic-know-container"> 
                        <Link to="/contact">
                            <button className='cosmetic-knowmore-button'> 
                                <p className='cosmetic-know-para'> Request a Call Back  </p> 
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717752230/Arrow_-_Right_2_cm9ubu.png" className='cosmetic-arrow-icon'/> 
                            </button>
                        </Link>
                        <p className="cosmetic-knowmore-para"> for guidance on closing gaps between your teeth.  </p>
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
                <div className="checking-container">
                    <div className='checking-consult-container cosmetic-checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717765564/unsplash_QA9fRIi6sFw_jj27ls.png" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Expertise</h1>
                            <p className='consult-image-para'> Our cosmetic dentists are renowned for their skill and attention to detail.  </p>
                        </div>
                    </div>
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717765558/Image_2_yitakf.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Personalization:  </h1>
                            <p className='consult-image-para'> We tailor every treatment to meet your individual needs and desires. </p>
                        </div>
                    </div>
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717765552/Image_3_rvewks.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Comfort</h1>
                            <p className='consult-image-para'>Your comfort is our top priority, and we strive to make your experience as relaxing as possible.  </p>
                        </div>
                    </div>
                    <div className='checking-consult-container'>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717765542/Image_4_rqoitg.svg" className='checking-consult-image'/>
                        <div className='checking-consult-info-image-container'>
                            <h1 className='consult-image-heading'> Results </h1>
                            <p className='consult-image-para'> We’re dedicated to delivering stunning results that exceed your expectations.  </p>
                        </div>
                    </div>
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

export default CosmeticDentist  
