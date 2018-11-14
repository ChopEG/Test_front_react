const style = {

    content: {
        display: 'flex',
        flexGrow: '1',
        padding: '0 20px',
        flexDirection: 'column'
    },
    title: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        margin: '0',
        padding: '30px 0 0 0',
        lineHeight: 'normal',
        fontSize: '22px',
        color: '#333333'
    },
    titleSub: {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
        fontSize: '16px',
        margin: '0',
        color: '#333333',
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 'normal',
        fontSize: '16px',
        color: '#333333',
        margin: '10px 0',
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    description: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 'normal',
        fontSize: '14px',
        color: '#333333',
        padding: '0',
        margin: '10px 0 0 0',
        height: '77px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    divider: {
        margin: '28px 0 10px 0',
        border: '1px solid rgba(0, 0, 0, 0.2)'
    },
    contractor: {
        display: 'inline-block',
        width: '45px',
        height: '45px',
        marginTop: '7px',
        marginRight: '20px',
        borderRadius: '50%',
    },
    moreDetailsLink: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '20px',
        bottom: '20px',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 'bold',
        lineHeight: 'normal',
        fontSize: '14px',
        color: '#333333',
        textDecoration: 'none',
    },
    icon: {
        margin: '7px'
    }
};

export default style;