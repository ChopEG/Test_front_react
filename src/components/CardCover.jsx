import React from 'react';
import injectSheet from 'react-jss';

const CardCover = ({classes, image, children}) => {
    return (
        <div className={classes.imageContainer}>
            <img src={image} alt="cover"/>
            {children}
        </div>
    );
};

const style = {
    imageContainer: {
        width: '225px',
        height: '100%',
        position: 'relative'
    }
};

export default injectSheet(style)(CardCover);