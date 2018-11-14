import React from 'react';
import injectSheet from 'react-jss';

const colorMap = {
    'Initiated': '#27AE60',
    'On track to be defaulted': '#F2994A',
    'Completed': '#333333',
    'Defaulted': '#EB5757',
    'Not Initiated': '#9B51E0',
    'On track to be completed': '#828282',
};

const CardStatus = ({ status, classes }) => {
    return (
        <span className={classes.badge}>
            {status}
        </span>
    )
};

const style = {
    badge: {
        position: 'absolute',
        display: 'block',
        left: '0',
        top: '0',
        padding: '4px 10px',
        background: ({ status }) => (colorMap[status] || '#EB5757'),
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        color: '#FFF',
        borderRadius: '5px 0px',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
    },
};

export default injectSheet(style)(CardStatus);