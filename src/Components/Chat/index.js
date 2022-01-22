import React, { useContext, useEffect, useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import BoydChat from "./BodyChat";
import { NavStateContext, NavStateProvider } from "./Context";
import NavChat from "./NavChat";
import "./styles.scss";

function CustomToggle({ eventKey }) {
  const { showMassageWindow, setShowMassageWindow } =
    useContext(NavStateContext);

  const [arrowState, setArrowState] = useState(false);

  const decoratedOnClick = useAccordionButton(eventKey, () =>
    setArrowState(!arrowState)
  );
  
  useEffect(() => {
    if (showMassageWindow && !arrowState) {
      decoratedOnClick();
      setShowMassageWindow(false);
    }
  }, [showMassageWindow, arrowState]);

  return (
    <NavChat arrowState={arrowState} decoratedOnClick={decoratedOnClick} />
  );
}

export default function Chat() {
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
      id: "12",
      name: "ايناس",
      date: "1/22",
      messages: [
        { req: "السلام عليكم", res: "وعليكم السلام" },
        {
          req: "ايناس هذا نص تجريبي من المرسل",
          res: "هذا نص تجريبي من اليوزر ",
        },
        { req: "رساله جديده من المرسل ايناس", res: "اليوزر يرسل مره اخر" },
        { req: "رساله جديده من المرسل من فرد ايناس ", res: "" },
        { req: "ايناس رساله جديده من المرسل من فرد  ", res: "" },
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
      id: "13",
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
      <div className="chat">
        <Accordion alwaysOpen>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0" />
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <BoydChat data={data} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </NavStateProvider>
  );
}
