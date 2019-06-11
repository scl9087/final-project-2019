import React from 'react';
import PlanetCard from './PlanetCard';

class Galaxy extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }
  
  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/location/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results
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
    const { error, isLoaded, results } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {results.map(location => (
            <PlanetCard 
            location={location}
              key={location.id}
              id={location.id}
              // onLearnMore={this.props.galaxy(key)} 
            />
          ))}
        </ul>
      );
    }
  }
}

export default Galaxy;