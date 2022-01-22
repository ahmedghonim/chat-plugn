import { useContext } from "react";
import { NavStateContext } from "../../Context";
import "./styles.scss";

const PersonMessage = ({ img, name, date }) => {
  const { setShowMessages } = useContext(NavStateContext);
  
  return (
    <div
      onClick={() => setShowMessages(true)}
      className="personal_message_container "
    >
      <div className="info">
        <div className="img">
          {img ? <img src={img} alt={name} /> : <h1>{name[0]}</h1>}
        </div>
        <h5>{name}</h5>
      </div>

      <div className="date" xs={4}>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default PersonMessage;
