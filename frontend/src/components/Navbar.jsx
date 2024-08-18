import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn, avatar }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const navigate = useNavigate();  // Using useNavigate hook

    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth <= 1024);
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/login'); // Navigate to the login page after logout
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="nav-bar">
            <div className="nav-left" onClick={() => navigate('/')}>
                <img alt="CodePilot Logo" />
            </div>
            <button className={`hamburger ${isMediumScreen ? 'visible' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`nav-menu ${isMenuOpen ? 'open' : ''} ${isMediumScreen ? 'collapsible' : ''}`}>
                <ul className="nav-mid">
                    <li onClick={() => { toggleMenu(); navigate('/'); }}>Home</li>
                    <li onClick={() => { toggleMenu(); navigate('/createtest'); }}>Create Test</li>
                    <li onClick={() => { toggleMenu(); navigate('/attempt-test'); }}>Attempt Test</li>
                    <li onClick={() => { toggleMenu(); navigate('/about'); }}>About</li>
                    <li onClick={() => { toggleMenu(); navigate('/contact-us'); }}>Contact Us</li>
                </ul>
                <ul className={`nav-right ${isSmallScreen ? 'mobile' : ''}`}>
                    {isLoggedIn ? (
                        <>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                            {/* <li>
                                <img src={avatar} alt="avatarImage" className="avatar-image"/>
                            </li> */}
                        </>
                    ) : (
                        <>
                            <li>
                                <button onClick={() => { toggleMenu(); navigate('/login'); }}>Log In</button>
                            </li>
                            <li>
                                <button onClick={() => { toggleMenu(); navigate('/register'); }} className="sign-up-btn">Sign Up Now</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
