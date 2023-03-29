import React from 'react'

import { Helmet } from 'react-helmet'

import './notifications.css'

const Notifications = (props) => {
  return (
    <div className="notifications-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="notifications-notifications">
        <div className="notifications-group16">
          <img
            alt="Ellipse42331"
            src="/playground_assets/ellipse42331-kluj.svg"
            className="notifications-ellipse4"
          />
          <img
            alt="Ellipse52331"
            src="/playground_assets/ellipse52331-7tw9.svg"
            className="notifications-ellipse5"
          />
        </div>
        <div className="notifications-frame-elementsi-phone--status-bar">
          <img
            alt="Time2331"
            src="/playground_assets/time2331-zm2b.svg"
            className="notifications-time"
          />
          <img
            alt="battery2331"
            src="/playground_assets/battery2331-0wcm.svg"
            className="notifications-battery"
          />
          <img
            alt="Reception2331"
            src="/playground_assets/reception2331-xplk.svg"
            className="notifications-reception"
          />
          <img
            alt="Wifi2331"
            src="/playground_assets/wifi2331-k97o.svg"
            className="notifications-wifi"
          />
        </div>
        <div className="notifications--opicons">
          <img
            alt="Vector2331"
            src="/playground_assets/vector2331-klr9.svg"
            className="notifications-vector"
          />
          <img
            alt="majesticonsmoremenuline2331"
            src="/playground_assets/majesticonsmoremenuline2331-fhlr.svg"
            className="notifications-majesticonsmoremenuline"
          />
        </div>
        <span className="notifications-text">
          <span>Notifications</span>
        </span>
        <span className="notifications-text02">
          <span>You have 10 new followers including Tom and Sahil</span>
        </span>
        <span className="notifications-text04">
          <span>You have 12 new followers including Kajal</span>
        </span>
        <span className="notifications-text06">
          <span>TODAY</span>
        </span>
        <span className="notifications-text08">
          <span>THIS WEEK</span>
        </span>
        <span className="notifications-text10">
          <span className="notifications-text11">Your answer on &apos;</span>
          <span className="notifications-text12">
            एक WRITER बनने के लिए क्या करना चाहिए
          </span>
          <span>&apos; was just liked by Jane and Alex</span>
        </span>
        <span className="notifications-text14">
          <span className="notifications-text15">Your question on</span>
          <span className="notifications-text16">
            {' '}
            मुझे बांसुरी बजाना बहूत पसंद है क्या मैं इससे कमाई का
          </span>
          <span className="notifications-text17">....</span>
          <span> has been shared by Mike and 50 others</span>
        </span>
        <span className="notifications-text19">
          <span className="notifications-text20">Your answer on</span>
          <span className="notifications-text21">
            {' '}
            मुझे बांसुरी बजाना बहूत पसंद है क्या मैं इससे कमाई का....
          </span>
          <span>
            {' '}
            has been marked as the &apos;Prefect answer&apos; by the questioner,
            Rahul
          </span>
        </span>
        <img
          alt="pajamasnotifications2392"
          src="/playground_assets/pajamasnotifications2392-u7c.svg"
          className="notifications-pajamasnotifications"
        />
      </div>
    </div>
  )
}

export default Notifications
