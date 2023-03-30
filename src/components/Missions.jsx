import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions">Missions</div>
        <div>
          <Title headline="Missões" />
          {missions.map(({ name, year, country, destination }) => {
            const missoes = (<MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />);
            return missoes;
          })}
        </div>

      </>
    );
  }
}
