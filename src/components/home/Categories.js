import { Button, makeStyles, Table,  TableCell, TableHead, TableRow, TableBody} from '@material-ui/core';
import { categories } from '../../constants/data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    create:{
        margin:20,
        background: '#6495ED',
        color: 'white',
        width: '86%'
    },
    table: {
        border: '2px solid rgba(224,224,224,1)',
        textDecoration:'none',
        margin: 5,

    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

})


const Categories = () =>{
    const classes = useStyles();
    return (
        <>
            <Link to='/create' className={classes.link}><Button variant='contained' className={classes.create}> Create Blog </Button></Link>
            
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <Link className={classes.link}><TableCell> All Categories </TableCell></Link>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category =>(
                            <TableRow>
                                <Link className={classes.link}><TableCell>{category}</TableCell></Link>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}


export default Categories;