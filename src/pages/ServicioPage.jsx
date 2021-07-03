import { Container, Typography, makeStyles } from '@material-ui/core';
import Layout from 'components/Layout';

const useStyles = makeStyles((theme) => ({
	content: {
		backgroundColor: '#9A9A99',
		width: 290,
		height: 59,
		borderRadius: 20,
		color: theme.palette.getContrastText('#9A9A99'),
		margin: '1rem',
		padding: '13px',
		fontSize: '24px',
		fontWeight: 600,
		textAlign: 'center',
	},
}));

const SERVICIOS = [
	'Ecografías',
	'Rayos X',
	'Internamientos',
	'Vacunas',
	'Traumatología',
	'Emergencias',
	'Análisis Laboratorial',
	'Cirugía',
	'Neurología',
	'Accesorios',
	'Nutrición Balanceada',
];

function ServicioPage() {
	const classes = useStyles();
	return (
		<Layout title='Servicios'>
			<Container>
				<Typography variant='h4' align='center'>
					Servicios
				</Typography>
				{SERVICIOS.map((item, index) => (
					<Typography
						key={`${item.split().join()}-${index}`}
						className={classes.content}
					>
						{item}
					</Typography>
				))}
				<div className='elipse_yellow_left' />
			</Container>
		</Layout>
	);
}

export default ServicioPage;
