import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { appLogout } from "../store/slices/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Navbar() {
    const dispatch = useDispatch();
    const { isAuthorized} = useSelector((e) => e.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const navigate = useNavigate();  

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
      dispatch(appLogout());
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
                    <li onClick={() => { toggleMenu(); navigate('/attempttest'); }}>Attempt Test</li>
                    <li onClick={() => { toggleMenu(); navigate('/about'); }}>About</li>
                    <li onClick={() => { toggleMenu(); navigate('/contact-us'); }}>Contact Us</li>
                </ul>
                <ul className={`nav-right ${isSmallScreen ? 'mobile' : ''}`}>
                    {isAuthorized ? (
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
                                <button onClick={() => { toggleMenu(); navigate('/signup'); }} className="sign-up-btn">Sign Up Now</button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
