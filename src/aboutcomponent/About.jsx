import React from 'react'
import './About.scss'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'
function About() {
    return (
        <div>
            <div className="about">
                <h1>START BOOTSTRAP</h1>
                <div className="design-content">
                    <div className="line-one">
                    </div>
                    <div className="star">
                        <AiIcons.AiTwotoneStar className='icon-star' />
                    </div>
                    <div className="end-line"></div>
                </div>
                <div className="about-content">
                    <div className="left">
                        <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="right">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
                <div className="btn">
                    <ImIcons.ImDownload3 className='icon'/>
                    <p>Free Download!</p>
                </div>
            </div>
        </div>
    )
}

export default About
