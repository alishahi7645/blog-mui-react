import {makeStyles} from "@material-ui/styles";
import {theme} from '../themes/theme'
export default makeStyles(theme =>({
    right:{
        paddingTop:'10px',
        [theme.breakpoints.down('xs')]:{
            paddingTop:'0'
        }
    },
    left:{
        padding:'10px',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },

}))