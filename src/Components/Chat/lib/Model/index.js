import React, { useContext, useState } from "react";
import { Button, CloseButton, Col, Modal, Row } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import "./styles.scss";

import NewPerson from "../NewPerson";
import { NavStateContext } from "../../Context";
import PersonMessage from "../PersonMessage";


function MyVerticallyCenteredModal(props) {

  const { setShowMessages,setCurrantMessages,setShowMassageWindow } = useContext(NavStateContext);
  const data = [
    {
      id: "1",
      name: "احمد",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        { req: "هذا نص تجريبي من المرسل", res: "هذا نص تجريبي من اليوزر " },
        { req: "رساله جديده من المرسل ", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "2",
      name: "محمد",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        {
          req: "محمد هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل محمد", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد محمد ", res: "" },
        { req: "محمد رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "3",
      name: "يوسف",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        {
          req: "يوسف هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل يوسف", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد يوسف ", res: "" },
        { req: "يوسف رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "4",
      name: "زهراء",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        {
          req: "زهراء هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل زهراء", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد زهراء ", res: "" },
        { req: "زهراء رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "5",
      name: "علي",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        { req: "علي هذا نص تجريبي من المرسل", res: "هذا نص تجريبي من اليوزر " },
        { req: "رساله جديده من المرسل علي", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد علي ", res: "" },
        { req: "علي رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "12",
      name: "حسام ",
      date: "1/22",
      messages: [
        { req: "السلام حسام كم", res: "وحسام كم السلام" },
        {
          req: "حسام  هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل حسام ", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد حسام  ", res: "" },
        { req: "حسام  رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
    {
      id: "7",
      name: "معتز ",
      date: "1/22",
      messages: [
        { req: "السلام معتز كم", res: "ومعتز كم السلام" },
        {
          req: "معتز  هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل معتز ", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد معتز  ", res: "" },
        { req: "معتز  رساله جديده من المرسل من فرد  ", res: "" },
        { req: "رساله جديده من المرسل من فرد  ", res: "" },
        { req: "", res: "رساله جديده من المرسل من فرد " },
      ],
    },
  ];
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
            <Button onClick={()=>{setShowMessages(true);setShowMassageWindow(true)}} variant="light">التالي</Button>
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
      {data.map(({ name, date, id }, index) => (
            <NewPerson
              currantMessageId={() => setCurrantMessages(data[index])}
              key={id}
              name={name}
              subName={name}
            />
          ))}
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
