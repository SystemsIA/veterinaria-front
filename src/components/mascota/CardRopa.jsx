import { lazy } from 'react';

// Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

// Styles
import useStyles from './CardRopa.styles';
import ButtonLink from 'components/ui/ButtonLink';

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
				<ButtonLink
					to={`/producto/${producto?.id}`}
					variant='outlined'
					size='small'
					className={classes.bgButton}
				>
					Ver Producto
				</ButtonLink>
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
