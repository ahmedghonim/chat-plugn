import "./styles.scss";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SMC from "../../Components/Chat/lib/SMC";
import { NavStateProvider } from "../../Components/Chat/Context";
import PersonMessage from "../../Components/Chat/lib/PersonMessage";

function Chat() {
  return (
    <NavStateProvider>
      <Row className="chat-page">
        <Col md={4} className="chat-page_persons bg-black d-sm-block d-none mt-4 ps-3">
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
          <PersonMessage name="Ahmed" date="100" />
        </Col>
        <Col md={8} className="chat-page_message py-2">
          <PersonMessage name="Ahmed" />
          <SMC />
        </Col>
      </Row>
    </NavStateProvider>
  );
}

export default Chat;
