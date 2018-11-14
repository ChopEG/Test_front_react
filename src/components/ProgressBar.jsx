import React from 'react';
import injectSheet from 'react-jss';

const ProgressBar = ({ classes, percent }) => {
    return (
        <div className={classes.container}>
            <div className={classes.indicator} />
            <span className={classes.text}>{`${percent}% complete`}</span>
        </div>
    );
};

const calculateWidth = ({ percent }) => {
    const width = Math.round(183 * parseInt(percent, 10) / 100);

    return `${width}px;`;
};

const calculateColor = ({ percent }) => {
    return parseInt(percent, 10) >= 50 ? '#FFF' : '#333333';
};

const calculateTextAlign = ({ percent }) => {
    const value = parseInt(percent, 10);

    if (value === 100 || value === 0) return 'center';

    return value >= 50 ? 'left' : 'right';
};

const styles = {
    container: {
        position: 'absolute',
        width: '183px',
        height: '28px',
        left: '20px',
        bottom: '20px',
        zIndex: '1',
        overflow: 'hidden',
        background: '#FFF',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
    },
    indicator: {
        background: '#2D9CDB',
        height: '100%',
        width: calculateWidth,
    },
    text: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        zIndex: 2,
        lineHeight: '28px',
        padding: '0 3px',
        textAlign: calculateTextAlign,
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        color: calculateColor,
    }
};

ProgressBar.defaultProps = {
    percent: '0'
};

export default injectSheet(styles)(ProgressBar);