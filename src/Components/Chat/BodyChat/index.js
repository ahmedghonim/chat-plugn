import React, { useContext } from "react";
import SMC from "../lib/SMC";
import Style from "./styles.module.scss";
import PersonMessage from "../lib/PersonMessage";
import { NavStateContext } from "../Context";

const BoydChat = () => {
  const { showMessages } = useContext(NavStateContext);

  return (
    <div className={Style["container"]}>
      {!showMessages ? (
        <div >
          <PersonMessage  name="احمد" date="10/10/2020" />
          <PersonMessage name="aksjd" date="10/10/2020" />
          <PersonMessage name="asdklajsdlk" date="10/10/2020" />
        </div>
      ) : (
        <SMC />
      )}
    </div>
  );
};

export default BoydChat;
