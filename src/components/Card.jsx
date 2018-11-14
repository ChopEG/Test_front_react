import React, { Component } from 'react';
import injectSheet from 'react-jss';

import CardCover from './CardCover';
import CardContent from './CardContent';
import ProgressBar from './ProgressBar';
import CardStatus from './CardStatus';

class Card extends Component {
    render() {
        const { classes, status,  progress, image, ...props} = this.props;
        return (
            <section className={classes.cardWrapper}>
                <div className={classes.card}>
                    <CardCover image={image}>
                        <CardStatus status={status}/>
                        <ProgressBar percent={progress}/>
                    </CardCover>
                    <CardContent {...props}/>
                </div>
            </section>
        );
    }
}

const styles = {
    cardWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexBasis: '50%'
    },
    card: {
        position: 'relative',
        overflow: 'hidden',
        width: '612px',
        height: '350px',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '50px',
        background: '#F2F2F2',
        boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px',
    }
};

export default injectSheet(styles)(Card);