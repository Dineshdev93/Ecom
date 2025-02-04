import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "../Homeproduct/homeproduct.scss";

export default function Productmainpage() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="home-product">
      <Container className="mt-4">
        <h2>New Arrivals</h2>
        <Row>
          {data.map((element, index) => {
            return (
              <>
                <Col md={4} className="mb-3">
                  <Card style={{ width: "100%", height: "100%" }}>
                    <Card.Img variant="top" src="./shoes.png" />
                    <Card.Body>
                      <Card.Title>Nike Shoes</Card.Title>
                      <button className="buy-now">Buy Now</button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
