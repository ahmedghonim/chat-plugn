import React from "react";
import NavBar from "../Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Stack } from "react-bootstrap";
import "./styles.scss";
import { useLocation } from "react-router-dom";
import Chat from "../Components/Chat";
export const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <Stack className="h-100 min-vh-100 min-vh-100 bg-black ">
      <NavBar />
      <Container className="main-layout_container  h-100 mb-5 pb-5">
        <Row className="h-100 bg-black "> {children} </Row>
      </Container>
      {location.pathname != "/chat" && <Chat />}
    </Stack>
  );
};
