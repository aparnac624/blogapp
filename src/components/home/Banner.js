import { makeStyles , Box , Typography } from '@material-ui/core';

const useStyles = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://th.bing.com/th/id/OIP.0kTD-unuaAOdmQA-JMMxbgHaEK?pid=ImgDet&rs=1'}) center/55% repeat-x #000`,
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1
        },
        '& :last-child': {
            fontSize: 20,
            background: '#FFFFFF',
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    const url = '';
    return (
        <Box className ={classes.image}>
            <Typography>WEEBLY BLOGS</Typography>
            <Typography></Typography>
        </Box>
    )
}


export default Banner;