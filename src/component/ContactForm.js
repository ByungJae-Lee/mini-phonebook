import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름입력" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호입력" />
        </Form.Group>

        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;