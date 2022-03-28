import React, { useState } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";

const AddMovie = ({ movies, setMovies }) => {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleAdd = () => {
    setShow(false);
    setMovies([
      ...movies,
      { id: Math.random(), movieName: title, rating: rating, imgUrl:imgUrl }
    ]);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add movie{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Movie title"
            aria-label="Movie title"
            onChange={(e) =>
              setTitle(e.target.value )
            }
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Description"
            aria-label="Description"
            onChange={(e) =>
              setDescription(e.target.value )
            }
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="rating"
            aria-label="rating"
            onChange={(e) =>
              setRating(e.target.value )
            }
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Poster Url"
            aria-label="Poster Url"
            onChange={(e) =>
              setImgUrl(e.target.value )
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddMovie;
