// Components
import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';

// Images
import perroMain from 'assets/img/perroMain.png';
import perroTasa from 'assets/img/perritoTasa.png';

// Styles
import useStyles from './InicioPage.styles';

function InicioPage() {
	const classes = useStyles();

	const isNotMobileSize = useMediaQuery('(min-width:520px)');

	return (
		<Layout title='Inicio'>
			<div className={classes.root}>
				<Grid
					container
					spacing={2}
					wrap='wrap'
					direction={isNotMobileSize ? 'row' : 'column'}
					justifyContent={isNotMobileSize ? 'space-evenly' : 'center'}
					alignContent='center'
				>
					<Grid
						className={classes.content}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<Paper className={classes.paper}>
							<Typography
								variant={isNotMobileSize ? 'h2' : 'h4'}
								align='center'
								color='secondary'
							>
								Veterinaria San Lorenzo
							</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={classes.withoutFlexBasis}
					>
						<img src={perroMain} alt='Perrito Main' />

						<div className='elipse_yellow' />
					</Grid>
				</Grid>

				<Grid
					container
					spacing={2}
					wrap='wrap'
					direction={isNotMobileSize ? 'row' : 'column-reverse'}
					justifyContent={isNotMobileSize ? 'space-evenly' : 'flex-start'}
					alignContent='center'
				>
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={classes.withoutFlexBasis}
					>
						<img src={perroTasa} alt='Perrito Main' />
						<div className='elipse_blue' />
					</Grid>

					<Grid
						className={classes.content}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<Paper className={classes.paper}>
							<Typography variant='overline'>
								<p>Misión</p>
								<ul>
									<li>
										Ofrecer a nuestros pacientes el mejor tratamiento médico,
										trato humano y excelencia en el servicio.
									</li>
									<li>
										La efectividad de las actuaciones profesionales como
										principal compromiso.
									</li>
									<li>Asegurar la innovación tecnológica y científica.</li>
									<li>
										Mantener la voluntad constante de mejora de los servicios
										prestados.
									</li>
								</ul>
							</Typography>
						</Paper>
						<br />
						<Paper className={classes.paper}>
							<Typography variant='overline'>
								<p>Visión</p>
								<ul>
									<li>
										Ofrecer y realizar servicios veterinarios de gran calidad y
										alto nivel técnico y científico, dirigidos a nuestros
										clientes y a sus mascotas para satisfacer con excelencia sus
										necesidades.
									</li>
								</ul>
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
