import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemContainer: {
      marginTop: theme.spacing(2),
    },
  }),
);
