import { Col, Row } from "react-bootstrap";
import "./styles.scss";
import { BsFillPersonFill } from "react-icons/bs";
const NewPerson = ({ img, name, date }) => {
  return (
    <div className="new_personal_message_container">
      <div className="img-info ">
    
          <BsFillPersonFill className="icon" />

        <div className="img">
          {img ? <img src={img} alt={name} /> : <h1>{name[0]}</h1>}
        </div>
      </div>
      <div className="follow" xs={4}>
        <span>{name}</span>
        <h5>{name}</h5>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default NewPerson;
