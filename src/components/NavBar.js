import { NavLink } from "react-router-dom";
import twitter from "../img/twitter.png";
import home from "../img/home.png";
import hashtag from "../img/hashtag.png";
import speaker from "../img/speaker.png";
import letter from "../img/letter.png";
import menu from "../img/menu.png";
import user from "../img/user.png";
import message from "../img/message.png";
import save from "../img/save.png";

function NavBar() {
  const buttonMessage = () => {
    alert("Does this world really neeed another pointless tweet?");
  };

  return (
    <div className="NavBar">
      <img src={twitter} alt="twitter logo" className="Twitter" />

      <NavLink to="/" className="NavLink">
        <img src={home} alt="home" className="Icons" /> Home
      </NavLink>

      <NavLink to="/tweets" className="NavLink">
        <img src={hashtag} alt="hashtag" className="Icons" />
        Explore
      </NavLink>

      <NavLink to="/" className="NavLink">
        <img src={speaker} alt="notifications" className="Icons" />
        Notifications
      </NavLink>

      <NavLink to="/" className="NavLink">
        <img src={letter} alt="messages" className="Icons" />
        Messages
      </NavLink>

      <NavLink to="/" className="NavLink">
        <img src={save} alt="bookmars" className="Icons" />
        Bookmarks
      </NavLink>

      <NavLink to="/" className="NavLink">
        <img src={menu} alt="lists" className="Icons" />
        Lists
      </NavLink>

      <NavLink to="/profile/" className="NavLink">
        <img src={user} alt="profile" className="Icons" />
        Profile
      </NavLink>

      <NavLink to="/" className="NavLink">
        <img src={message} alt="more" className="Icons" />
        More
      </NavLink>
      <div className="Button">
        <button onClick={buttonMessage}>Tweet</button>
      </div>
    </div>
  );
}

export default NavBar;
