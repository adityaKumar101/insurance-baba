import React from "react";
import { Card, CardBody, CardHeader, Image } from "react-bootstrap";

const ProductCard = ({ title, icon, desc }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <Image className="catIcon"src={icon} />
        <div>{desc}</div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
