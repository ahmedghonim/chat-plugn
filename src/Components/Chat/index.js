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
  const decoratedOnClick = useAccordionButton(eventKey, () => setArrowState(!arrowState));

  useEffect(() => {
    if (showMassageWindow && !arrowState) {
      decoratedOnClick();
      setShowMassageWindow(false);
    }
  }, [showMassageWindow, arrowState]);

  return <NavChat arrowState={arrowState} decoratedOnClick={decoratedOnClick} />;
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
