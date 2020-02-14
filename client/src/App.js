import React from 'react';
import Axios from 'axios';
import PlayerList from './components/PlayerList';
import './App.css';
import Styled from 'styled-components';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    Axios.get(`http://localhost:5000/api/players`)
      .then((res) => {
         console.log(res);
        this.setState({ players: res.data })
      })
      .catch((err) => {
        console.log('Uh oh, there was an error', err);
      })
  }
 
  render() {
    return (
        <div >
          <Pinkh1>Women's World Cup Soccer Players</Pinkh1>
        <PlayerList players={this.state.players} />
         </div>
    )
  }
}

const Pinkh1 = Styled.div`
color: pink;
text-align: center;
font-size: 3rem;
`;

export default App;