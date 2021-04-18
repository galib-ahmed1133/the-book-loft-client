import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import css from "./Books.css";

const Books = (props) => {
  const { _id, title, img, price,author } = props.book;
  const history = useHistory();
  const setDeal = () => {
    const url = `deals/${_id}`;
    history.push(url);
  }
  return (
    <Col md={4} sm={1} className='card-container'>
      <Card className="card-style text-center">
        <Card.Body>
          <Card.Img className="img-fluid card-img" variant="top" src={img} />
          <Card.Title className="card-title">{title}</Card.Title>
          <p>{author}</p>
          <div className="c-footer">
            <h3 className="price">${price}</h3>
            <button onClick={setDeal} className="btn buy-btn">Buy Now</button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Books;
