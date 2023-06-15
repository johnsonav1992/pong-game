// Styles
import classes from './Paddle.module.css';

interface Props {
    position: string;
}

const Paddle = ( { position }: Props ) => {
    return (
        <div
            className={
                `${ classes.paddle } 
                ${ position === 'left' ? classes.left : classes.right }`
            }
        />
    );
};

export default Paddle;
