import React from 'react';
import injectSheet from 'react-jss';

const Loader = ({ classes, display = false}) => {
    return (
        display &&
            <div className={classes.container}>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
                <div className={classes.dotLoading}></div>
            </div>
    );
};

const styles = {
    '@keyframes dot-keyframes': {
        '0%': {
            transform: 'scale(1, 1)',
        },
        '50%': {
            transform: 'scale(.5, .5)',
        },
        '100%': {
            transform: 'scale(1, 1)',
        },
    },
    container: {
        textAlign: 'center',
        width: '100%',
        marginTop: '150px'
    },
    dotLoading: {
        animation: 'dot-keyframes 1.5s infinite ease-in-out',
        backgroundColor: '#C4C4C4',
        borderRadius: '10px',
        display: 'inline-block',
        height: '20px',
        width: '20px'
    }

};

export default injectSheet(styles)(Loader);