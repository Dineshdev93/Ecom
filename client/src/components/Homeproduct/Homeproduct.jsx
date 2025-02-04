import React from "react";
import './homeproduct.scss'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

export default function Homeproduct() {
  return (
    <section className="home-product mt-3">
      <Container>
        <h2>Products</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card style={{ width: "100%", height:"100%" }} >
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <h2>New Arrivals</h2>
        <Row>
          <Col md={4} className="mb-3">
            <Card style={{ width: "100%", height:"100%" }} >
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}className="mb-3">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src="./shoes.png" />
              <Card.Body>
                <Card.Title>Nike Shoes</Card.Title>
                <button className="buy-now">Buy Now</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
}
