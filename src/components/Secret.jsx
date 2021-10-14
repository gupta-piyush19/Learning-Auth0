import React from "react";
import { Link } from "react-router-dom";

const Secret = () => {
  return (
    <div>
      <h1>Some secret Text</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Secret;
