import { Container, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons';
import React from 'react'
import useStyle from '../../styles/Leftbarstyle'
function Leftbar() {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>خانه</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>خانه</Typography>
            </div>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>خانه</Typography>
            </div>
        </Container>
    )
}

export default Leftbar
