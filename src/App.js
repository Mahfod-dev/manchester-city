import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Dashboard from "./Components/Admin/Dashboard";
import Error from "./Components/Error";

import ProtectedRoute from "./Components/HOC/ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="login" exact element={<Signin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
