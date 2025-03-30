import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  text: string;
  button: string;
  link: string;
}

const CardComponent: React.FC<CardProps> = (CardProps) => {
  return (
    <Card style={{ width: "18rem" }} data-bs-theme="dark">
      <Card.Img variant="top" src={CardProps.image} />
      <Card.Body>
        <Card.Title>{CardProps.title}</Card.Title>
        <Card.Text>{CardProps.text}</Card.Text>
        <Link to={CardProps.link}>
          <Button variant="primary">{CardProps.button}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
