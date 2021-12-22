import React from 'react'
import './Landing.scss'
import Avatar from '../assets/images/avataaars.svg'
import * as AiIcons from 'react-icons/ai';

export default function Landing() {
    return (
        <div className='landing'>
            <div className="landing-content">
                <img src={Avatar} alt='avatar' />
                <h1>START BOOTSTRAP</h1>
                <div className="design-content">
                    <div className="line-one">
                    </div>
                    <div className="star">
                        <AiIcons.AiTwotoneStar className='icon-star'/>
                    </div>
                    <div className="end-line"></div>
                </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
            
        </div>
    )
}
