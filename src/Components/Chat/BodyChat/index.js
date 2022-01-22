import React, { useContext, useState } from "react";
import SMC from "../lib/SMC";
import Style from "./styles.module.scss";
import PersonMessage from "../lib/PersonMessage";
import { NavStateContext } from "../Context";

const BoydChat = ({ data }) => {
  const { showMessages, currantMessages, setCurrantMessages } =
    useContext(NavStateContext);

  return (
    <div>
      {!showMessages ? (
        data.length ? (
          data.map(({ name, date, id }, index) => (
            <PersonMessage
              currantMessageId={() => setCurrantMessages(data[index])}
              key={id}
              name={name}
              date={date}
            />
          ))
        ) : (
          <div className="m-auto pt-5 text-center text-white">
            <h2>لا توجد رسائل</h2>
          </div>
        )
      ) : (
        <SMC data={currantMessages} />
      )}
    </div>
  );
};

export default BoydChat;
