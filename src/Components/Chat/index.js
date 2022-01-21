import React, { useState } from "react";
import { Accordion, Button, Card, useAccordionButton } from "react-bootstrap";

import NavChat from "./NavChat";
import Person from "./PersonMessage";
import "./styles.scss";
function CustomToggle({ children, eventKey }) {
  const [show, setShow] = useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, () => setShow(!show));

  return <NavChat show={show} decoratedOnClick={decoratedOnClick} />;
}
export default function Chat() {
  return (
    <div className="nav">
      {/*  */}
      <Accordion className="nav_header">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0" />
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Person name="احمد" date="10/10/2020" />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
