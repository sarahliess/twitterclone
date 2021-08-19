import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import SideBar from "./components/SideBar";
import arrow from "./img/arrow.png";
import threedots from "./img/threedots.png";
import twitter from "./img/twitter.png";

// const	messages = [
//   {
//     id: "fb1022",
//     text: "hello world!",
//     date: "19-08-2021",
//     user: {
//        id: "fb1122",
//        name: "Frank",
//        email: "frank@gmail.com"
//     }
//  },
//  {
//   id: "fb1023",
//   text: "It is a twitter project!",
//   date: "19-08-2021",
//   user: {
//      id: "fb1123",
//      name: "Fredy",
//      email: "fredy@gmail.com"
//   }
// },
// {
//   id: "fb1024",
//   text: "hello twitter",
//   date: "19-08-2021",
//   user: {
//      id: "fb1124",
//      name: "Dennis",
//      email: "dennis@gmail.com"
//   }
// },
// {
//   id: "fb1025",
//   text: "There is only one planet!",
//   date: "‘19-08-2021’",
//   user: {
//      id: "‘fb1125’",
//      name: "‘Sarah’",
//      email: "‘sarah@gmail.com’"
//   }
// },
// {
//   id: "fb1026’",
//   text: "‘Take your time!’",
//   date: "‘19-08-2021’",
//   user: {
//      id: "‘fb1126’",
//      name: "‘Soraya’",
//      email: "‘soraya@gmail.com’"
//   }
// }]

// console.log(messages[1].id);

function App() {
  const [messages, setMessages] = useState([
    {
      id: "fb1022",
      text: "hello world! This is my very first twitter post. I hate my life. Corona sucks. This sucks. ",
      date: "19-08-2021",
      user: {
        id: "fb1122",
        name: "Frank",
        email: "frank@gmail.com",
      },
    },
    {
      id: "fb1023",
      text: "It is a twitter project!",
      date: "19-08-2021",
      user: {
        id: "fb1123",
        name: "Fredy",
        email: "fredy@gmail.com",
      },
    },
    {
      id: "fb1024",
      text: "hello twitter, you suck.",
      date: "19-08-2021",
      user: {
        id: "fb1124",
        name: "Dennis",
        email: "dennis@gmail.com",
      },
    },
    {
      id: "fb10222",
      text: "There is only one planet! Very true.",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1028",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1023335",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1024445",
      text: "There is only one planet!",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1125’",
        name: "‘Sarah’",
        email: "‘sarah@gmail.com’",
      },
    },
    {
      id: "fb1026’",
      text: "‘Take your time!’",
      date: "‘19-08-2021’",
      user: {
        id: "‘fb1126’",
        name: "‘Soraya’",
        email: "‘soraya@gmail.com’",
      },
    },
  ]);

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
