import React, { useState } from "react";
import { auth } from "../firebase";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnSubmit = () => {};
  return (
    <div className="formContainer">
      <form onSubmit={handleOnSubmit}>
        <h2>Sign Up!</h2>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
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
        <button type="submit" onSubmit={() => handleOnSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
