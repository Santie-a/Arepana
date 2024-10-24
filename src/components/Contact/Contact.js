import React, { useState } from 'react';
import './Contact.css';
import instagramIcon from '../../img/instagram_icon.png';
import facebookIcon from '../../img/facebook_icon.png';
import tiktokIcon from '../../img/tiktok_icon.png';
import linkedinIcon from '../../img/linkedin_icon.png';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle sending the message (e.g., API call)
        console.log('Message sent:', { email, message });
        setMessage(''); // Clear the message after sending
        setEmail('');
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>

			<div className="social-media-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>

				<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                </a>

				<a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" className="social-icon" />
                </a>

                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
            </div>

            <div className="contact-info">
                <p>Email: arepana.contacto@arepana.com</p>
                <p>Phone: +57 123 456 7890</p>
                <p>Address: Calle 100 #10-40, Bogotá, Colombia</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Your Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />

                <label htmlFor="message">Your Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                ></textarea>

                <button type="submit" className="contact-submit">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
