import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import  "./styles.scss";

const Person = ({ img, name, date }) => {
  return (
    <div className="personal_message_container">
      <div className="info">
        <div className="img">
          {img? <img src={img} alt={name} />:<h1>{name[0]}</h1>}
         
        </div>
        <h5>{name}</h5>
      </div>

      <div className="date" xs={4}>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default Person;
