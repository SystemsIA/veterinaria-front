import { lazy } from 'react';
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

const ImageLazy = lazy(() => import('components/ImageLazy'));

function CardRopa({ producto }) {
	const classes = useStyles();
	const { imagenPrincipal, nombre, precio, stock } = producto;
	return (
		<Card className={classes.root} elevation={3}>
			<CardMedia className={classes.media} title='Image of animal'>
				<ImageLazy src={imagenPrincipal} alt={nombre} />
			</CardMedia>

			<CardContent className={classes.cardContent}>
				<Typography variant='h5' color='textSecondary' component='h5'>
					{nombre}
				</Typography>
				<Typography variant='body2' color='textSecondary' component='p'>
					S/{precio}
				</Typography>
				<Typography variant='body2'>Disponible: {stock} unidades</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button variant='outlined' size='small' className={classes.bgButton}>
					Ver Producto
				</Button>
			</CardActions>
		</Card>
	);
}

CardRopa.defaultProps = {
	producto: {
		imagenPrincipal: '',
		imagenes: [],
		marca: { imagen: null, nombre: '' },
		nombre: '',
		precio: 0,
		stock: 0,
	},
};

export default CardRopa;
