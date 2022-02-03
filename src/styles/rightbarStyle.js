import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
    container: {
        paddingTop: '15px',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        [theme.breakpoints.up('sm')]: {
            backgroundColor: '#fff',
            color: '#555',
           
        },

    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('xs')]: {
            marginBottom: theme.spacing(2.5)
        },
        cursor: 'Pointer'
    },
    text: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    icon: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    }
}))