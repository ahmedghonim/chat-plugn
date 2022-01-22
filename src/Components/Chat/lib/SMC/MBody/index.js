import React from "react";
import "./styles.scss";

const ResponsMessage = ({ text, img }) => {
  return (
    <div className="res-message mb-2">
      <div className="text_container">{text}</div>
      <div className="img_container">
        {img ? <img src={img} alt="pic img" /> : <span>A</span>}
      </div>
    </div>
  );
};
const ResquestMessage = ({ text }) => {
  return (
    <div className="req-message mb-2">
      <div></div>
      <div className="text_container">{text}</div>
    </div>
  );
};

function MBody({ text, from }) {
  return (
    <div className="mbody_container py-3 ">
      <ResponsMessage text={text} />
      <ResquestMessage text={text} />
    </div>
  );
}

export default MBody;
