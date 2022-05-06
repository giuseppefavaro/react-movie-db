import { Suspense, lazy, React, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Alert from "./components/Alert";
import Loading from "./components/Loading";


import './App.css';

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const AddMovie = lazy(() => import(/* webpackChunkName: "add" */ "./pages/AddMovie"));
const EditMovie = lazy(() => import(/* webpackChunkName: "edit" */ "./pages/EditMovie"));
const CategoryMovie = lazy(() => import(/* webpackChunkName: "category" */ "./pages/CategoryMovie"));

function App() {

  const [alert, setAlert] = useState({
    visible: false,
    content: "",
    color: ""
  })

  const editSuccess = () => {
    setAlert(
      {
        visible: true,
        content: "You have successfully edited the movie",
        color: "alertColorGreen",
      }
    );
  };

  const addSuccess = () => {
    setAlert(
      {
        visible: true,
        content: "You have added a new movie!",
        color: "alertColorBlue",
      }
    );
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

        <Header />

        <Alert content={alert.content} visible={alert.visible} color={alert.color} timeoutCallback={hideAlert} timeout="4000" />

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
                <AddMovie addSuccess={addSuccess} />
              </Suspense>
            }
          />

          <Route
            path="/category-movie"
            element={
              <Suspense fallback={<Loading />}>
                <CategoryMovie />
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

    </Router>
  );
}

export default App;
