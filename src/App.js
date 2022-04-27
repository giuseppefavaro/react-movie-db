import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreateCardForm from './components/CreateCardForm';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-movie">Add movie</Link>
          </li>
        </ul>
      </nav>


      <Routes>
          <Route path="/add-movie" element={<CreateCardForm />} />
          <Route path="/" element={<Home />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
