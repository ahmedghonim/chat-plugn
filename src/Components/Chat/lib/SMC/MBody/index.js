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

function MBody({ data }) {
  return (
    <div className="mbody_container py-3 ">
      {data.messages.map(({ req, res }) => (
        <>
        {req&&<ResponsMessage text={req} />} 
        {res&&<ResquestMessage text={res} />} 
          
        </>
      ))}
    </div>
  );
}

export default MBody;
