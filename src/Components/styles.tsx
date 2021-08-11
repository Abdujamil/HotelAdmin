import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        width100: {
            width: '100%',
        },
        margin2: {
            margin: theme.spacing(2),
        },
        numberField: {
            '& div': {
                height: 35,
            }
        },
        mgt15: {
            marginTop: 15,
        },
        mgb15: {
            marginBottom: 15,
        }
    }),
);

export default useStyles;