import { AppBar, InputBase, Toolbar, Typography,Badge ,Avatar} from '@material-ui/core';
import {Search,Mail,Notifications, FindReplace, Cancel} from '@material-ui/icons'
import React, { useState } from 'react';
import useStyle from '../../styles/NavbarStyle';


const Navbar = () => {
    const [open , setopen] =useState(false);
    const classes = useStyle({open});
    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>
                    وبلاگ علی
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    وبلاگ 
                </Typography>
                <div className={classes.search}>
                    <Search/>
                    <InputBase placeholder='جستجو کنید...' className={classes.inputbase}/>
                    <Cancel onClick={()=>setopen(false)} className={classes.cancel}/>
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchsm} onClick={()=>setopen(true)}/>
                    <Badge badgeContent={4} color="error" className={classes.badge}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color="secondary" className={classes.badge}>
                        <Notifications/>
                    </Badge>
                    <Avatar alt="Remy Sharp"  src="	https://v4.mui.com/static/images/avatar/1.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

