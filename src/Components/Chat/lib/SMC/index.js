import React from "react";
import "./styles.scss";
import { AiOutlineSend } from "react-icons/ai";
import { MdPermMedia } from "react-icons/md";
import { Button, Stack } from "react-bootstrap";
import MBody from "./MBody";
function SMC({ data }) {
  return (
    <Stack className="body_message overflow-auto border p-2 border-1 border-light solid ">
      {data ? (
        <>
          <div className="tstt">
            <MBody data={data} />
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
        </>
      ) : (
        <div className="m-auto pt-5 text-center text-white">
          <h2>لا توجد محادثة حاليا</h2>
        </div>
      )}
    </Stack>
  );
}

export default SMC;
