import { Link, useRouteMatch } from 'react-router-dom';

// Components
import {
	Box,
	CardContent,
	CardHeader,
	CardMedia,
	Card,
	Button,
} from '@material-ui/core';

// Icons
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SettingsIconSvg from 'components/icons/SettingsIconSvg';

import PropTypes from 'prop-types';

// Styles
import useStyles from './CardMascota.styles';

function CardMascota(props) {
	let dataMascota = props?.dataMascota;
	const url = useRouteMatch().url;
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar arial-label='recipe' className={classes.avatar}>
						M
					</Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<SettingsIconSvg />
					</IconButton>
				}
				title={props.nameMascota}
				subheader={props.ownerMascota}
			/>
			<CardContent className={classes.rootContent}>
				<Box
					display='flex'
					justifyContent='space-between'
					className={classes.bgContent}
				>
					<div className={classes.contentInfoMascota}>
						<p>
							<b>Sexo:</b> {dataMascota.sexo}
						</p>
						<p>
							<b>Edad:</b> {dataMascota.edad}
						</p>
						<p>
							<b>Especie:</b> {dataMascota.especie}
						</p>
						<p>
							<b>Raza:</b> {dataMascota.raza}
						</p>
						<p>
							<b>Color:</b> {dataMascota.color}
						</p>
						<p>
							<b>Alergias:</b> {dataMascota.alergias}
						</p>
						<p>
							<b>EstadoReproductivo:</b> {dataMascota.estadoReproductivo}
						</p>
						<p>
							<b>Dueño:</b> {dataMascota.duenio}
						</p>
						<p>
							<b>Dni:</b> {dataMascota.dni}
						</p>
						<p>
							<b>Vacunas:</b> {dataMascota.vacunas}
						</p>
					</div>
					<CardMedia
						className={classes.media}
						image={props.srcImage}
						title={props.nameMascota}
					/>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					className={classes.bgContent}
				>
					<Button className={classes.btnBg} variant='contained'>
						Estado
					</Button>
					<Link
						className={classes.linkBtn}
						to={`${url}/historial/${props.dataMascota.dni}`}
					>
						<Button color='secondary' variant='contained'>
							Historial
						</Button>
					</Link>
				</Box>
			</CardContent>
		</Card>
	);
}

CardMascota.defaultProps = {
	srcImage:
		'https://material-ui.com/static/images/cards/contemplative-reptile.jpg',
	nameMascota: 'Mascota Nombre',
	ownerMascota: 'Mascota Dueño',
	dataMascota: {
		sexo: 'Mascota Sexo',
		edad: 'Mascota edad',
		especie: 'Mascota especie',
		raza: 'Mascota raza',
		color: 'Mascota color',
		alergias: 'Mascota alergias[]',
		estadoReproductivo: 'Mascota en reproducción',
		duenio: 'Dueño Mascota',
		dni: 'ewqewqe2e',
		vacunas: 'Mascota Vacunas[]',
	},
};

CardMascota.typeProps = {
	srcImage: PropTypes.string.isRequired,
	nameMascota: PropTypes.string.isRequired,
	ownerMascota: PropTypes.string.isRequired,
	dataMascota: PropTypes.object.isRequired,
};

export default CardMascota;
