// import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
// import Header from "../components/Header";
// import StoreLocator from "./StoreLocator";

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Navbar />
        </Layout>

        <Route path='/' exact render={() => <Home />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
      </Router>
    </div>
  );
}

export default App;
