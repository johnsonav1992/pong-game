// Types
import { Scores } from '../types/types';

// Styles
import classes from './Scoreboard.module.css';

interface Props {
    scores: Scores
}

const Scoreboard = ( { scores }: Props ) => {
    return (
        <div className={ classes.wrapper }>
            <div className={ `${ classes.score } ${ classes.player }` }>
                { scores.playerScore }
            </div>
            <div className={ classes.score }>
                { scores.computerScore }
            </div>
        </div>
    );
};

export default Scoreboard;
