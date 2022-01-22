import React, { useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import BoydChat from "./BodyChat";
import { NavStateProvider } from "./Context";
import NavChat from "./NavChat";
import "./styles.scss";
function CustomToggle({ eventKey }) {
  const [show, setShow] = useState(false);
  const decoratedOnClick = useAccordionButton(eventKey, () => setShow(!show));

  return <NavChat show={show} decoratedOnClick={decoratedOnClick} />;
}
export default function Chat() {
  return (
    <NavStateProvider>
      <div className="chat">
        <Accordion>
          <Card>
            <Card.Header>
              <CustomToggle eventKey="0" />
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <BoydChat />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </NavStateProvider>
  );
}
