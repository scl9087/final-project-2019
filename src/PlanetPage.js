import React from 'react';
import CharacterCard from './PlanetCard';
import Galaxy from './Galaxy';

class PlanetPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          results: {}
        };
      }
      
      componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/location/${this.props.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                location: result
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
      render() {
        const { error, isLoaded, location } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="container details">
              <div className="profile-img">
                <img src={location.image} alt={location.name} />
              </div>
              <div className="content">
                <h1>{location.name}</h1>
                <h3>type: {location.type}</h3>
                <hr />
                {/* <p><strong>location:</strong>  {character.location.name}</p>
                <p><strong>species:</strong>  {character.species}</p>
                <p><strong>origin:</strong>  {character.origin.name}</p>
                <p><strong>gender:</strong>  {character.gender}</p> */}
                
              </div>
              
            </div>
          );
        }
      }

}

export default PlanetPage;