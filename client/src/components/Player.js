import React from 'react';

//Display the player data you receive from the API
export default function Player (props) {
    const {player} = props;
    return(
        <div>
        <h2>Name: {player.name}</h2>
        <h3>Country: {player.country} </h3>
        <p>Searches: {player.searches}</p>
        </div>
    )
}