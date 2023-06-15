// Components
import Ball from './Ball/Ball';
import Paddle from './Paddle/Paddle';
import Scoreboard from './Scoreboard/Scoreboard';

// Styles
import classes from './App.module.css';

function App () {

    return (
        <div className={ classes.gameWrapper } >
            <Scoreboard />
            <Paddle position='left' />
            <Paddle position='right'/>
            <Ball />
        </div>
    );
}

export default App;
