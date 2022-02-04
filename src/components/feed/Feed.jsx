import { Container } from '@material-ui/core'
import React from 'react'
import Post from '../posts/post';
import { makeStyles } from "@material-ui/core";

const useStyle =makeStyles((theme) =>({
    Container:{
        height:'600px',
        paddingTop:theme.spacing(2),
        overflowY:'auto'
    }
}))
function Feed() {
    const classes = useStyle();
    return (
        <Container className={classes.Container}>
            <Post/>
            <Post/>
        </Container>
    )
}

export default Feed
