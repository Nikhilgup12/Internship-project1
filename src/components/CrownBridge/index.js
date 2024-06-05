import {Link} from "react-router-dom"
import Navbar from "../Navbar"
import "./index.css" 

const CrownBridge =()=>{
    return (
        <>
        <Navbar /> 
        <div className="landing-main-container">
            <div className="crown-main-container">
                <div className="crown-container">
                    <h1 className="crown-heading"> Crown & Bridges </h1>
                    <p className="crown-para">  Restorative Excellence at Tech Smiles Dentistry </p> 
                    <p className="crown-description"> At Tech Smiles Dentistry & Facial Esthetics, we specialize in restoring smiles with the highest quality crown and bridge work. Our expert team in Delhi/NCR is dedicated to providing you with restorative treatments that not only improve the function of your teeth but also enhance their aesthetic appeal. </p> 
                </div>
                <div>
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716869453/unsplash_7lBJaJpS3z4_gvvi30.png" className="crown-image" alt="crown" /> 
                </div>
            </div>
            <div className="crown-inventors-main-container">
                <div className="crown-inventors-container">
                    <h1 className="crown-inventors-heading"> What Are Crowns & Bridges? </h1> 
                    <p className="crown-inventors-para"> Crowns are protective covers for damaged or weakened teeth. They are custom-made to fit over the entire tooth, starting at the gum line, to restore its shape, size, strength, and appearance. Bridges, on the other hand, are used to replace one or more missing teeth by anchoring onto neighboring teeth or dental implants. </p>
                </div>
            </div>
            <div className="crown-unordered-list-main-container">
                <div className="crown-unordered-list-container">
                    <h1 className="crown-unorderd-heading"> Where Are They Used? </h1> 
                    <p className="crown-unorderd-para"> Crowns and bridges are versatile solutions used in various situations: </p> 
                    <ul className="crown-unordered-list">
                        <li> To protect a weak tooth from breaking or to hold together parts of a cracked tooth. </li> 
                        <li> To cover and support a tooth with a large filling when there isn’t much tooth left. </li> 
                        <li> To cover misshapen or severely discolored teeth. </li>
                        <li> To cover a dental implant. </li>
                        <li> To make a cosmetic modification. </li>
                    </ul>
                </div>
            </div>
            <div className="crown-bridge-main-container">
                <div className="crown-bridge-container">
                    <h1 className="crown-bridge-heading"> Types of Crowns & Bridges</h1> 
                    <p className="crown-bridge-para">at Tech Smiles, we offer a variety of materials for crowns and bridges, each with its own benefits. </p>
                </div>
            </div>
            <div className="crown-type-main-container"> 
                <div className="crwon-type-container">
                    <div className="crown-metal-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879432/Image_wtxrlh.png" className="crown-metal-image" alt="crown" /> 
                        <div className="crwon-metal-info-container">
                        <h1 className="crown-metal-heading"> Metal Crowns </h1> 
                        <p className="crown-metal-para"> Metal crowns are known for their durability and high strength, making them ideal for restoring back teeth where the chewing pressure is greatest. They require less tooth removal than other types of crowns and rarely chip or break1.</p>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879359/Frame_37_jpusq5.png" className="crown-metal-learn-image" alt="learn" /> 
                        </Link>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png" className="crown-metal-opp-image" alt="book" /> 
                        </Link>
                        </div>
                    </div>
                    <div className="crown-metal-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879379/Image_1_ndmfgt.png" className="crown-metal-image" alt="crown" /> 
                        <div className="crwon-metal-info-container">
                        <h1 className="crown-metal-heading"> Ceramic Crowns </h1> 
                        <p className="crown-metal-para"> Ceramic crowns are popular for their natural color and texture, which closely mimic that of your own teeth. They are highly biocompatible and an excellent choice for front teeth restorations2..</p>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879359/Frame_37_jpusq5.png" className="crown-metal-learn-image" alt="learn" /> 
                        </Link>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png" className="crown-metal-opp-image" alt="book" /> 
                        </Link>
                        </div>
                    </div>
                    <div className="crown-metal-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879366/Image_2_mmwoza.png" className="crown-metal-image" alt="crown" /> 
                        <div className="crwon-metal-info-container">
                        <h1 className="crown-metal-heading"> PFM (Porcelain Fused to Metal) Crowns</h1> 
                        <p className="crown-metal-para"> PFM crowns offer the strength of metal with the aesthetic of porcelain. They are a great choice for both front and back teeth, providing a good balance between durability and appearance3. </p>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879359/Frame_37_jpusq5.png" className="crown-metal-learn-image" alt="learn" /> 
                        </Link>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png" className="crown-metal-opp-image" alt="book" /> 
                        </Link>
                        </div>
                    </div>
                    <div className="crown-metal-container">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879362/Close_up_on_dentist_instruments_u2nh0g.png" className="crown-metal-image" alt="crown" /> 
                        <div className="crwon-metal-info-container">
                        <h1 className="crown-metal-heading">Zirconia Crowns </h1> 
                        <p className="crown-metal-para"> Zirconia crowns are the strongest type of ceramic crowns available. They are highly durable and have excellent biocompatibility. Zirconia crowns are suitable for both front and back teeth restorations4. </p>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716879359/Frame_37_jpusq5.png" className="crown-metal-learn-image" alt="learn" /> 
                        </Link>
                        <Link to="/contact">
                            <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716800189/Frame_5_2_dcdrnx.png" className="crown-metal-opp-image" alt="book" /> 
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cosmetic-bottom-main-container">
                <div className="cosmetic-bottom-container">
                    <p className="bottom-para">At Tech Smiles Dentistry & Facial Esthetics, we are committed to using advanced technology and materials to provide you with the best dental care. Our crown and bridge treatments are tailored to meet your specific needs, ensuring a perfect blend of function and aesthetics.. </p>
                    <p className="botton-span-crown-para"> Ready to restore your smile? . </p> 
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
                <div>
                    <Link to="/contact">
                        <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716823946/Frame_21_h2k2dv.png" alt="social icon" /> 
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default CrownBridge 