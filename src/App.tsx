import {
    RefObject,
    useRef
    , useState
} from 'react';

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

    const ballRef = useRef<HTMLDivElement>( null );

    const setX = ( ball: HTMLDivElement, value: number ) => {
        ball.style.setProperty( '--x', value.toString() );
    };

    const setY = ( ball: HTMLDivElement, value: number ) => {
        ball.style.setProperty( '--y', value.toString() );
    };

    const updateBall = ( ballRef: RefObject<HTMLDivElement>, delta: number ) => {
        const ball = ballRef.current;
        if ( ball ) {
            const x = parseFloat( getComputedStyle( ball ).getPropertyValue( '--x' ) );
            const y = parseFloat( getComputedStyle( ball ).getPropertyValue( '--y' ) );

            setX( ball, 5 );
            setY( ball, 8 );

        }
    };

    const getRandomNumBetween = ( min: number, max: number ) => {
        return Math.random() * ( max - min ) + min;
    };

    const resetBall = ( ballRef: RefObject<HTMLDivElement> ) => {
        const ball = ballRef.current;
        if ( ball ) {
            const x = parseFloat( getComputedStyle( ball ).getPropertyValue( '--x' ) );
            const y = parseFloat( getComputedStyle( ball ).getPropertyValue( '--y' ) );

            setX( ball, 50 );
            setY( ball, 50 );
            let direction = { x: 0, y: 0 };
            const something = Math.abs( direction.x ) <= 2 || Math.abs( direction.x ) >= .9;
            while ( Math.abs( direction.x ) <= 2 || Math.abs( direction.x ) >= .9 ) {
                const heading = getRandomNumBetween( 0, 2 * Math.PI );
                direction = { x: Math.cos( heading ), y: Math.sin( heading ) };
            }
            console.log( direction );

        }
    };

    // updateBall( ballRef, 3 );
    // resetBall( ballRef );

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
