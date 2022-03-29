import React, { useState } from "react";
import { Modal, Button, FormControl } from "react-bootstrap";

const EditMovie = ({ movie, Edithandler }) => {
  const [title, setTitle] = useState(movie.movieName);
  const [rate, setRate] = useState(movie.rating);
  const [description, setDescription] = useState(movie.Description);
  const [imgLink, setimgLink] = useState(movie.imgUrl);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleEdit = () => {
    handleClose();
    Edithandler(movie.id,{movieName: title,Description:description, rating: rate, imgUrl:imgLink})
   
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit movie{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Movie title"
            aria-label="Movie title"
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Description"
            aria-label="Description"
            onChange={(e) => setDescription(e.target.value)}
            defaultValue={description}
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="rating"
            aria-label="rating"
            onChange={(e) => setRate(e.target.value)}
            defaultValue={rate}
          />
          <FormControl
            style={{ margin: "4px" }}
            placeholder="Poster Url"
            aria-label="Poster Url"
            onChange={(e) => setimgLink(e.target.value)}
            defaultValue={imgLink}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default EditMovie;
