import { LegacyRef, forwardRef } from 'react';

// Styles
import classes from './Ball.module.css';

const Ball = forwardRef( ( _, ref: LegacyRef<HTMLDivElement> ) => {
    return (
        <div
            className={ classes.ball }
            ref={ ref }
        />
    );
} );

Ball.displayName = 'Ball';

export default Ball;
