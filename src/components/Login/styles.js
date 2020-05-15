import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginBottom: '100px',
        width: '400px',
        height: '400px'
    },
    form: {
        marginTop: theme.spacing(2)
    },
    circularProgress: {
        marginLeft: 0,
        marginRight: theme.spacing(0.5)
    },
    alert: {
        marginBottom: theme.spacing(1)
    }
}));

export default useStyles;