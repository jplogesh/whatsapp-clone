import React, { useState } from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login.js";

function App() {

 const [user ,setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
       <Login/>
      ): (
        <div className = "app__body">
          <Router>
              <Sidebar/>
              <Switch>
                <Route path ="/rooms/:roomId">
                    <Chat />
                  </Route>
                  <Route
                    path="/">
                      <Chat/>
                  </Route>
            </Switch>
            
          </Router>
              </div>
       )
      }
   </div> 
  );
}

export default App;
