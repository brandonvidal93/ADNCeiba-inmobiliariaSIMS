import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginTop: theme.spacing(3),
    },
    gridContainer: {
      marginTop: theme.spacing(2),
    },
    gridContainer2: {
      marginTop: theme.spacing(3),
    },
    gridContainer3: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    textField: {
      width: '100%',
      minWidth: 200,
    },
    formControl: {
      minWidth: 200,
      width: '100%',
    },
  }),
);
