import React from 'react';
import injectSheet from 'react-jss';

import forwardIcon from '../svg/forward.svg';
import moneyIcon from '../svg/money.svg';
import locationIcon from '../svg/location.svg';
import style from '../styles/CardContent';

const CardConTent = ({ classes, name, description, location, budget, contractors }) => {
    const { contractor, info, icon, ...styles  } = classes;
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.infoContainer}>
                <span className={info}><img className={icon} src={locationIcon} alt="city-icon"/>{`${location.city}, ${location.country}`}</span>
                <span className={info}><img className={icon} src={moneyIcon} alt="money-icon"/>{budget}</span>
            </div>
            <p className={styles.description}>{description}</p>
            <span className={styles.divider} />
            <h4 className={styles.titleSub}>Contractors</h4>
            <div>
                {contractors && contractors.map(({ id, avatar }) => (
                        <img key={id} className={contractor} src={avatar} alt="avatar" />
                    )
                )}
            </div>
            <a className={styles.moreDetailsLink} href="/">
                View more details
                <img className={icon} src={forwardIcon} alt="forward-icon" />
            </a>
        </div>
    );
};

export default injectSheet(style)(CardConTent);