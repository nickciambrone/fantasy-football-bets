import React from "react";
import "./App.css";
import HomePage from './pages/homepage/homepage.component'
import {Header} from './components/header/header.component'
import {Switch, Route} from 'react-router-dom';
import SetLineUpContainer from './pages/set-lineup-container/set-lineup-container.component'
import ViewLines from './pages/view-lines/view-lines.component'


const App = () => {
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path = '/fantasy-action' component= {HomePage} />
    <Route exact path = '/set-lineup' component= {SetLineUpContainer} />
    <Route exact path = '/view-lines' component= {ViewLines} />


    </Switch>
    </div>
  );
};

export default App;
