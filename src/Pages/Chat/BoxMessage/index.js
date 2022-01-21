import React from "react";
import { Button, CloseButton, Col, Row } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import ModelMessages from "../../../Components/Chat/Model";
import NewPerson from "../../../Components/Chat/NewPerson";
import "./styles.scss";
function BoxMessage() {
  return (
    <div className="Box-message-content">
      <div className="Box-message_header_container">
        <div className="Box-message_top_header">
          <h6>الرسائل</h6>
          <div>
            <ModelMessages />
          </div>
        </div>

        <Row className="Box-message_search_container">
          <Col xs={1}>
            <BiSearch className="Box-message_search_icon" />
          </Col>
          <Col>
            <input
              className="Box-message_search_input"
              placeholder="بحث عن اشخاص"
            />
          </Col>
        </Row>
      </div>
      <div className="Box-message_body_container">
        <NewPerson name="احمد" subName="غنيم" />
        <NewPerson name="احمد" subName="@testt" />
        <NewPerson name="احمد" subName="@testt" />
        <NewPerson name="احمد" subName="@testt" />
      </div>
    </div>
  );
}

export default BoxMessage;
