import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justify: 'center'
    },
    form: {
        marginTop: theme.spacing(2)
    },
    circularProgress: {
        marginLeft: 0,
        marginRight: theme.spacing(0.5)
    }
}));

export default useStyles;