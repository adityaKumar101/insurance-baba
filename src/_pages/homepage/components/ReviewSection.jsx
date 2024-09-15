import React from "react";
import { Col, Row } from "react-bootstrap";

const ReviewSection = () => {
  return (
    <Row className="reviewSec">
      <Col md={6}>
        <h1> What makes us one of India's best places to buy insurance?</h1>
      </Col>
      <Col md={2}>
        <div className="reviewCard blue">
          <h4>Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
      </Col>
      <Col md={2}>
        <div className="reviewCard red">
          <h4>Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
      </Col>
      <Col md={2}>
        <div className="reviewCard green">
          <h4>Title</h4>
          <p>Lorem ipsum dolor, sit amet consectetur.</p>
        </div>
      </Col>
    </Row>
  );
};

export default ReviewSection;
