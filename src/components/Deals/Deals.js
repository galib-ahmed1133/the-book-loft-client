import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import css from "./Deals.css";

const Deals = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState({});
  useEffect(() => {
    fetch(`https://intense-mesa-31910.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => setDeal(data));
  });
  return (
    <div className="mt-5">
      <Card className="col-md-5 col-sm-1 deal-card m-auto">
        <Card.Body className="row">
          <Card.Img className="col-md-6" src={deal.img} />
          <div className="col-md-6">
            <Card.Title>{deal.title}</Card.Title>
            <Card.Text className="mt-5">{deal.author}</Card.Text>
            <Button className="mt-5" variant="primary">Order Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Deals;
