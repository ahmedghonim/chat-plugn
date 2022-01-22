import "./styles.scss";
import { BsFillPersonFill } from "react-icons/bs";
import { useContext } from "react";
import { NavStateContext } from "../../Context";
const NewPerson = ({ img, name, subName, isFollow = true }) => {
  const { setShowMessages } = useContext(NavStateContext);

  return (
    <div onClick={()=>setShowMessages(true)} className="new_personal_message_container ">
      <div className="img-info ">
        <BsFillPersonFill className="icon" />

        <div className="img">
          {img ? <img src={img} alt={name} /> : <h1>{name[0]}</h1>}
        </div>
      </div>
      <div className="follow " xs={4}>
        <span>{isFollow && "متابع"}</span>
        <h5>{name}</h5>
        <span>{subName}</span>
      </div>
    </div>
  );
};

export default NewPerson;
