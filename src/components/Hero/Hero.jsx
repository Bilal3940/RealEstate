import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container flexCenter">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>Discover <br /> Exceptional Properties <br />with Us</h1>
                </div>
                <div className="hero-des flexColStart">
                    <span>Experience the epitome of luxury living
                         
                        <br /> with our exclusive selection of premier properties.</span>
                    <span>Unlock a world of possibilities and find your perfect home with Us.</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" outline='none' />
                    <button className="button">Search</button>
                </div>
                <div className="flexStart stats">
                    <div className="flexColStart stat">
                    
                        <span>
                        <CountUp start={30000} end={40000} duration={4}/>    +
                        </span>
                        <span className='SecondaryText' >Preminum Products</span>
                    </div>
                    <div className="flexColStart stat">
                    
                    <span>
                    <CountUp start={10000} end={20000} duration={4}/>    +
                    </span>
                    <span className='SecondaryText' >Happy Customers</span>
                </div>
                <div className="flexColStart stat">
                    
                    <span>
                    <CountUp  end={4500} duration={4}/>    +
                    </span>
                    <span className='SecondaryText' >Reviews</span>
                </div>
                </div>
            </div>
            <div className="hero-right ">
                <div className="image-container">
                    <img src="./hero-image.png" alt="hero image" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero