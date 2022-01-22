import React from "react";
import "./styles.scss";
import { AiOutlineSend } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { Button, Stack } from "react-bootstrap";
import MBody from "./MBody";
import PersonMessage from "../PersonMessage";
function SMC() {
  return (
    <Stack className="body_message overflow-auto border p-2 border-1 border-light solid ">
      <div>
        {/* <PersonMessage name="ahmed"/> */}
      </div>
      <div className="tstt">
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
        <MBody text="ahmed ahm,wed" />
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
    </Stack>
  );
}

export default SMC;
