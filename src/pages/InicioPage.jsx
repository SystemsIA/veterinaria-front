// Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from 'components/Layout';

// Images
import perroMain from 'assets/img/perroMain.png';
import perroDucha from 'assets/img/perritoDucha.png';
import CheckIcon from '@material-ui/icons/Check';

// Styles
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './InicioPage.styles';

function InicioPage() {
	const classes = useStyles();

	const isNotMobileSize = useMediaQuery('(min-width:520px)');

	return (
		<Layout>
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
						<Paper className={classes.paperTitle} elevation={2}>
							<Typography variant='h5'>¿Quienes somos?</Typography>
						</Paper>
						<Paper className={classes.paper}>
							<Typography variant={isNotMobileSize ? 'body1' : 'body2'}>
								Somos un gran equipo médico especializado en el bienestar y
								cuidado de tu mascota, apasionados por nuestra vocación
								brindando calidad en nuestros servicios. La Clínica Veterinaria
								San Lorenzo tiene ya tres años de fundación; tres años en los
								cuales nos encargamos de brindar el mejor servicio, íntegro y de
								calidad teniendo como avales a nuestros fieles clientes quienes
								son nuestro soporte y motivación para continuar con nuestra
								labor. Contamos con personal especializado y calificado para
								poder atender cualquier emergencia, consulta y absolver
								cualquier tipo de duda. Te invitamos a ser parte de nuestra
								familia Lorenciana, únete y disfruta de nuestros beneficios.
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
						<div className='elipse_blue' />
						<img src={perroDucha} alt='Perrito Main' />
					</Grid>

					<Grid
						className={classes.content}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<br />
						<Paper className={classes.paperTitle} elevation={2}>
							<Typography variant='h5'>Misión</Typography>
						</Paper>

						<Paper className={classes.paper}>
							<ul>
								<li>
									<CheckIcon color='secondary' />
									<span>
										Ofrecer a nuestros pacientes el mejor tratamiento médico,
										trato humano y excelencia en el servicio.
									</span>
								</li>
								<li>
									<CheckIcon color='secondary' />
									<span>
										La efectividad de las actuaciones profesionales como
										principal compromiso.
									</span>
								</li>
								<li>
									<CheckIcon color='secondary' />
									<span>Asegurar la innovación tecnológica y científica.</span>
								</li>
								<li>
									<CheckIcon color='secondary' />
									<span>
										Mantener la voluntad constante de mejora de los servicios
										prestados.
									</span>
								</li>
							</ul>
						</Paper>
						<br />
						<Paper className={classes.paperTitle} elevation={2}>
							<Typography variant='h5'>Visión</Typography>
						</Paper>
						<Paper className={classes.paper}>
							<ul>
								<li>
									<CheckIcon color='secondary' />
									<span>
										Ofrecer y realizar servicios veterinarios de gran calidad y
										alto nivel técnico y científico, dirigidos a nuestros
										clientes y a sus mascotas para satisfacer con excelencia sus
										necesidades.
									</span>
								</li>
							</ul>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
