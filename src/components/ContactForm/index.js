import {Component} from "react"
import { Link } from "react-router-dom";
import Navbar from "../Navbar"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./index.css" 

class ContactForm extends Component{

    onSubmitForm=(event)=>{
        event.preventDefault()
    }

    render(){
        return (
            <>
            <Navbar /> 
            <div className="contact-main-container">
                <div className="contact-container">
                    <div className="contact-header-container">
                        <h1 className="contact-header-heading"> Get in touch </h1>
                        <p className="contact-header-para"> Book an Appointment to treat your teeth right now. </p>
                    </div>
                    <div className="contact-form-main-container">
                        <div className="contact-form-schedule-container">
                            <div className="contact-google-map-image">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.339987685037!2d77.28251347475349!3d28.679474681948825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd97f9d13ef3%3A0xefaf51a91b9db2fe!2sTech%20Smiles%20Dentistry%20%26%20Facial%20Aesthetics!5e0!3m2!1sen!2sin!4v1717864112745!5m2!1sen!2sin"
                                 width="100%" height="300"  className="map-iframe-image" allowfullscreen="" 
                                 loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                </iframe> 
                                <div className="clinic-address-container">
                                    <div className="clock-office-container ">
                                        <div className="clock-icon-container clinic-location-map">
                                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717768386/pin_1_rw75yl.svg" className="clock-icon"/>
                                        </div>
                                    </div>
                                    <div className="clinic-detail-container">
                                        <p className="clinic-timing"> Clinic Address </p> 
                                        <p className="clinic-schedule">1/10577, Mohan Park, Pipal Chowk, Delhi</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form-clock-container">
                                <div className="clock-office-container">
                                    <div className="clock-icon-container">
                                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717768394/time_1_matfbf.svg" className="clock-icon"/>
                                    </div>
                                </div>
                                <div className="clock--detail-container">
                                    <p className="clock-timing"> Office Timings</p> 
                                    <p className="clock-schedule"> Monday - Saturday (9:00am to 5pm) Sunday (Closed)</p>
                                </div>
                            </div>
                            <div className="contact-form-clock-container">
                                <div className="clock-office-container">
                                    <div className="clock-icon-container">
                                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717768386/pin_1_rw75yl.svg"  className="clock-icon"/>
                                    </div>
                                </div>
                                <div className="clock--detail-container">
                                    <p className="clock-timing"> Emai Address </p> 
                                    <p className="clock-schedule">techsmile01@gmail.com </p>
                                </div>
                            </div>
                            <div className="contact-form-clock-container">
                                <div className="clock-office-container">
                                    <div className="clock-icon-container">
                                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717768378/telephone_1_1_ciqrhx.svg"  className="clock-icon"/>
                                    </div>
                                </div>
                                <div className="clock--detail-container">
                                    <p className="clock-timing">Phone Number </p> 
                                    <p className="clock-schedule"> 98187 91254 </p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form className="form" onSubmit={this.onSubmitForm}>
                                <div className="first-last-name-container">
                                    <div className="first-name-container">
                                        <label htmlFor="name" className="first-name-label"> First name </label> <br/> 
                                        <input type="text" placeholder="Firt name" id="name" className="first-name-input"/> 
                                    </div>
                                    <div className="first-name-container">
                                        <label htmlFor="surname"  className="first-name-label"> Last name </label> <br/> 
                                        <input type="text" placeholder="Last name" id="surname" className="first-name-input"/> 
                                    </div>
                                </div>
                                <div className="first-name-container">
                                        <label htmlFor="email" className="first-name-label"> Email </label> <br/> 
                                        <input type="email" placeholder="nik@gmail.com" id="email" className="first-name-input"/> 
                                </div>
                                <div className="first-name-container">
                                        <label htmlFor="phone" className="first-name-label" style={{ marginBottom: '10px' }}> Phone number </label> <br/> 
                                        <PhoneInput
                                            country={'in'}
                                            id="phone"
                                            inputStyle={{
                                                padding: '12px 16px',
                                                border: '1px solid #D0D5DD',
                                                borderRadius: '10px',
                                                marginTop: '10px',
                                                outline: 'none',
                                                width: '100%'
                                            }}
                                            placeholder="+91 0000 0000"
                                            
                                        />
                                </div>
                                <div className="first-name-container">
                                        <label htmlFor="email" className="first-name-label"> Select date  </label> <br/> 
                                        <input type="date" placeholder="nik@gmail.com" id="email" className="first-name-input"/> 
                                </div>
                                <div className="first-name-container">
                                        <label htmlFor="email" className="first-name-label"> Message  </label> <br/> 
                                        <textarea rows={10} cols={50} className="first-name-input"/> 
                                </div>
                                <div className="button-container">
                                    <button className="form-submit-button" type="submit"> Book an appointment</button>
                                </div>
                            </form>
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
} 

export default ContactForm