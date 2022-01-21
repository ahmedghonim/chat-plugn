import React from "react";
import Chat from "../Components/Chat";
import NavBar from "../Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container>{children}</Container>
      <Chat />
    </div>
  );
};
