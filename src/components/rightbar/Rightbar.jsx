import { Container, Typography } from '@material-ui/core'
import { Home, Person, PhotoCamera, TabletMac, Bookmark, ExitToApp, Storefront, List, PlayCircleOutline, Settings } from "@material-ui/icons";
import React from 'react'
import useStyle from '../../styles/rightbarStyle'
function Rightbar() {
    const classes = useStyle();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>خانه</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>دوستان</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text}>لیست ها</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>دوربین</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>ویدیو</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>اپ</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>مجموعه ها</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text}>بازار</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>تنظیمات</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>خروج</Typography>
            </div>
        </Container>
    )
}

export default Rightbar

