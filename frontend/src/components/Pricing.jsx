import React from 'react'
import { Link } from 'react-router-dom';
import tick from '../assets/green-tick.jpg'

import '../css/Pricing.css'


function Pricing() {
  return (
    <>
        <div className="pricing">
            <div className="pricing-up">
                <div className="price-sub-heading-1 text">
                    <p>Pricing</p>
                </div>
                <div className="price-heading">
                    <p>Choose the plan that suits your needs</p>
                </div>
                <div className="price-sub-heading-2">
                    <p>Unlock the full potential of CodePilot with our flexible pricing plans.</p>
                </div>
            </div>
            <div className="pricing-down">
                <div className="price">
                    <div className="price-up">
                        <p className='plan-type'>Basic Plan</p>
                        <p className="plan">₹1000 <span className="month">/month</span></p>
                        <p id="button">
                            <Link to="">Get started</Link>
                        </p>
                    </div>
                    <div className="price-down">
                        <p className="heading">Ideal for beginners and hobbyists</p>
                        <ul className="pricing-features">
                            <li><img src={tick} alt="" className='tick-img'/>Create coding tests</li>
                            <li><img src={tick} alt="" className='tick-img'/>Test history and review</li>
                            <li><img src={tick} alt="" className='tick-img'/>Leaderboard access</li>
                            <li><img src={tick} alt="" className='tick-img'/>5 coding test slots</li>
                            <li><img src={tick} alt="" className='tick-img'/>Email support</li>
                        </ul>
                    </div>
                </div>

                <div className="price">
                    <div className="price-up">
                        <p className='plan-type'>Pro Plan</p>
                        <p className="plan">₹2000 <span className="month">/month</span></p>
                        <p id="button">
                            <Link to="">Get started</Link>
                        </p>
                    </div>
                    <div className="price-down">
                        <p className="heading">Perfect for professional and small teams</p>
                        <ul className="pricing-features">
                            <li><img src={tick} alt="" className='tick-img'/>Create coding tests</li>
                            <li><img src={tick} alt="" className='tick-img'/>Test history and review</li>
                            <li><img src={tick} alt="" className='tick-img'/>Leaderboard access</li>
                            <li><img src={tick} alt="" className='tick-img'/>10 coding test slots</li>
                            <li><img src={tick} alt="" className='tick-img'/>Priority email support</li>
                        </ul>
                    </div>
                </div>

                <div className="price">
                    <div className="price-up">
                        <p className='plan-type'>Advanced Plan</p>
                        <p className="plan">₹3000 <span className="month">/month</span></p>
                        <p id="button">
                            <Link to="">Get started</Link>
                        </p>
                    </div>
                    <div className="price-down">
                        <p className="heading">Ideal for beginners and hobbyists</p>
                        <ul className="pricing-features">
                            <li><img src={tick} alt="" className='tick-img'/>Create coding tests</li>
                            <li><img src={tick} alt="" className='tick-img'/>Test history and review</li>
                            <li><img src={tick} alt="" className='tick-img'/>Leaderboard access</li>
                            <li><img src={tick} alt="" className='tick-img'/>unlimited coding test slots</li>
                            <li><img src={tick} alt="" className='tick-img'/>Dedicated account manager</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Pricing