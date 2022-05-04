import React from "react";
import { Suspense, lazy } from "react";
import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Alert from "./components/Alert"
import Loading from "./components/Loading";

import './App.css';

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */ "./pages/AddMovie"));
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/EditMovie"));


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
          <Link to="/"><img src={process.env.PUBLIC_URL + '/moviedb-logo.png'} width="137" height="32" alt="moviedb" /></Link>
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

        <Alert content={alert.content} visible={alert.visible} color={alert.color} timeoutCallback={hideAlert} timeout="4000" />

        <main className="Page">
          <Routes>

            <Route
              path="/edit-movie/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <EditMovie editSuccess={editSuccess} />
                </Suspense>
              }
            />
              
            <Route
              path="/add-movie"
              element={
                <Suspense fallback={<Loading />}>
                  <AddMovie editSuccess={editSuccess} />
                </Suspense>
              }
            />

            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
          
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
