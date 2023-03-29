import React from 'react'

import { Helmet } from 'react-helmet'

import './registration-page.css'

const RegistrationPage = (props) => {
  return (
    <div className="registration-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="registration-page-registration-page">
        <div className="registration-page-group46">
          <div className="registration-page-group45">
            <div className="registration-page-frame-elementsi-phone--status-bar">
              <img
                alt="Time1947"
                src="/playground_assets/time1947-bdjl.svg"
                className="registration-page-time"
              />
              <img
                alt="battery1947"
                src="/playground_assets/battery1947-2y4n.svg"
                className="registration-page-battery"
              />
              <img
                alt="Reception1947"
                src="/playground_assets/reception1947-46f.svg"
                className="registration-page-reception"
              />
              <img
                alt="Wifi1948"
                src="/playground_assets/wifi1948-9sl8.svg"
                className="registration-page-wifi"
              />
            </div>
            <img
              alt="Rectangle2631948"
              src="/playground_assets/rectangle2631948-nbe-200h.png"
              className="registration-page-rectangle263"
            />
          </div>
        </div>
        <div className="registration-page-vectors">
          <img
            alt="Vector1948"
            src="/playground_assets/vector1948-tn.svg"
            className="registration-page-vector"
          />
          <img
            alt="Vector1948"
            src="/playground_assets/vector1948-1hus.svg"
            className="registration-page-vector1"
          />
        </div>
        <span className="registration-page-text">
          <span>Register</span>
        </span>
        <button className="registration-page-frame-button">
          <span className="registration-page-text02">
            <span>Register</span>
          </span>
        </button>
        <div className="registration-page-group47">
          <span className="registration-page-text04">
            <span>
              Already registered?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="registration-page-text06">
            <span>Login here</span>
          </span>
        </div>
        <div className="registration-page-group49">
          <div className="registration-page-group48">
            <div className="registration-page-password-text-field">
              <div className="registration-page-password">
                <div className="registration-page-left-content">
                  <span className="registration-page-text08">
                    <span>Confirm Password</span>
                  </span>
                </div>
                <div className="registration-page-right-content">
                  <span className="registration-page-text10">
                    <span>􀋭</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="registration-page-password-text-field1">
              <div className="registration-page-password1">
                <div className="registration-page-left-content1">
                  <span className="registration-page-text12">
                    <span>Password</span>
                  </span>
                </div>
                <div className="registration-page-right-content1">
                  <span className="registration-page-text14">
                    <span>􀋭</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="registration-page-email-text-field">
              <div className="registration-page-email">
                <div className="registration-page-left-content2">
                  <span className="registration-page-text16">
                    <span>Email id</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="registration-page-email-text-field1">
            <div className="registration-page-email1">
              <div className="registration-page-left-content3">
                <span className="registration-page-text18">
                  <span>Username</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="btngooglesigninlightnormalweb1941"
          src="/playground_assets/btngooglesigninlightnormalweb1941-yli-200h.png"
          className="registration-page-btngooglesigninlightnormalweb"
        />
      </div>
    </div>
  )
}

export default RegistrationPage
