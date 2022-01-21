import React from "react";
import Styles from "./styles.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ModelMessages from "../Model";
import { Button } from "react-bootstrap";
const NavChat = ({ show, decoratedOnClick }) => {
  return (
    <div className={Styles["container"]}>
      <div onClick={decoratedOnClick} className={Styles["text"]}>
        <span>الرسائل</span>
      </div>
      <div className={Styles["icons"]}>
        <div className="envelope">
          <ModelMessages />
        </div>
        <Button
          variant="outline-light"
          onClick={decoratedOnClick}
          className={Styles["arrow"]}
        >
          {!show ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
      </div>
    </div>
  );
};

export default NavChat;
