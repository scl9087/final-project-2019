import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class PlanetCard extends React.Component {

    render() {
        const location = this.props.location;
        return(
            <li key={location.id} className="list-item">
                <div className="profile-img">
                    <img src={location.image} alt={location.name} />
                </div>
                <div className="content">
                    <h2>{location.name}</h2>
                    <h3>status: {location.status}</h3>
                    <Link to={`/location/${location.id}`} className="btn">Learn more</Link>
                </div>
            </li>
        )
    }
}
export default PlanetCard;