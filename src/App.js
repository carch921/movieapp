import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import NavBar from "./Components/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetail from "./Components/MovieDetails";
import Home from "./Components/Home";


function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);

  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "Into the Wild",
      Description:
        "Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person.",
      rating: 8,
      imgUrl:
        "https://fr.web.img4.acsta.net/medias/nmedia/18/64/47/78/18869162.jpg",
        trailer:'https://www.youtube.com/watch?v=XZG1FzyB8DI'
    },
    {
      id: 2,
      movieName: "300",
      Description:
        "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
      rating: 9,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
      trailer:'https://www.youtube.com/watch?v=UrIbxk7idYA'
    },
  ]);
  const Edithandler = (id, editedMovie) => {
    setMovies(
      movies.map((movie) =>
        movie.id == id ? { ...movie, ...editedMovie } : movie
      )
    );
  };
  return (
    <div className="App">
      <Router>
      <NavBar
        movies={movies}
        setMovies={setMovies}
        search={search}
        setSearch={setSearch}
        rate={rate}
        setRate={setRate}
      />{" "}
        <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/movieslist" element={ <MovieList
        movies={movies}
        setMovies={setMovies}
        rate={rate}
        search={search}
        Edithandler={Edithandler}
      />} />

     
      <Route path="/movieslist/:movieId" element={<MovieDetail movies={movies}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
