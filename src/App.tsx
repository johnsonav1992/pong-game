import {
    createRef,
    useEffect
    , useRef
    , useState
} from 'react';

// Components
import Ball from './Ball/Ball';
import Paddle from './Paddle/Paddle';
import Scoreboard from './Scoreboard/Scoreboard';

// Types
import { Scores } from './types/types';

// Styles
import classes from './App.module.css';
import { useAnimationFrame } from './hooks/useAnimationFrame';

const initScores: Scores = {
    playerScore: 0
    , computerScore: 0
};

function App () {
    const [ scores, setScores ] = useState<Scores>( initScores );

    const ballRef = createRef<HTMLDivElement>();

    // useAnimationFrame( ( delta: number ) => console.log( delta ) );

    return (
        <div className={ classes.gameWrapper } >
            <Scoreboard scores={ scores }/>
            <Paddle position='left' />
            <Paddle position='right'/>
            <Ball ref={ ballRef }/>
        </div>
    );
}

export default App;
