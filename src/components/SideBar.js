import { useState, useEffect } from "react";
import axios from "axios";

function SideBar() {
  const butonClickProfile = () => {
    alert("Yup, logged out safely. Can confirm.");
  };
  const [me, setMe] = useState({});

  useEffect(() => {
    axios
      .get("https://mini-tweet17.herokuapp.com/users/611f704c9efc224298ebc181")
      .then((json) => setMe(json.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(me);

  return (
    <div className="SideBar">
      <div className="ProfileTitle">Your profile:</div>
      <img
        alt="profile-image"
        className="ProfileImage"
        src="https://i.pinimg.com/564x/a7/69/aa/a769aa228131830e7225a6effc04ce66.jpg"
      />
      <div className="ProfileTex">
        <b>Name:</b> {me.name}
      </div>
      <div className="ProfileTex">
        <b>Email:</b> {me.email}
      </div>
      <div className="ProfileTex">
        <b>Your status:</b> I am rarely happier than when spending entire day
        programming my computer to perform automatically a task that it would
        otherwise take me a good ten seconds to do by hand. <br />
        <br />
        <em>- Douglas Adams</em>
      </div>
      <button onClick={butonClickProfile} className="LogOut">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
