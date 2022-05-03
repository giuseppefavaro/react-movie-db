import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from './pages/AddMovie';
import EditMovie from "./pages/EditMovie";

import Alert from "./components/Alert"

import './App.css';


function App() {

  const [alert, setAlert] = useState({
    visible: false,
    content: "",
    color: ""
  })

  const editSuccess = (value) => {
    setAlert(value);
  };
  

    const hideAlert = () => {
      setAlert ({
        visible: false,
        content: "",
        color: ""
    })
    }


  return (
    <Router>
      <div className="App">

        <header className="Header">
          <div className="Header__logo">
            <img src={process.env.PUBLIC_URL + '/moviedb-logo.png'} width="137" height="32" alt="moviedb" />
          </div>
          <nav className="Header__menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-movie">Add movie</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Alert content={alert.content} visible={alert.visible} color={alert.color} timeoutCallback={hideAlert} timeout="3000" />

        <main className="Page">
          <Routes>
            <Route path="/edit-movie/:id" element={<EditMovie editSuccess={editSuccess} />} />
            <Route path="/add-movie" element={<AddMovie editSuccess={editSuccess} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
