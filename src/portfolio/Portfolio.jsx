import React from 'react'
import './Portfolio.scss'
import * as AiIcons from 'react-icons/ai';
import * as TiIcons from 'react-icons/ti';



export default function Portfolio() {
    const data = [
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png"},
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" },
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" },
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" },
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" },
        { image: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" },
    ];

    const renderData = (imge, index) => {
        return (
            <div className="portfolio-grid" key={index}>
                <div className="port-data">
                    <img src={imge.image} alt="" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="portfolio">
                <div className="portfolio-head">
                    <h1>PORTFOLIO</h1>
                    <div className="design-content">
                        <div className="line-one">
                        </div>
                        <div className="star">
                            <AiIcons.AiTwotoneStar className='icon-star' />
                        </div>
                        <div className="end-line"></div>
                    </div>
                </div>
                <div className="portfolio-div">
                    {data.map(renderData)}
                </div>
            </div>
        </div>
    )
}
