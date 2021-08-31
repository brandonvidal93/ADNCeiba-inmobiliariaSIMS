import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      boxShadow: '0 10px 10px 0 rgb(0 0 0 / 10%), 0 3px 7px 0 rgb(0 0 0 / 15%)',
      borderRadius: 10,
      overflow: 'hidden',
      transition: 'all .3s ease',
      '&:hover': {
        boxShadow:
          '0 10px 10px 0 rgb(0 0 0 / 20%), 0 3px 7px 0 rgb(0 0 0 / 25%)',
        '& $imgContainer': {
          filter: 'brightness(0.8)',
          cursor: 'pointer',
        },
      },
    },
    imgContainer: {
      display: 'flex',
      alignItems: 'center',
      transition: 'all .3s ease',
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
    separator: {
      marginBottom: theme.spacing(2),
    },
    itemDetail: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
  }),
);
