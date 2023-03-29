import React from 'react'

import { Helmet } from 'react-helmet'

import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-page-login-page">
        <div className="login-page-group46">
          <div className="login-page-group45">
            <div className="login-page-frame-elementsi-phone--status-bar">
              <img
                alt="Time1941"
                src="/playground_assets/time1941-q57t.svg"
                className="login-page-time"
              />
              <img
                alt="battery1941"
                src="/playground_assets/battery1941-dj1t.svg"
                className="login-page-battery"
              />
              <img
                alt="Reception1941"
                src="/playground_assets/reception1941-ki7q.svg"
                className="login-page-reception"
              />
              <img
                alt="Wifi1941"
                src="/playground_assets/wifi1941-76ib.svg"
                className="login-page-wifi"
              />
            </div>
            <img
              alt="Rectangle2631941"
              src="/playground_assets/rectangle2631941-9o9-200h.png"
              className="login-page-rectangle263"
            />
          </div>
        </div>
        <div className="login-page-vectors">
          <img
            alt="Vector1941"
            src="/playground_assets/vector1941-03co.svg"
            className="login-page-vector"
          />
          <img alt="Vector1941" src="/playground_assets/vector1941-dc3.svg" />
        </div>
        <span className="login-page-text">
          <span>
            Log in
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="login-page-email-text-field">
          <div className="login-page-email">
            <div className="login-page-left-content">
              <span className="login-page-text02">
                <span>Username</span>
              </span>
            </div>
          </div>
        </div>
        <button className="login-page-frame-button">
          <span className="login-page-text04">
            <span>Sign In</span>
          </span>
        </button>
        <div className="login-page-password-text-field">
          <div className="login-page-password">
            <div className="login-page-left-content1">
              <span className="login-page-text06">
                <span>Password</span>
              </span>
            </div>
            <div className="login-page-right-content">
              <span className="login-page-text08">
                <span>􀋭</span>
              </span>
            </div>
          </div>
        </div>
        <div className="login-page-group47">
          <span className="login-page-text10">
            <span>
              Not registered yet?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span className="login-page-text12">
            <span>Register here</span>
          </span>
        </div>
        <span className="login-page-text14">
          <span>Forgot Password?</span>
        </span>
        <img
          alt="btngooglesigninlightnormalweb1941"
          src="/playground_assets/btngooglesigninlightnormalweb1941-9bc-200h.png"
          className="login-page-btngooglesigninlightnormalweb"
        />
        <div className="login-page-social-title">
          <img
            alt="Vector11941"
            src="/playground_assets/vector11941-fc92.svg"
            className="login-page-vector1 login-page-vector1"
          />
          <div className="login-page-frame13">
            <span className="login-page-text16">
              <span>or</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
