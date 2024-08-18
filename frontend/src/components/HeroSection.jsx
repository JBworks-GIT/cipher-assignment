import React from 'react'
import { Link } from 'react-router-dom';
import '../css/HeroSection.css'

function HeroSection() {
    return (
        <>
            <div className="hero-section">
                <div className="hero-header">
                    <p>CodePilot</p>
                </div>
                <div className="hero-desc">
                    <p>Create coding tests, track test history, review performance, and compete on the leaderboard.</p>
                </div>
                <div className="hero-btn">
                    <ul>
                        <li>
                            <Link to="">Sign Up Now</Link>
                        </li>
                        <li>
                            <Link to="">Learn more</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeroSection