// Components
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from 'components/Layout';
import Box from '@material-ui/core/Box';


// Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

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
	centeredContainer:{
		display:'flex',
		flexDirection:'column',
		alignItems:'center',

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
				<Box className={classes.centeredContainer}>
					{SERVICIOS.map((item, index) => (
				<Typography
              		key={`${item.split().join()}-${index}`}
              		className={classes.content}
            	>
					{item}
				</Typography>
          		))}
				</Box>
				<div className='elipse_yellow_left' />
			</Container>
		</Layout>
	);
}

export default ServicioPage;
