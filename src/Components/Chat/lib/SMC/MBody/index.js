import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import "./styles.scss";

const ResponsMessage = ({ text, img, name }) => {
  return (
    <div className="res-message mb-2">
      <div className="text_container">{text}</div>
      <div className="img_container">
        {img ? <img src={img} alt="pic img" /> : <span>{name[0]}</span>}
      </div>
    </div>
  );
};
const ResquestMessage = ({ text }) => {
  return (
    <div className="req-message mb-2">
        <span  className="text_icon">
          <FaRegCheckCircle />
        </span>
      <div className="text_container">
        <span>{text}</span>
      </div>
    </div>
  );
};

function MBody({ data }) {
  return (
    <div className="mbody_container py-3 ">
      {data.messages.map(({ req, res }) => (
        <>
          {req && <ResponsMessage text={req} name={data.name} />}
          {res && <ResquestMessage text={res} />}
        </>
      ))}
    </div>
  );
}

export default MBody;
