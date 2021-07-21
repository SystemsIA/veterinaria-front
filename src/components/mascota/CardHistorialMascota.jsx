import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from '@material-ui/core';
// Styles
import useStyles from './CardHistorialMascota.styles';

function CardHistorialMascota(props) {
	let dataMascota = props?.dataMascota;
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardHeader
				className={classes.cardHeader}
				avatar={
					<Avatar arial-label='recipe' className={classes.avatar}>
						M
					</Avatar>
				}
				title={props.nameMascota}
				subheader={`Fecha de revisión`}
			/>
			<CardContent className={classes.rootContent}>
				<Box display='flex' className={classes.bgContent}>
					<div className={classes.contentInfoMascota}>
						<p>
							<b>Descripción:</b> {dataMascota.descripcion}
						</p>
						<p>
							<b>Tipo de tarea realizada:</b> {dataMascota.tarea}
						</p>
						<Divider />
						<Typography variant='h6'>DATOS DE LA MASCOTA</Typography>
						<p>
							<b>Talla:</b> {dataMascota.talla}
						</p>
						<p>
							<b>Peso:</b> {dataMascota.peso}
						</p>
						<p>
							<b>Pulso:</b> {dataMascota.pulso}
						</p>
						<p>
							<b>Estado de la mascota:</b>
							{dataMascota.internado ? 'Internado' : 'Listo'}
						</p>
						<p>
							<b>Exámen realizados:</b> {dataMascota.examen}
						</p>
					</div>
				</Box>
				<Box
					display='flex'
					justifyContent='space-between'
					className={classes.bgContent}
				>
					<Button color='secondary' variant='contained'>
						Diagnostico
					</Button>

					<Button className={classes.btnBg} variant='contained'>
						Receta Médica
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
}

CardHistorialMascota.defaultProps = {
	nameMascota: 'Mascota Nombre',
	ownerMascota: 'Mascota Dueño',
	dataMascota: {
		descripcion: '',
		talla: '',
		peso: '',
		tarea: '',
		internado: '',
		temperatura: '',
		pulso: '',
		diagnostico: '',
		examen: '',
		recetaMedica: '',
	},
};
export default CardHistorialMascota;
