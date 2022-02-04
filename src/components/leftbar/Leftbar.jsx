import React from 'react';
import { Container, Avatar, Typography, ImageList, ImageListItem } from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import useStyle from '../../styles/Leftbarstyle';
function Leftbar() {
    const classes = useStyle()
    return (
        <>
            <Container>
                <Typography className={classes.title} gutterBottom>دوستان آنلاین</Typography>
                <AvatarGroup max={3} style={{marginBottom:'20px'}}>
                    <Avatar alt="Remy Sharp" src="	https://v4.mui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="	https://v4.mui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="	https://v4.mui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="	https://v4.mui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="	https://v4.mui.com/static/images/avatar/5.jpg" />
                    <Avatar alt="Trevor Henderson" src="	https://v4.mui.com/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography className={classes.title} gutterBottom>گالری</Typography>
                <ImageList rowHeight={120} className={classes.imageList} cols={2}>

                    <ImageListItem>
                        <img src='https://v4.mui.com/static/images/image-list/mushroom.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='	https://v4.mui.com/static/images/image-list/breakfast.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://v4.mui.com/static/images/image-list/burgers.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='	https://v4.mui.com/static/images/image-list/camera.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://v4.mui.com/static/images/image-list/morning.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='	https://v4.mui.com/static/images/image-list/hats.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='	https://v4.mui.com/static/images/image-list/honey.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://v4.mui.com/static/images/image-list/vegetables.jpg' alt='' className={classes.imageList}/>
                    </ImageListItem>

                </ImageList>
            </Container>
        </>
    )
}

export default Leftbar
