import {
    useEffect
    , useRef
} from 'react';

/**
 * This hook is for starting and using an animation loop in react
 * @param callback - the callback to be excued on every animation frame
 */

export const useAnimationFrame = ( callback: any ) => {
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();

    const animate = ( time: number ) => {
        if ( previousTimeRef.current != undefined ) {
            const deltaTime = time - previousTimeRef.current;
            callback( deltaTime );
        }
        previousTimeRef.current = time;
        requestRef.current = window.requestAnimationFrame( animate );
    };

    useEffect( () => {
        requestRef.current = requestAnimationFrame( animate );
        return () => cancelAnimationFrame( requestRef?.current as number );
    }, [] );
};
