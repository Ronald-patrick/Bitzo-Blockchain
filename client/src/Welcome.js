import './Welcome.css';
import Header from './components/Header';
import MiddleComponent from './components/MiddleComponent';
import React from "react";

function Welcome() {
  return (
    <div className="welcome">
      <Header />
      <MiddleComponent />
    </div>
  );
}

export default Welcome;
