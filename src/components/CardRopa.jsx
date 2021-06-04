import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.8rem 1.5rem',
    '& > img': {
      maxWidth: 280,
      minWidth: 120,
      borderRadius: '12px',
      padding: '0 1rem',
    },
  },
  cardActions: {
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardContent: {
    textAlign: 'center',
  },
  bgButton: {
    backgroundColor: '#EB537C',
    color: '#fff',
    boxSizing: 'border-box',
    transition: '.5s',
    border: '1px solid #EB537C',
    '& > span': {
      fontSize: '12px',
    },
    '&:hover': {
      backgroundColor: '#fff',
      color: '#EB537C',
    },
  },
});

function CardRopa(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={3}>
      <CardMedia className={classes.media} title="Image of animal">
        <img src={props.image} alt="animal" />
      </CardMedia>

      <CardContent className={classes.cardContent}>
        <Typography variant="h5" color="textSecondary">
          Ropa Animal
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button variant="outlined" size="small" className={classes.bgButton}>
          Compartir
        </Button>
      </CardActions>
    </Card>
  );
}

CardRopa.defaultProps = {
  image:
    'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
  content:
    'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
};

export default CardRopa;
