import React from 'react'
import { Link } from 'react-router-dom';
import ViewInArSharpIcon from '@mui/icons-material/ViewInArSharp';
import '../css/CreateTest.css'

function AttemptTest() {
    return (
        <>
            <div className="create-test">
                <div className="create-test-up">
                    <p className="sub-heading1 text">Attempt Test</p>
                    <p className="heading-create-test text">Attempt Coding Challenges</p>
                    <p className="sub-heading2">Enhance your coding skills with comprehesive testing platform</p>
                </div>
                <div className="create-test-down">
                    <div className="create-card">
                        <div className="cc-left">
                            <ViewInArSharpIcon fontSize="medium" />
                        </div>
                        <div className="cc-right">
                            <p className="ccr-head">
                                <Link to="">Attempt Coding Test</Link>
                            </p>
                            <p className="ccr-explain">
                                Attempt challenges with simple coding test
                            </p>
                        </div>
                    </div>

                    <div className="create-card">
                        <div className="cc-left">
                            <ViewInArSharpIcon fontSize="medium" />
                        </div>
                        <div className="cc-right">
                            <p className="ccr-head">
                                <Link to="">Attempt Custom Coding Test</Link>
                            </p>
                            <p className="ccr-explain">
                                Attempt coding test with custom problems
                            </p>
                        </div>
                    </div>

                    <div className="create-card">
                        <div className="cc-left">
                            <ViewInArSharpIcon fontSize="medium" />
                        </div>
                        <div className="cc-right">
                            <p className="ccr-head">
                                <Link to="">Attempt Coding MCQ</Link>
                            </p>
                            <p className="ccr-explain">
                                Attempt challenges with coding MCQ
                            </p>
                        </div>
                    </div>

                    <div className="create-card">
                        <div className="cc-left">
                            <ViewInArSharpIcon fontSize="medium" />
                        </div>
                        <div className="cc-right">
                            <p className="ccr-head">
                                <Link to="/categorymcq">Attempt Fundamental MCQ</Link>
                            </p>
                            <p className="ccr-explain">
                                Attempt computer fundamental MCQ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AttemptTest