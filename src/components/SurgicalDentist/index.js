import {Link} from "react-router-dom"
import Navbar from "../Navbar"
import "./index.css" 

const SurgicalDentist =()=>{
    return (
        <>
        <Navbar /> 
        <div className="landing-main-container">
            <div className="surgical-dentist-main-container">
                <div className="surgical-dentist-container">
                    <h1 className="surgical-dentist-heading"> Surgical Dentistry at Tech Smiles:  </h1>
                    <p className="surgical-dentist-para"> Precision Meets Compassion </p> 
                    <p className="surgical-dentist-description"> Tech Smiles Dentistry & Facial Esthetics is at the forefront of surgical dentistry in Delhi/NCR, offering a suite of advanced procedures designed to address complex dental issues. Our surgical dentistry services encompass a range of treatments from wisdom tooth extraction to corrective jaw surgery, all performed with the utmost precision and care. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869453/unsplash_7lBJaJpS3z4_gvvi30.png" className="surgical-dentist-image" alt="surgical" /> 
                </div>
            </div>
            <div className="surgical-dentist-main-container">
                <div className="order1">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869448/unsplash_8BkF0sTC6Uo_rd4qbh.png" className="surgical-dentist-image" alt="surgical"/> 
                </div>
                <div className="surgical-dentist-container order2">
                    <h1 className="surgical-dentist-heading"> Wisdom Tooth Extraction </h1>
                    <p className="surgical-dentist-description">Impacted or problematic wisdom teeth can cause pain and lead to infection. Our expert oral surgeons employ minimally invasive techniques to remove wisdom teeth, ensuring a swift and comfortable recovery. </p> 
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
            <div className="surgical-dentist-main-container">
                <div className="surgical-dentist-container">
                    <h1 className="surgical-dentist-heading"> Dental Implants </h1>
                    <p className="surgical-dentist-para"> Crafting Your Dream Smile in Delhi/NCR </p> 
                    <p className="surgical-dentist-description">Dental implants are the gold standard for tooth replacement, providing a permanent solution that mimics the look, feel, and function of natural teeth. Our state-of-the-art implant procedures restore smiles and confidence. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869441/unsplash_Pc0ToyoR5Xo_meyt77.png" className="surgical-dentist-image" alt="surgical" /> 
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

export default SurgicalDentist