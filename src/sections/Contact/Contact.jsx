import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [showDialog, setShowDialog] = useState(false);
    
    const form = useRef(null); // <-- create ref

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_3ldatnr', 'template_2dtw01f', form.current, {
            publicKey: 'XV_KBMU2cPxARtRJo',
        })
        .then(
            () => {
                setShowDialog(true);
                // Do NOT reset formData here!
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
    };

    const closeDialog = () => {
        setShowDialog(false);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset here
    };

    return (
        <>
            <div id="Contact">
                <h1 className="header">Contact</h1>
        <div className="underline"></div>
        <div className="container">
            <div className="form-section">
            <h2>Send Message</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="form-row">
                <div className="form-group">
                    <label>Your Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Himanshu Gupta"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label>Your Email</label>
                    <input
                    type="email"
                    name="email"
                    placeholder="hg418419@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                </div>
                <div className="form-group">
                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label>Message</label>
                <textarea
                    name="message"
                    placeholder="Hello, I'd like to talk about..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                </div>
                <button type="submit" className="send-btn">
                <i className="fas fa-paper-plane"></i> Send Message
                </button>
            </form>
            </div>

            {showDialog && (
    <div className="success-overlay">
        <div className="success-dialog">
        <h2>🎉 Message Sent Successfully!</h2>
        <p>Thank you for reaching out. We will connect with you soon.</p>
        <div className="details">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Subject:</strong> {formData.subject}</p>
            <p><strong>Message:</strong> {formData.message}</p>
        </div>
        <button onClick={closeDialog} className="close-btn">Close</button>
        </div>
    </div>
    )}

            <div className="info-section">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p><i className="fas fa-envelope"></i> hg418419@gmail.com</p>
                <p><i className="fas fa-phone"></i> 08986897925</p>
                <p><i className="fas fa-map-marker-alt"></i> Daltonganj, Jharkhand</p>
            </div>
            <div className="follow-section">
                <h2>Follow Me</h2>
                <div className="icons">
                <a href="https://github.com/HimanshuGupta003" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/himanshu-gupta3/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://x.com/Himanshugup003" target="_blank"><i className="fab fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/himanshu_gupta003/#" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            </div>
        </div>
            </div>
        </>
    );
    }

    export default App;