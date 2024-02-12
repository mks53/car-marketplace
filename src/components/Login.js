import React, { useState, useContext } from "react";
import { auth } from "../firebase";
import { AuthContext } from "../contexts/authContext";

export default function SignUp() {
  const { loginUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnSubmit = () => {};
  return (
    <div className="formContainer">
      <form onSubmit={handleOnSubmit}>
        <h2>Login!</h2>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <br />
        <button onSubmit={() => handleOnSubmit}>Login</button>
      </form>
    </div>
  );
}
