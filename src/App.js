import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import SideBar from "./components/SideBar";
import arrow from "./img/arrow.png";
import threedots from "./img/threedots.png";
import twitter from "./img/twitter.png";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getTweets = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_TWEETS_API}/posts`
        );
        setMessages(data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.error);
        } else {
          console.log(error.message);
        }
      }
    };
    getTweets();
  }, []);

  const alertText = () => {
    alert(
      "Sorry, this does not have any real functionality yet. Thanks for trying though."
    );
  };

  return (
    <div className="App">
      <div className="top">
        <header className="NavBarMain">
          <NavBar />
        </header>

        <main className="Main">
          <div className="Input">
            <a href="/">
              <img className="Arrow" src={arrow} />
            </a>
            <input type="text" />
            <img onClick={alertText} className="ThreeDots" src={threedots} />
          </div>
          <Switch>
            <Route path="/tweets/:id">
              <PostDetail messages={messages} />
            </Route>
            <Route path="/">
              <Home messages={messages} />
            </Route>
          </Switch>
        </main>

        <SideBar messages={messages} />
      </div>
      <footer className="bottom">
        <p>
          An attempt to clone twitter in less than two days. Good thing about
          this one: guaranteed 0% Trump influence. Want to leave this safe
          space? Won't stop you, go ahead:
        </p>
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter logo" className="TwitterBottom" />
        </a>
      </footer>
    </div>
  );
}

export default App;
