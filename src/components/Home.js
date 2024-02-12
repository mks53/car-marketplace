import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div>
        <form>
          <label>Make</label>
          <select value=""></select>
          <label>Model</label>
          <select value=""></select>
          <label>Year</label>
          <select value=""></select>
        </form>
      </div>
    </>
  );
}
