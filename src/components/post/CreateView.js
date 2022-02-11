//import { useState } from 'react';
import { Box, makeStyles, FormControl, InputBase, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';



const useStyle = makeStyles((theme) => ({
    container: {
        padding:'0 100px',
        [theme.breakpoints.down('md')] : {
            padding: 0
        }

    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit:'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField : {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width : '100%',
        margin : 50 ,
        border: 'none',
        fontSize: 18,
        '&:focus-visible':{
            outline : 'none'
        }

    }
}));




const CreateView = () => {
    const classes = useStyle();
    const url = 'https://searchengineland.com/figz/wp-content/seloads/2014/08/blog-typing-ss-1920.jpg'
    
    
    return (
        <Box className={classes.container}>
            <img src={url} alt="banner" className={classes.image} />

            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action"/>

                <InputBase 
                     
                     placeholder='title' 
                     className={classes.textField}
                     
                />
                <Button variant="contained" color="primary"> Publish </Button>
            </FormControl>

          

            <TextareaAutosize 
                rowsMin = {5} 
                placeholder = "Tell your story" 
                className={classes.textarea} 
                 
            />
                
        </Box>

    )
}

export default CreateView;