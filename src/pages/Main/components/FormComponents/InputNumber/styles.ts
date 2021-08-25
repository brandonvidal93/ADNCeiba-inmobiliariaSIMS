import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    numberContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textNumber: {
      width: '130px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  }),
);
