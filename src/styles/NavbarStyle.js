import { alpha } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    toolbar:{
        display:'flex',
        justifyContent:'space-between'
    },
    logoLg:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    logoSm:{
        display:'block',
        [theme.breakpoints.up('sm')]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        width:'40%',
        [theme.breakpoints.down('xs')]:{
            display:(props) => (props.open ? 'flex' : 'none'),
            width:'60%'
        }
    },
    inputbase:{
        backgroundColor:alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor:alpha(theme.palette.common.white, 0.25),
        },
        width:'80%'
    },
    icons:{
        display:(props) => (props.open ? 'none' : 'flex'),
        alignItems:'center',
    },
    badge:{
        marginLeft:'12px',
        cursor:'pointer'
    },
    searchsm:{
        marginLeft:'10px',
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'block'
        },
        cursor:'pointer'
    },
    cancel:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }
    }
}))