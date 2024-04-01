import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://www.shutterstock.com/image-vector/customer-halftone-vector-icon-illustration-260nw-1083167777.jpg"
        />
      </Col>
      <Col lg={10}>
        <div>이병재</div>
        <div>01030403</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
