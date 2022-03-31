import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Link to={'/movieslist'}>
      <h1>Home of Movies</h1>
      <img width={'1000px'} src="https://camo.githubusercontent.com/8c3b01600cd69e8307a164287f0bbd842c1f46d7b7750ce25ca8762c5d2c8bf9/68747470733a2f2f61626c6f61642e64652f696d672f646f63756c696268336b376c2e6a7067" />
    </Link>
  );
};

export default Home;
