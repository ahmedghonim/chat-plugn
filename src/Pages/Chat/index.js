import "./styles.scss";
import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import SMC from "../../Components/Chat/lib/SMC";
import { NavStateProvider } from "../../Components/Chat/Context";
import PersonMessage from "../../Components/Chat/lib/PersonMessage";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Chat() {
  const [currantMessages, setCurrantMessages] = useState();
  const [toggleWindow, setToggleWindow] = useState(false);
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
    {
      id: "8",
      name: " عبد الله ",
      date: "1/22",
      messages: [
        { req: "السلامعبد الله كم", res: "عبد الله كم السلام" },
        { req: "رساله جديده من المرسلعبد الله ", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فردعبد الله  ", res: "" },
        { req: "عبد الله  رساله جديده من المرسل من فرد  ", res: "" },
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
            toggleWindow ? "sm-disable" : "chat-page_persons bg-black mt-4 ps-3"
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
        <Col md={8} className={!toggleWindow ? "sm-disable":"chat-page_message"}>
          <div className="d-flex justify-content-between align-items-baseline mt-3">
            <PersonMessage name={currantMessages ? currantMessages.name : ""} />
            <Button
              variant="outline-light"
              onClick={() => setToggleWindow(false)}
            >
              <MdOutlineKeyboardBackspace />
            </Button>
          </div>
          <SMC data={currantMessages} />
        </Col>
      </Row>
    </NavStateProvider>
  );
}

export default Chat;
