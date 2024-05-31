import React from 'react'
// import logo_image from '../assets/images/logo-image.jpg';

const Navbar = () => {
  return (
    <div>
        <header className="header">
            <div className="header_content"> 
                <div className="header_logo-container">
                    <div className="header_logo-img-cont">
                        <img src="public/images/logo-image.jpg" alt="Manendra Agnihotri" className="header_logo-img"/>
                    </div>
                    <span className="header_logo-sub">Manendra Agnihotri</span>
                </div>

                <div className="header_main">
                    <ul className="header_links">
                        <li className="header_link-wrapper">
                            <a href="#hero_section" className="header_link"> Home </a>
                        </li>
                        <li className="header_link-wrapper">
                            <a href="#about_section" className="header_link">About </a>
                        </li>
                        <li className="header_link-wrapper">
                            <a href="#project_section" className="header_link"> Projects </a>
                        </li>
                        <li className="header_link-wrapper">
                            <a href="#contact_section" className="header_link"> Contact </a>
                        </li>
                    </ul>

                    <div className="header_main-ham-menu-icon">
                        <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu active" className="header_main-ham-menu active-pannel"/>
                        <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className="header_main-ham-menu-cross close-pannel"/>
                    </div> 
                </div>
            </div>

            <div className="header_sm-menu close-pannel">
                <div className="header_sm-menu-content">
                    <ul className="header_sm-menu-links">
                        <li className="header_sm-menu-link">
                            <a href="./"> Home </a>
                        </li>
            
                        <li className="header_sm-menu-link">
                            <a href="#about_section"> About </a>
                        </li>
            
                        <li className="header_sm-menu-link">
                            <a href="#project_section"> Projects </a>
                        </li>
            
                        <li className="header_sm-menu-link">
                            <a href="#contact_section"> Contact </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar
