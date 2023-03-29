import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import ProfileAboutpage from './views/profile-aboutpage'
import PointsDescription from './views/points-description'
import Requesttopersons from './views/requesttopersons'
import Filteroptions from './views/filteroptions'
import Notifications from './views/notifications'
import RegistrationPage from './views/registration-page'
import Rank from './views/rank'
import Discover from './views/discover'
import PunyaDescription from './views/punya-description'
import LoginPage from './views/login-page'
import Messagescreen from './views/messagescreen'
import Live from './views/live'
import Sidebar from './views/sidebar'
import Trending from './views/trending'
import Messages from './views/messages'
import HomeScreen from './views/home-screen'
import MoreonProfilepage from './views/moreon-profilepage'
import Settings from './views/settings'
import ForgotPasswordPage from './views/forgot-password-page'
import Publicprofileactivitypage from './views/publicprofileactivitypage'
import Writequestion from './views/writequestion'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={ProfileAboutpage} exact path="/profile-aboutpage" />
        <Route component={PointsDescription} exact path="/points-description" />
        <Route component={Requesttopersons} exact path="/requesttopersons" />
        <Route component={Filteroptions} exact path="/filteroptions" />
        <Route component={Notifications} exact path="/notifications" />
        <Route component={RegistrationPage} exact path="/registration-page" />
        <Route component={Rank} exact path="/rank" />
        <Route component={Discover} exact path="/discover" />
        <Route component={PunyaDescription} exact path="/punya-description" />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={Messagescreen} exact path="/messagescreen" />
        <Route component={Live} exact path="/live" />
        <Route component={Sidebar} exact path="/sidebar" />
        <Route component={Trending} exact path="/trending" />
        <Route component={Messages} exact path="/messages" />
        <Route component={HomeScreen} exact path="/home-screen" />
        <Route component={MoreonProfilepage} exact path="/moreon-profilepage" />
        <Route component={Settings} exact path="/settings" />
        <Route
          component={ForgotPasswordPage}
          exact
          path="/forgot-password-page"
        />
        <Route
          component={Publicprofileactivitypage}
          exact
          path="/publicprofileactivitypage"
        />
        <Route component={Writequestion} exact path="/writequestion" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
