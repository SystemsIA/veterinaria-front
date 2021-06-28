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
					<Avatar arial-label="recipe" className={classes.avatar}>
						M
					</Avatar>
				}
				title={props.nameMascota}
				subheader={`Fecha de revisión ${dataMascota.fechaRevision}`}
			/>
			<CardContent className={classes.rootContent}>
				<Box display="flex" className={classes.bgContent}>
					<div className={classes.contentInfoMascota}>
						<p>
							<b>Descripcion:</b> {dataMascota.descripcion}
						</p>
						<p>
							<b>Medico:</b> {dataMascota.medico}
						</p>
						<p>
							<b>Tipodetarearealizada:</b> {dataMascota.tipoTarea}
						</p>
						<Divider />
						<Typography variant="h6">DATOS DE LA MASCOTA</Typography>
						<p>
							<b>Talla:</b> {dataMascota.talla}
						</p>
						<p>
							<b>Peso:</b> {dataMascota.peso}
						</p>
						<p>
							<b>Edad:</b> {dataMascota.edad}
						</p>
						<p>
							<b>Pulso:</b> {dataMascota.pulso}
						</p>
						<p>
							<b>Estadodelamascota:</b> {dataMascota.estado}
						</p>
						<p>
							<b>Examenesrealizados:</b> {dataMascota.examenes}
						</p>
					</div>
				</Box>
				<Box
					display="flex"
					justifyContent="space-between"
					className={classes.bgContent}
				>
					<Button color="secondary" variant="contained">
						Diagnostico
					</Button>

					<Button className={classes.btnBg} variant="contained">
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
		fechaRevision: new Date().toUTCString(),
		descripcion: 'Descripción de la mascota',
		medico: 'Dr. Doctor',
		tipoTarea: 'Tarea realizada',
		talla: '25.52cm',
		peso: '20kg',
		edad: '3',
		pulso: '123',
		estado: 'Vegetal',
		examenes: 'Examenes[]',
	},
};
export default CardHistorialMascota;
