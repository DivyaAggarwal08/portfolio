import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile.jpeg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""></img>
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile} alt=""></img>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I'm a fourth year student Currently pursuing B.tech CS.I'm well versed with c++ and data structures and algorithm.</p>
                        <p>During my coursework i've involved in various project where i've applied my theoritical kowledge into practical scenarios. </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>C++</p><hr style={{ width: "60%" }} /> </div>
                        <div className='about-skill'><p>DSA</p><hr style={{ width: "70%" }} /> </div>
                        <div className='about-skill'><p>Full Stack</p><hr style={{ width: "80%" }} /></div>
                        <div className='about-skill'><p>AI</p><hr style={{ width: "60%" }} /> </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
