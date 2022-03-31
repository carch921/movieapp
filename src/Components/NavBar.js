import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import AddMovie from "./AddMovie";

const NavBar = ({ movies, setMovies, search, setSearch, rate, setRate }) => {
  const styles={color:'orange'};
  return (
    <IconContext.Provider value={{ color: "gold" }}>
      <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="/">
            <h1>Home</h1>
          </Navbar.Brand>
          <Navbar.Brand href="/movieslist">
            <h1 style={styles} >Movies</h1>
          </Navbar.Brand>
         
          <Navbar.Brand href="#">
            <AddMovie movies={movies} setMovies={setMovies} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
                <FaRegStar
                  onClick={() => {
                    setRate(el);
                  }}
                />
              ))}
            </Form>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </IconContext.Provider>
  );
};

export default NavBar;
