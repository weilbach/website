import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const makeStylesWrap = () => {
    const useStyles = makeStyles({
        card: {
            minWidth: 275,
            
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    return useStyles;
}

const classes = makeStylesWrap()
const bull = <span className={classes.bullet}>.</span>

class Word extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    
    render() {
        return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the day
                </Typography>
                <Typography variant="h5" component="h2">
                    be
                    {bull}
                    nev
                    {bull}o{bull}
                    lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br /> 
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
        </Card>
        );
        
    }
}




export default Word;