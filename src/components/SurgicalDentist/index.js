import Navbar from "../Navbar"
import "./index.css" 

const SurgicalDentist =()=>{
    return (
        <>
        <Navbar /> 
         <div className="landing-main-container">
            <div className="cosmetic-main-container">
                <div className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Surgical Dentistry at Tech Smiles:  </h1>
                    <p className="cosmetic-para"> Precision Meets Compassion </p> 
                    <p className="cosmetic-description"> Tech Smiles Dentistry & Facial Esthetics is at the forefront of surgical dentistry in Delhi/NCR, offering a suite of advanced procedures designed to address complex dental issues. Our surgical dentistry services encompass a range of treatments from wisdom tooth extraction to corrective jaw surgery, all performed with the utmost precision and care. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869453/unsplash_7lBJaJpS3z4_gvvi30.png" className="cosmetic-image"/> 
                </div>
            </div>
            <div className="cosmetic-main-container">
                <div className="order1">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869448/unsplash_8BkF0sTC6Uo_rd4qbh.png" className="cosmetic-image"/> 
                </div>
                <div className="cosmetic-container order2">
                    <h1 className="cosmetic-heading"> Wisdom Tooth Extraction </h1>
                  
                    <p className="cosmetic-description">Impacted or problematic wisdom teeth can cause pain and lead to infection. Our expert oral surgeons employ minimally invasive techniques to remove wisdom teeth, ensuring a swift and comfortable recovery. </p> 
                </div>
            </div>
            <div className="cosmetic-information-container">
                <div className="cossmetic-info-button">
                    <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873218/Frame_39_jfvxcu.png" className="cosmetic-booking-button"/> 
                    </div>
                   <div>
                   <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873213/Frame_40_v8bq08.png"  className="cosmetic-booking-button"/>
                   </div>
                   <div>
                   <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716873210/Frame_41_jlvtba.png" className="cosmetic-booking-button" /> 
                   </div>
                </div>
            </div> 
            <div className="cosmetic-main-container">
                <div className="cosmetic-container">
                    <h1 className="cosmetic-heading"> Dental Implants </h1>
                    <p className="cosmetic-para"> Crafting Your Dream Smile in Delhi/NCR </p> 
                    <p className="cosmetic-description">Dental implants are the gold standard for tooth replacement, providing a permanent solution that mimics the look, feel, and function of natural teeth. Our state-of-the-art implant procedures restore smiles and confidence. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869441/unsplash_Pc0ToyoR5Xo_meyt77.png" className="cosmetic-image"/> 
                </div>
            </div>
            <div className="cosmetic-information-container one">
                <div className="cossmetic-info-button">
                    <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874376/Frame_39_1_qzj9tv.png" className="cosmetic-booking-button"/> 
                    </div>
                   <div>
                   <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874390/Frame_40_1_kmxiau.png"  className="cosmetic-booking-button"/>
                   </div>
                   <div>
                   <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716874395/Frame_41_1_igoxqt.png" className="cosmetic-booking-button" /> 
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
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716823946/Frame_21_h2k2dv.png" /> 
                </div>
            </div>
         </div>
        </>
    )
} 

export default SurgicalDentist