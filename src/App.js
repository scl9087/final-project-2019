import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Galaxy from './Galaxy';
import PlanetPage from './PlanetPage';
import logo from './logo.png';


function location(props) {
  return (
    <div>
      
      <PlanetPage 
        id = {props.match.params.id}
      />
      <Link to="/" style={{position: 'absolute', top: 90}}>&#8810; BACK</Link>
    </div>
  )
}

function NotFound() {
  return <h1>404</h1>
}

function App() {

  return (
    <div>
      <Router>
        <div className="nav">
          <Link to="/"><img src={logo}/></Link>
        </div>

        <Switch>
          <Route exact path="/"><Galaxy /></Route>
          <Route path="/location/:id" component={location} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;