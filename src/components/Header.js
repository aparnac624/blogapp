import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    component: {
        background: 'whitesmoke',
        color: 'black'
    },
    container:{
        justifyContent: 'center',
        '& > *':{
            padding:20
        }
    },
    link : {
        textDecoration:'none',
        color:'inherit'
    }
})


const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container}>
                <Link className={classes.link} to='/'><Typography> HOME </Typography></Link>
                <Typography> ABOUT </Typography>
                <Link to ='/loginpage'><Typography> LOGIN </Typography></Link>
                <Link to ='/signuppage'><Typography> SIGNUP </Typography></Link>
            </Toolbar>
        </AppBar>

    )
}

export default Header;



