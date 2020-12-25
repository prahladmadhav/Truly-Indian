import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className='main-container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
