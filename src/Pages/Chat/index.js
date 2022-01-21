import React from "react";
import { Col, Row } from "react-bootstrap";
import BoxMessage from "./BoxMessage";
import './styles.scss'
function Chat() {
  return (
    <Row className="chat-page" >
      <Col md={4} className="bg-black d-sm-block d-none ">
      <BoxMessage/>
      </Col>
      <Col md={8} className="bg-danger">
        message
      </Col>
    </Row>
  );
}

export default Chat;
