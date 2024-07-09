import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import Resume_divya from '../../assets/Resume_divya.pdf'
const Hero = () => {
    return (
        <div id="home" className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Divya Aggarwal ,</span> a software engineer</h1>
            <p>Currently pursuing B.tech in Computer Science at Graphic era hill University.I have been immersed in a dynamic learning environment where I've gained experience in C,CPP,Data Structures and algorithms , Artificial Intelligence, Machine learning.</p>
            <div className='hero-action'>
                <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

                <a href={Resume_divya} target='_blank' download={Resume_divya}>
                    <div className='hero-resume'>My Resume</div>
                </a>
            </div>

        </div>

    )
}

export default Hero
