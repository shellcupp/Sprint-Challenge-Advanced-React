import React from 'react';

export default function Player(props) {
    const {player} = props;
    return(
        <div>
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country} </h3>
        <p>Searches: {player.searches}</p>
        </div>
    )
}