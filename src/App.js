import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from '../src/Home';
import {About} from '../src/About';
import {Contact} from '../src/Contact';
import {NoMatch} from '../src/NoMatch';
import {NavBar} from '../src/components/NavBar';


function App() {
  return (
   <React.Fragment>
   <NavBar />
  
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
       
      </Router>
   </React.Fragment>
  );
}

export default App;
