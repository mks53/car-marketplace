import React, { useState } from "react";
import auth from "../firebase";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h1>MKCarMart</h1>
      <Link to="/signup">Create Account</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
