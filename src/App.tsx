import { useState } from 'react';

// Components
import Ball from './Ball/Ball';
import Paddle from './Paddle/Paddle';
import Scoreboard from './Scoreboard/Scoreboard';

// Types
import { Scores } from './types/types';

// Hooks
import { useAnimationFrame } from './hooks/useAnimationFrame';

// Styles
import classes from './App.module.css';

const initScores: Scores = {
    playerScore: 0
    , computerScore: 0
};

function App () {
    const [ scores, setScores ] = useState<Scores>( initScores );
    const [ delta, setDelta ] = useState<number>( 0 );

    useAnimationFrame( ( delta: number ) => setDelta( delta ) );

    return (
        <div className={ classes.gameWrapper } >
            <Scoreboard scores={ scores }/>
            <Paddle position='left' />
            <Paddle position='right'/>
            <Ball delta={ delta }/>
        </div>
    );
}

export default App;
