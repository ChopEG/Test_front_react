import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Card from './Card';

class CardList extends Component {
    render() {
        const { classes, projects } = this.props;
        return (
            <div className={classes.cardList}>
                {projects && projects.map((project, index) => <Card key={index} {...project} />)}
            </div>
        );
    }
}

const styles = {
    cardList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        background: '#FFF',
    },
};

export default injectSheet(styles)(CardList);