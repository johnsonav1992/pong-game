// Components
import Ball from './Ball/Ball';
import Paddle from './Paddle/Paddle';
import Scoreboard from './Scoreboard/Scoreboard';

// Types
import { Scores } from './types/types';

// Styles
import classes from './App.module.css';
import { useState } from 'react';

const initScores: Scores = {
    playerScore: 0
    , computerScore: 0
};

function App () {
    const [ scores, setScores ] = useState<Scores>( initScores );

    return (
        <div className={ classes.gameWrapper } >
            <Scoreboard scores={ scores }/>
            <Paddle position='left' />
            <Paddle position='right'/>
            <Ball />
        </div>
    );
}

export default App;
