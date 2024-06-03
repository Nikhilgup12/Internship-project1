
// import {Link} from 'react-router-dom' 
import "./index.css" 

const NavbarMobile = props => {
    const {closeNavbar} = props
    return (
      <>
        <nav className='navbar-mobile'> 
            <div className='nav-section'>
              <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt="user" className='nav-profile'/>
              <button onClick={closeNavbar} className='close-button'>&times;</button>
            </div>
            <div className='navbar-container'>
                <div className='nav-mobile-item'>
                    <p className='nav-menu-items'> About us  </p>
               
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Dental Treatments </p>
               
                </div>
                <div className='nav-mobile-item'>
              
                    <p className='nav-menu-items'>  Facial Aesthetics    </p>
              
                </div>
                <div className='nav-mobile-item'>
             
                    <p className='nav-menu-items'> Contact   </p>
             
                </div>
                <div className='nav-mobile-item'>
               
                <img src="https://res.cloudinary.com/di9qg5ka6/image/upload/v1716792164/Frame_5_brxnq4.png" className="book-appointment-logo"/>
               
                </div>
                
              
              </div>
              
              </nav>  
              </> 
 )
 } 

export default NavbarMobile
