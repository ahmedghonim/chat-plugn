import "./styles.scss";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SMC from "../../Components/Chat/lib/SMC";
import { NavStateProvider } from "../../Components/Chat/Context";
import PersonMessage from "../../Components/Chat/lib/PersonMessage";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import ModelMessages from "../../Components/Chat/lib/Model";

function Chat() {
  // send select data to chat box 
  const [currantMessages, setCurrantMessages] = useState();
  //this state for active class in mobile dvice
  const [toggleWindow, setToggleWindow] = useState(false);
  
  //test data accses only in chat page 
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
        { req: "01098050012", res: "الارقام تعمل جيدا " },
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
      id: "99",
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
      id: "5",
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
    <NavStateProvider>
      <Row className="chat-page">
        <Col
          md={4}
          className={
            toggleWindow
              ? "sm-disable chat-page_persons bg-black mt-4 ps-3"
              : "chat-page_persons bg-black mt-4 ps-3"
          }
        >
          {data.map(({ name, date, id }, index) => (
            <PersonMessage
              currantMessageId={() => {
                setCurrantMessages(data[index]);
                setToggleWindow(!toggleWindow);
              }}
              key={id}
              name={name}
              date={date}
            />
          ))}
        </Col>
        <Col
          md={8}
          className={
            !toggleWindow ? "sm-disable chat-page_message" : "chat-page_message"
          }
        >
          <Row className="mt-3 ">
            <Col className="justify-content-center">
              <PersonMessage
                name={currantMessages ? currantMessages.name : ""}
              />
            </Col>
            <Col  className="d-flex align-items-baseline justify-content-center">
              {/* <ModelMessages /> */}
            </Col>
            <Col   className="d-flex align-items-baseline justify-content-end">
              <Button
                variant="outline-light"
                onClick={() => setToggleWindow(false)}
              >
                <MdOutlineKeyboardBackspace />
              </Button>
            </Col>
          </Row>
          <SMC data={currantMessages} />
        </Col>
      </Row>
    </NavStateProvider>
  );
}

export default Chat;
