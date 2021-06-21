import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignInPage from "./pages/SignIn/SignInPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import { RecoilRoot } from "recoil";
import BannerPage from "./pages/Banner/BannerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/userinfo" component={UserInfoPage} />
        <Route path="/banner" component={BannerPage} />
      </Switch>
    </Router>
  );
}

export default App;
