import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planetas) => {
          const { name, image } = planetas;
          const planeta = (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />);
          return planeta;
        })}
      </div>
    );
  }
}
