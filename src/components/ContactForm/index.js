import {Component} from "react"
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
                                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1717153740/Group_1000001067_bv24vj.svg" className="google-image" alt="google-map" /> 
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
                        <p className="fotter-item"> About </p> 
                        <p> Contact us </p> 
                        <p> Help </p> 
                        <p> Privacy Policy </p> 
                        <p> Disclaimer </p>
                    </div> 
                    <div>
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716823946/Frame_21_h2k2dv.png" alt="socila icon" /> 
                    </div>
                </div>
            </div>
            </>
        )
    }
} 

export default ContactForm