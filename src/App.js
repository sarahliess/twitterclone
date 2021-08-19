import './App.css';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Post from './components/Post';

const	messages = [
  {
    id: "fb1022",
    text: "hello world!",
    date: "19-08-2021",
    user: {
       id: "fb1122",
       name: "Frank",
       email: "frank@gmail.com"
    }
 },
 {
  id: "fb1023",
  text: "It is a twitter project!",
  date: "19-08-2021",
  user: {
     id: "fb1123",
     name: "Fredy",
     email: "fredy@gmail.com"
  }
},
{
  id: "fb1024",
  text: "hello twitter",
  date: "19-08-2021",
  user: {
     id: "fb1124",
     name: "Dennis",
     email: "dennis@gmail.com"
  }
},
{
  id: "fb1025",
  text: "There is only one planet!",
  date: "‘19-08-2021’",
  user: {
     id: "‘fb1125’",
     name: "‘Sarah’",
     email: "‘sarah@gmail.com’"
  }
},
{
  id: "fb1026’",
  text: "‘Take your time!’",
  date: "‘19-08-2021’",
  user: {
     id: "‘fb1126’",
     name: "‘Soraya’",
     email: "‘soraya@gmail.com’"
  }
}]

console.log(messages[1].id);


function App() {

  return (
    <div className="App">
      <div className="top">
          <header className="NavBarMain">
            <NavBar />
          </header>

          <main className="Main">
            <Switch>
              <Route path='/tweets/:id'>
                <Post messages={messages}/>
                </Route>
                <Route path='/'>
                  <Home messages={messages}/>
                </Route>
            </Switch>
          </main>

          <div className="SideBar">
            Test
          </div>

      </div>
      <footer className="bottom">
        test 2
      </footer>
    </div>
  );
}

export default App;
