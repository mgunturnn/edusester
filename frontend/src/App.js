import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListUserComponent from "./components/ListUserComponent";
import CreateUserComponent from "./components/CreateUserComponent";
import ViewUserComponent from "./components/ViewUserComponent";
import Home from "./routers/Home"
import CourseHome from "./routers/CourseHome"
import AboutHome from "./routers/AboutHome"
import Contact from "./routers/ContactHome"
import Footer from "./components/Footer"
import RegisterView from "./routers/RegisterView"
import LoginView from "./routers/LoginView"

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route path="/register" component={RegisterView}></Route>
            <Route path="/login" component={LoginView}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/disaster-education" component={CourseHome}></Route>
            <Route path="/about" component={AboutHome}></Route>
            <Route path="/contact" component={Contact}></Route>
            <div className="crud">
              <Route path="/users" component={ListUserComponent}></Route>
              <Route path="/add-user/:id" component={CreateUserComponent}></Route>
              <Route path="/view-user/:id" component={ViewUserComponent}></Route>
              <Footer />
            </div>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
