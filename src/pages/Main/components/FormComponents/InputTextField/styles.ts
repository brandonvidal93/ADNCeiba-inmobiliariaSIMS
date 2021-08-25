import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      width: '100%',
      minWidth: 200,
    },
  }),
);
