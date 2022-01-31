import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    container:{
        paddingTop:'5px',
        height:'100vh',
        backgroundColor:theme.palette.primary.main,
        color:'white',
        [theme.breakpoints.up('sm')]:{
            backgroundColor:'#fff',
            color:'#555',
            border :'1px solid #c5c5c5'
        },
        
    },
    item:{
        display:'flex',
        alignItems:'center',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.up('xs')]:{
            marginBottom:theme.spacing(3)
        },
        cursor:'Pointer'
    },
    text:{
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))