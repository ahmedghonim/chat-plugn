import React, { useContext, useState } from "react";
import { Button, CloseButton, Col, Modal, Row } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import "./styles.scss";

import NewPerson from "../NewPerson";
import { NavStateContext } from "../../Context";


function MyVerticallyCenteredModal(props) {

  const { setShowMessages } = useContext(NavStateContext);

  return (
    <Modal
      {...props}
      size="l"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <div className="modal_header_container">
          <div className="modal_header_close">
            <CloseButton onClick={props.onHide} variant="white" />
            <h6>رسالة جديدة</h6>
          </div>
          <div>
            <Button onClick={()=>setShowMessages(true)} variant="light">التالي</Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Header>
        <Row className="modal_search_container">
          <Col xs={1}>
            <BiSearch className="modal_search_icon" />
          </Col>
          <Col>
            <input className="modal_search_input" placeholder="بحث عن اشخاص" />
          </Col>
        </Row>
      </Modal.Header>
      <Modal.Body className="modal_body_container">
        <NewPerson  name='احمد' subName="غنيم"/>
        <NewPerson name='احمد' subName="@testt"/>
        <NewPerson name='احمد' subName="@testt"/>
        <NewPerson name='احمد' subName="@testt"/>
   
      </Modal.Body>
    </Modal>
  );
}

function ModelMessages() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="outline-light" onClick={() => setModalShow(true)}>
        <FaRegEnvelope />
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModelMessages;
