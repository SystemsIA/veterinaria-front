import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';

// Styles
import useStyles from './CardRopa.styles';

function CardRopa({ image, content }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={3}>
			<CardMedia className={classes.media} title="Image of animal">
				<img src={image} alt="animal" />
			</CardMedia>

			<CardContent className={classes.cardContent}>
				<Typography variant="h5" color="textSecondary">
					Ropa Animal
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{content}
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
