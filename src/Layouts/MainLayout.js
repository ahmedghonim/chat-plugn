import React from "react";
import Chat from "../Components/Chat";
import NavBar from "../Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './styles.scss'
export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <Container className="main-layout_container">{children}</Container>
      <Chat />
    </div>
  );
};
