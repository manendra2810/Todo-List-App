import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="main-footer-container">
            <div className="main-footer-upper">
                <div className="main-footer-upper-content1">
                    <h2 className="content1-heading">MANENDRA AGNIHOTRI</h2>
                    <p className="content1-details">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.
                    </p>
                </div>
                <div className="main-footer-upper-content2">
                    <h2 className="content2-heading">
                        <span>SOCIAL</span>
                    </h2>
                    <div className="social-media-links">
                        <a href="http://www.linkedin.com/in/manendra-agnihotri-7aa11419b" target="_blank">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/manendra2810" target="_blank">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="main-footer-lower">
                &copy; Copyright 2024. Made by Manendra Agnihotri
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
