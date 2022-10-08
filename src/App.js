import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import RouteURL from './components/route';
import { BrowserRouter as Router } from "react-router-dom";
import iconHome from './components/home/icon-home.png'

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/" className="icon-go-home">
          <img src={iconHome} alt="" style={{width: '100%'}}/>
        </Link>
        <RouteURL />
      </div>
    </Router>
  );
}

export default App
