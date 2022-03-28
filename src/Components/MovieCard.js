import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons";

<<<<<<< HEAD
const MovieCard = ({
  movie: { id, movieName, imgUrl, Description, rating },
}) => {
  return (
    <div className="MovieCard">
        <IconContext.Provider value={{ color: "gold" }}>
 
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{movieName}</Card.Title>
          <Card.Text>{Description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{rating}/10</small>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) =>
            el <= rating ? <FaStar /> : <FaRegStar />
          )}
        </Card.Footer>
      </Card>
      </IconContext.Provider>
=======
const MovieCard = () => {
 return (
    <div className="App">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
>>>>>>> 445f21547da30f9dcfb3c22ff07914c0c1eb2683

    </div>
  );
}

export default MovieCard;
