import React from 'react';
import styled from 'styled-components';
import Player from './Player';

const PlayersContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export default function PlayerList(props) {
    const { players } = props;
    return (
        <PlayersContainer data-testid="playerList">
            {
                players.map((player) => {
                return <Player key={player.id} player={player} />
                })
            }
        </PlayersContainer>
    )
}