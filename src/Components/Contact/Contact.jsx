import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "538af841-4799-4014-aad0-dcb8cfa0441b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id="contact" className='contact'>
            <div className='contact-title'>
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt=""></img>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" /><p>divisinghal688@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt="" /><p>7984010219</p>

                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt="" /><p> Dehradun , Uttarakhand</p>

                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label for="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name"></input>
                    <label for="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name="email"></input>
                    <label for="">Write your Message here</label>
                    <textarea type="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
