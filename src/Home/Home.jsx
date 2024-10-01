import React from 'react'
import './Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import img1 from './bismil-two.webp'
import img2 from './guneet-virdi.webp'
import img3 from './katrina-kaif.webp'
import img4 from './neha-kakkar.webp'
import img5 from './sahib-sandhu.webp'
import img6 from './zikir-khan.webp'

function Home() {

    const [text] = useTypewriter({
        words: ['a Celebrity','an Anchor','a Dancer','a Bouncer','a Singer'],
        loop: true,
        delaySpeed: 1500,
      });
    return (
        <div className="home">
            <div className="headers">
                <div className="header1">
                    <p>Your Trusted Partners for Professional Event Teams</p>
                </div>
                <div className="header2">
                    <h3>Book <span className='multiple-text'>{text}</span><Cursor /></h3>
                    <p><span className='span'>for your</span> Iconic Event</p>
                </div>
            </div>
            <div className="images">
                <div className="column1">
                    <img src={img3} alt="" />
                </div>
                <div className="column2">
                    <div className="vertical">
                        <div className='upper'><img src={img1} alt="" /></div>
                        <div className='lower'><img src={img6} alt=""/></div>
                    </div>
                    <div className="side">
                        <img src={img5} alt="" />
                    </div>
                </div>
                <div className="column3">
                    <div><img src={img4} alt="" /></div>
                    <div className='col3Lower'><img src={img2} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Home