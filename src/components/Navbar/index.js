
import { Component } from "react";
// import {Link} from 'react-router-dom' 
import { motion} from "framer-motion";
import { fadeIn } from "../../variants"; 
import {GiHamburgerMenu} from 'react-icons/gi'
import NavbarMobile from "../NavbarMobile"
import "./index.css"

class Navbar extends Component{ 
    state = {isNavbar:false} 

    onToggleNavbar=()=>{
        this.setState((prevState)=>({
            isNavbar : !prevState.isNavbar
        }))
    } 
    
    render(){
        const {isNavbar}= this.state 
        return (
            <>
            <nav className="nav-container">
                <div className="nav-content">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716791514/Logo_Main_srbevk.png" class="nav-logo-mobile" alt="organic-store" />
                <div className="nav-mobile-logo">
                    <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716791514/Logo_Main_srbevk.png" class="nav-logo" alt="organic-store" /> 
                </div> 
                <ul className="nav-item-list">
                    <li className="nav-item"> About </li>
                    <li className="nav-item"> Dental Treatments </li>
                    <li className="nav-item"> Facial Aesthetics   </li>
                </ul> 
                <ul className="nav-icon-list">
                    <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792164/Frame_5_brxnq4.png" className="book-appointment-logo"/> </li> 
                    <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792258/ic_baseline-call_hgiarf.png" /> </li> 
                    <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792250/mingcute_whatsapp-line_zvktiy.png" /> </li>  
                </ul>
            <div> 
                <button onClick={this.onToggleNavbar}  className="nav-section-mobile-list"> <GiHamburgerMenu size={20}/> </button>
            </div>
        </div>
     </nav>
     {isNavbar && <NavbarMobile closeNavbar={this.onToggleNavbar} />}
    </>
      )
    }
}
    


export default Navbar

// import { Component } from "react";
// import { motion } from "framer-motion";
// import { GiHamburgerMenu } from 'react-icons/gi';
// import NavbarMobile from "../NavbarMobile";
// import "./index.css";

// class Navbar extends Component {
//     state = { isNavbar: false };

//     onToggleNavbar = () => {
//         this.setState((prevState) => ({
//             isNavbar: !prevState.isNavbar
//         }));
//     };

//     render() {
//         const { isNavbar } = this.state;
//         const variants = {
//             open: { opacity: 1, x: 0 },
//             closed: { opacity: 0, x: "-100%" }
//         }

//         return (
//             <>
//                 <motion.nav
//                     initial={false}
//                     animate={isNavbar ? "open" : "closed"}
//                     variants={variants}
//                     className="nav-container"
//                 >
//                     <div className="nav-content">
//                         <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716791514/Logo_Main_srbevk.png" className="nav-logo-mobile" alt="organic-store" />
//                         <div className="nav-mobile-logo">
//                             <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716791514/Logo_Main_srbevk.png" className="nav-logo" alt="organic-store" />
//                         </div>
//                         <ul className="nav-item-list">
//                             <li className="nav-item"> About </li>
//                             <li className="nav-item"> Dental Treatments </li>
//                             <li className="nav-item"> Facial Aesthetics </li>
//                         </ul>
//                         <ul className="nav-icon-list">
//                             <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792164/Frame_5_brxnq4.png" className="book-appointment-logo" /> </li>
//                             <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792258/ic_baseline-call_hgiarf.png" /> </li>
//                             <li> <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792250/mingcute_whatsapp-line_zvktiy.png" /> </li>
//                         </ul>
//                         <div>
//                             <button onClick={this.onToggleNavbar} className="nav-section-mobile-list"> <GiHamburgerMenu size={20} /> </button>
//                         </div>
//                     </div>
//                 </motion.nav>
//                 {isNavbar && <NavbarMobile closeNavbar={this.onToggleNavbar} />}
//             </>
//         )
//     }
// }

// export default Navbar

