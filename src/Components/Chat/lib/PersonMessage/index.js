import { useContext } from "react";
import { NavStateContext } from "../../Context";
import "./styles.scss";

const PersonMessage = ({ currantMessageId, img, name, date }) => {
  const { setShowMessages } = useContext(NavStateContext);

  return (
    <div
      onClick={() => {
        setShowMessages(true);
        currantMessageId();
      }}
      className="personal_message_container "
    >
      <div className="info">
        <div className="img">
          {img ? <img src={img} alt={name} /> : <h3>{name[0]}</h3>}
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
