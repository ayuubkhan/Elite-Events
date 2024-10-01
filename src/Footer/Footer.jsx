import React from "react"
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__section footer__brand">
                    <h3 className="footer__brand-name"><span>Elite Event</span></h3>
                    <p className="footer__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                    <div className="footer__social-icons">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className="footer__section footer__links">
                    <h5 className="footer__title">Quick Links</h5>
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/">Services</a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/">Portfolio</a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/">Contact Us</a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/">Services</a>
                        </li>
                        <li className="footer__nav-item">
                            <a className="footer__nav-link" href="/">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__section footer__contact">
                    <h5 className="footer__title">Contact Information</h5>
                    <p className="footer__contact-item"><i className="fa-solid fa-phone-volume"></i> +92 3121324083</p>
                    <p className="footer__contact-item"><i className="fa-solid fa-envelope"></i> khanirshad@gmail.com</p>
                    <p className="footer__contact-item"><i className="fa-solid fa-paper-plane"></i> Mumbai, India</p>
                </div>
            </div>
            <div className="footer__bottom">
                <p className="footer__credits">Design By Ayub Khan</p>
            </div>
        </div>

    )
}

export default Footer