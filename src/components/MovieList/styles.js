import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movieesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'espace-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
}));
