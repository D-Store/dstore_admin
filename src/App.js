import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/SignIn" component={SignIn}/>
      </Switch>
    </Router>

  );
}

export default App;
