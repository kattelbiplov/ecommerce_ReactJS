import React from 'react';
import ReactDOM from 'react-dom';
import InfoBar from './components/common/infobar';
import Header from './components/common/header';
import Footer from './components/common/footer';
import NavBar from './components/common/navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/homepage';
import About from './pages/aboutus';
import Shop from './pages/shop';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
function App() {
  return (
    <div>
      <InfoBar />
      
      <div className="container">
        <Header />
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/shop" component={Shop} exact />
            <Route path="/about" component={About} exact/>
            <Route path="/contact" component={Contact} exact />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
