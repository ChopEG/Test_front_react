import React, { Component } from 'react';
import injectSheet from 'react-jss';

import downIcon from '../svg/down icon.png';

class ListHeading extends Component {
    state = {
        budget: false,
        startDate: false,
        endDate: false
    };

    sort = (type) => { // Sorting only by budget
        this.setState({[type]: !this.state[type]});

        if (type === 'budget') {
            const sort = this.state.budget ? 'asc' : 'desc';
            this.props.onSort([{type, sort}]);
        }
    };

    render() {
        const { classes } = this.props;
        const { sortRule, icon, iconRotate } = classes;
        const { budget, startDate, endDate } = this.state;
        return(
            <div className={classes.listHeading}>
                <h1 className={classes.title}>All Projects</h1>
                <div className={classes.sortContainer}>
                    <span className={classes.sortLabel}>Sort by:</span>
                    <span className={sortRule} onClick={() => this.sort('budget')}>
                        Budget
                        <img className={budget ? iconRotate: icon} alt="down-icon" src={downIcon} />
                    </span>
                    <span className={sortRule} onClick={() => this.sort('startDate')}>
                        Start date
                        <img className={startDate ? iconRotate: icon} alt="down-icon" src={downIcon} />
                    </span>
                    <span className={sortRule} onClick={() => this.sort('endDate')}>
                        End date
                        <img className={endDate ? iconRotate: icon} alt="down-icon" src={downIcon} />
                    </span>
                </div>
            </div>
        );
    }
};

const styles = {
    listHeading: {
        width: '100%',
        margin: '80px 0 20px 0'
    },
    title: {
        width: '300px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'bold',
        float: 'left',
        lineHeight: 'normal',
        fontSize: '30px',
        margin: '0',
        color: '#333333'
    },
    sortContainer: {
        height: '45px',
        float: 'right',
        border: '1px solid #2D9CDB',
        boxSizing: 'border-box',
        borderRadius: '5px 5px',
        overflow: 'hidden'
    },
    sortLabel: {
        textAlign: 'center',
        padding: '6px 71px',
        lineHeight: '45px',
        fontFamily: 'Nunito',
        fontWeight: '600',
        fontSize: '24px',
        color: '#333333'
    },
    sortRule: {
        display: 'inline-block',
        width: '229px',
        height: '45px',
        lineHeight: '45px',
        textAlign: 'center',
        background: '#2D9CDB',
        fontFamily: 'Nunito',
        fontSize: '24px',
        color: '#FFFFFF',
        cursor: 'pointer'
    },
    icon: {
        width: '30px',
        height: '30px',
        margin: '0 0 -5px 10px'
    },
    iconRotate: {
        width: '30px',
        height: '30px',
        margin: '0 0 -5px 10px',
        transform: 'rotate(180deg)'
    }
};

export default injectSheet(styles)(ListHeading);
