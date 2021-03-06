import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    serviceNav: {
        minWidth: '270px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        "& > a": {
            background: '#fff',
            padding: '15px',
            width: '75%',
            margin: '5px 0',
            textDecoration: 'none',
            color: '#1a1e66',
            border: '1px solid #ccc',
            "& > li": {
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between'
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        serviceNav: {
            minWidth: '100%',
            "& > a": {
                width: '95%'
            }
        }
    },
    [theme.breakpoints.down('xs')]: {
        serviceNav: {
            "& > a": {
                width: '90%'
            }
        }
    }
}));
export default useStyles;
