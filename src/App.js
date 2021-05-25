import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import SignInPage from "./pages/SignIn/SignInPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/SignUp" component={SignUpPage}/>
        <Route path="/SignIn" component={SignInPage}/>
        <Route path="/UserInfo" component={UserInfoPage}/>
      </Switch>
    </Router>

  );
}

export default App;
