export const INITIAL_VELOCITY = .025;

export const getRandomNumBetween = ( min: number, max: number ) => {
    return Math.random() * ( max - min ) + min;
};
