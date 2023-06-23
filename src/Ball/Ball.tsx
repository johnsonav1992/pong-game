import {
    useEffect
    , useRef
    , useState
} from 'react';

// Utils
import {
    INITIAL_VELOCITY
    , getRandomNumBetween
} from '../utils/utils';

// Styles
import classes from './Ball.module.css';

interface Props {
    delta: number;
}

const Ball = ( { delta }: Props ) => {
    const [ velocity, setVelocity ] = useState<number>( INITIAL_VELOCITY );
    const [ direction, setDirection ] = useState<{ x: number; y: number}>( { x: 0, y: 0 } );
    const ballRef = useRef<HTMLDivElement>( null );

    const setX = ( ball: HTMLDivElement, value: number ) => {
        ball.style.setProperty( '--x', value.toString() );
    };

    const setY = ( ball: HTMLDivElement, value: number ) => {
        ball.style.setProperty( '--y', value.toString() );
    };

    const updateBall = ( delta: number ) => {
        const ball = ballRef.current;
        if ( ball ) {

            const x = parseFloat( getComputedStyle( ball ).getPropertyValue( '--x' ) );
            const y = parseFloat( getComputedStyle( ball ).getPropertyValue( '--y' ) );

            setX( ball, x + direction.x * velocity * delta );
            setY( ball, y + direction.x * velocity * delta );

        }
    };

    const resetBall = () => {
        const ball = ballRef.current;
        if ( ball ) {

            setX( ball, 50 );
            setY( ball, 50 );

            let direction = { x: 0, y: 0 };

            while ( Math.abs( direction.x ) <= .2 || Math.abs( direction.x ) >= .9 ) {
                const heading = getRandomNumBetween( 0, 2 * Math.PI );
                direction = {
                    x: Math.cos( heading )
                    , y: Math.sin( heading )
                };
            }

            setDirection( direction );
            setVelocity( INITIAL_VELOCITY );
        }
    };

    useEffect( () => {
        resetBall();
    }, [] );

    useEffect( () => {
        // updateBall( delta );
    } );

    return (
        <div
            className={ classes.ball }
            ref={ ballRef }
        />
    );
};

export default Ball;
