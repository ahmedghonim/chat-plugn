import React from "react";
import "./styles.scss";
import { AiOutlineSend } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { Button } from "react-bootstrap";
import MBody from "./MBody";
function SMC() {
  return (
    <div className="smc_container">
      <div className="body">
        <MBody text="ahmed ahm,wed"/>
      </div>
      <div className="text_body w-100 d-flex mt-2">
        <Button variant="outline-light">
          <AiOutlineSend />
        </Button>
        <div className="w-100 mx-2 ">
          <input
            className="w-100 h-100  bg-transparent "
            placeholder="ابدا محادثة جديده "
          />
        </div>
        <Button variant="outline-light">
          <MdPermMedia />
        </Button>
      </div>
    </div>
  );
}

export default SMC;
