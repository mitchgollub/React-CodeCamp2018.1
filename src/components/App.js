import React from "react";

import { connect } from "react-redux";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import "./App.css";

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer name="philly.NET Hands-on Labs" />
  </div>
);

export default App;
