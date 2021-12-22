import React from 'react'
import './Header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="conatiner-fluid haeder-conetnt">
                <div className="left">
                    <h1>START BOOTSTRAP</h1>
                </div>
                <div className="right">
                    <a href="/">PORTFOLIO</a>
                    <a href="/">ABOUT</a>
                    <a href="/">CONTACT</a>
                </div>
            </div>
        </div>
    )
}
