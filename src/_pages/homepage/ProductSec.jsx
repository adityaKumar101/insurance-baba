import React from "react";
import ProductCard from "./components/ProductCard";
import { Button, Col, Row } from "react-bootstrap";

const ProductSec = () => {
  return (
    <div className="product-sec ">
      <Row>
        <Col md={2}>
          <ProductCard
            title={"Life Insurance"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/life-insurance.svg"}
          />
        </Col>

        <Col md={2}>
          <ProductCard
            title={"Health Insurance"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/health-insurance.svg"}
          />
        </Col>
        <Col md={2}>
          <ProductCard
            title={"Car Insurance"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/motor-insurance.svg"}
          />
        </Col>
        <Col md={2}>
          <ProductCard
            title={"Two Wheeler Insurance"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/bike-insurance.svg"}
          />
        </Col>
        <Col md={2}>
          <ProductCard
            title={"Investments"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/investments.svg"}
          />
        </Col>
        <Col md={2}>
          <ProductCard
            title={"Retirement Plans"}
            desc={" Donec id purus eu lorem euismod placerat."}
            icon={"CategoryIcons/retirement.svg"}
          />
        </Col>
      </Row>
      <Button className="rounded-pill getQuotedBtn mt-4">
        View All Products
      </Button>
    </div>
  );
};

export default ProductSec;
