import { Link } from "react-router-dom"
import Navbar from "../Navbar"
import "./index.css" 

const DentalImplants =()=>{
    return (
        <>
        <Navbar />
        <div className="landing-main-container">
            <div className="dental-implants-main-container">
                <div className="dental-implants-container">
                    <h1 className="dental-implants-heading"> Tech Smiles Dentistry & Facial Esthetics:</h1>
                    <p className="dental-implants-para">High Quality Dental Implants in Delhi/NCR</p> 
                    <p className="dental-implants-description"> Welcome to Tech Smiles Dentistry & Facial Esthetics, where we merge technology with personalized care to redefine dental wellness. Our clinic, located in Delhi/NCR, is a sanctuary for those seeking excellence in dental implants. With a commitment to quality and patient satisfaction, we offer a range of implant solutions tailored to your unique needs. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869453/unsplash_7lBJaJpS3z4_gvvi30.png" className="dental-implants-image" alt="dental" /> 
                </div>
            </div>
            <div className="dental-implants-main-container">
                <div className="order1">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869448/unsplash_8BkF0sTC6Uo_rd4qbh.png" className="dental-implants-image" alt="dental"/> 
                </div>
                <div className="dental-implants-container order2">
                    <h1 className="dental-implants-heading"> Single Tooth Implants: The Art of Precision </h1>
                    <p className="dental-implants-description"> Losing a single tooth can be a distressing experience, affecting not just your smile but also your oral health. Our single tooth implants are the epitome of precision and aesthetics. Our expert implantologists ensure that your implant treatment is designed so that your implants blend seamlessly with your natural teeth. Crafted from biocompatible materials, these implants provide a durable and permanent solution to tooth loss.</p> 
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

            <div className="dental-implants-main-container">
                <div className="dental-implants-container">
                    <h1 className="dental-implants-heading">Multiple Implants:</h1>
                    <p className="dental-implants-para"> A Symphony of Restoration </p>
                    <p className="dental-implants-description">For those who have lost more than one tooth, multiple implants offer a harmonious restoration. Unlike traditional dentures, multiple implants are anchored securely in your jawbone, providing unmatched stability and a natural feel. They are the cornerstone of oral rehabilitation, restoring both function and aesthetics. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869441/unsplash_Pc0ToyoR5Xo_meyt77.png" className="dental-implants-image" alt="dental"/> 
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

            <div className="dental-implants-main-container">
                <div className="order1">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869434/unsplash_NtyeAi5JeQU_srkuoc.png" className="dental-implants-image" alt="dental"/>
                </div>
                <div className="dental-implants-container order2">
                    <h1 className="dental-implants-heading"> All on 4 Implants: </h1>
                    <p className="dental-implants-para"> Innovation Meets Functionality  </p> 
                    <p className="dental-implants-description"> The All on 4 treatment concept is a groundbreaking solution for full-arch restoration. By strategically placing four implants, we create a foundation for a full set of prosthetic teeth. This technique not only maximizes the use of available bone but also allows for immediate function and aesthetics. </p> 
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
            <div className="dental-implants-main-container">
                <div className="dental-implants-container">
                    <h1 className="dental-implants-heading"> All on 6/8 Implants: </h1>
                    <p className="dental-implants-para"> The Ultimate in Stability</p> 
                    <p className="dental-implants-description"> When it comes to extensive tooth loss, the All on 6/8 implants system provides the ultimate in stability and support. Utilizing 6 to 8 implants, this method ensures even distribution of force across the jaw, offering a secure and comfortable fit for your prosthetic teeth. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869406/unsplash_1AhGNGKuhR0_glvoc0.png" className="dental-implants-image" alt="dental"/> 
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

            <div className="dental-implants-main-container">
                <div className="order1">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869434/unsplash_NtyeAi5JeQU_srkuoc.png" className="dental-implants-image" alt="dental"/> 
                </div>
                <div className="dental-implants-container order2">
                    <h1 className="dental-implants-heading"> Micro Implants: </h1>
                    <p className="dental-implants-para"> Small in Size, Big on Impact</p> 
                    <p className="dental-implants-description"> Micro implants are a testament to the precision of modern dentistry. These diminutive yet powerful devices are perfect for mouths where the bone is narrower or closer to vital structures. These implants also sometimes serve as stable anchors in orthodontic treatments, facilitating controlled tooth movement. They are particularly beneficial in complex cases where traditional methods fall short. </p> 
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
            <div className="dental-implants-main-container">
                <div className="dental-implants-container">
                    <h1 className="dental-implants-heading"> Bone Grafting for Implants: </h1>
                    <p className="dental-implants-para"> Building a Strong Foundation </p> 
                    <p className="dental-implants-description"> Adequate bone density is crucial for the success of some dental implants. Bone grafting is a preparatory procedure that augments the jawbone, providing a robust foundation for implant placement. Our expert team ensures that this process is as comfortable and effective as possible, setting the stage for a successful implantation. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874734/unsplash_fmB7IdFjhTM_1_d5dltx.png" className="dental-implants-image" alt="dental"/> 
                </div>
            </div>
            <div className="cosmetic-bottom-main-container">
                <div className="cosmetic-bottom-container">
                    <p className="bottom-para"> At Tech Smiles Dentistry & Facial Esthetics, we are not just practitioners; we are artisans of dental health. Our team of experts is dedicated to ensuring that each patient receives care that is both technologically advanced and deeply empathetic. We invite you to experience the Tech Smiles difference, where every treatment is a step towards a brighter, healthier future </p>
                    <span className="botton-span-crown-para"> Embrace the future of dental health with Tech Smiles. Contact Us today to schedule your appointment and join the ranks of our satisfied patients. </span>
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

export default DentalImplants 