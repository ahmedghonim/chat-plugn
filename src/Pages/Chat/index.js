import "./styles.scss";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SMC from "../../Components/Chat/lib/SMC";
import { NavStateProvider } from "../../Components/Chat/Context";
import PersonMessage from "../../Components/Chat/lib/PersonMessage";

function Chat() {
  return (
    <NavStateProvider>
      <Row className="chat-page m-auto">
        <Col md={4} className="bg-black d-sm-block d-none mt-4 ps-3">
          <PersonMessage name="ahmed" date="100" />
        </Col>

        <Col md={8} className="">
          <SMC />
        </Col>
      </Row>
    </NavStateProvider>
  );
}

export default Chat;
