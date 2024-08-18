import React from 'react'
import arrow from '../assets/arrow.svg'

import '../css/Features.css'


function Features() {
  return (
    <>
      <div className="features">
        <div className="features-up">
          <div className="sub-heading-1">
            <p>Boost your coding skills</p>
          </div>
          <div className="heading">
            <p>Features to enhance your coding experience</p>
          </div>
          <div className="sub-heading-2">
            <p>Feature section description</p>
          </div>
        </div>
        <div className="features-down">
          <div className="feat">
            <div className="feat-1">
              <p>Attemp Test</p>
            </div>
            <div className="feat-2">
              <p>Attempt test and evaluate your self</p>
            </div>
            <div className="feat-3">
              <p>Learn more <img src={arrow} alt="" id="arr-image" /></p>
            </div>
          </div>
          <div className="feat">
            <div className="feat-1">
              <p>Create Coding Tests</p>
            </div>
            <div className="feat-2">
              <p>Easily create coding tests to assess programming skills</p>
            </div>
            <div className="feat-3">
              <p>Learn more <img src={arrow} alt="" /></p>
            </div>
          </div>
          <div className="feat">
            <div className="feat-1">
              <p>Test History and Review</p>
            </div>
            <div className="feat-2">
              <p>Access and review past coding tests and results</p>
            </div>
            <div className="feat-3">
              <p>Learn more <img src={arrow} alt="" /></p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Features