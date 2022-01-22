import React, { useContext } from "react";
import Styles from "./styles.module.scss";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ModelMessages from "../lib/Model";
import { Button } from "react-bootstrap";
import { NavStateContext } from "../Context";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const NavChat = ({ arrowState, decoratedOnClick }) => {
  const { showMessages, setShowMessages } = useContext(NavStateContext);

  return (
    <div className={Styles["container"]}>
      <div onClick={decoratedOnClick} className={Styles["text"]}>
        <span>الرسائل</span>
      </div>
      <div className={Styles["icons"]}>
        {!showMessages ? (
          <>
            <div className="envelope">
              <ModelMessages />
            </div>
            <Button
              variant="outline-light"
              onClick={decoratedOnClick}
              className={Styles["arrow"]}
            >
              {!arrowState ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>
          </>
        ) : (
          <Button
            variant="outline-light"
            onClick={()=>setShowMessages(!showMessages)}
            className={Styles["arrow"]}
          >
           <MdOutlineKeyboardBackspace />  
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavChat;
