import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      boxShadow: '0 10px 10px 0 rgb(0 0 0 / 15%), 0 3px 7px 0 rgb(0 0 0 / 20%)',
      borderRadius: 10,
      overflow: 'hidden',
    },
    imgContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    img: {
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '25vh',
      objectFit: 'cover',
    },
    infoContainer: {
      padding: theme.spacing(2),
    },
    itemDetail: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }),
);
