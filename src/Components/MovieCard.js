import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IconContext } from "react-icons";

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

    </div>
  );
}

export default MovieCard;
