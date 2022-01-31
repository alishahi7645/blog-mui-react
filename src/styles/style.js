import {makeStyles} from "@material-ui/styles";
import {theme} from '../themes/theme'
export default makeStyles(theme =>({
    button:{
        color:theme.pallette.primary.main,
        border:'1px solid black'
    },
    right:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        }
    },

}))