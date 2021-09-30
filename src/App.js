import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Chapter01 from './pages/Chapter01';
import Welcome from './pages/Welcome';
//import { motion } from 'framer-motion';
//import {Element} from 'react-scroll';
import React from 'react';
import WarriorActivation from './pages/WarriorActivation';
import { AnimatePresence } from "framer-motion";
import RoadMap from './pages/RoadMap';

function App() {
  return (
    <div>
      <Router>
        <AnimatePresence exitBeforeEnter initial={false}>
        
          <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/chapter01" exact component={Chapter01}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="/WarriorActivation" exact component={WarriorActivation}/>
            <Route path="/RoadMap" exact component={RoadMap}/>
          </Switch>
        
        </AnimatePresence>
      </Router>
    </div>

  );
}

export default App
