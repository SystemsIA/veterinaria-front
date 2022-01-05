// Components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Typography from '@material-ui/core/Typography';
import Layout from 'components/Layout';

// Images
import conejo from 'assets/img/conejo-w-bg.png';
import logo from 'assets/img/logo-w.png';
import perroDucha from 'assets/img/perritoDucha.png';
import CheckIcon from '@material-ui/icons/Check';

// Collect Images-vet
import img01 from 'assets/img/vet/img01.jpg';
import img02 from 'assets/img/vet/img02.jpg';
import img03 from 'assets/img/vet/img03.jpg';
import img04 from 'assets/img/vet/img04.jpg';

// Styles
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './InicioPage.styles';

const itemData = [
	{
		img: img01,
		title: 'Fotos de la Vet',
		author: 'jill111',
		cols: 2,
		featured: true,
	},
	{
		img: img02,
		title: 'Tasty burger',
		author: 'director90',
	},
	{
		img: img03,
		title: 'Camera',
		author: 'San Lorenzo',
	},
	{
		img: img04,
		title: 'Morning',
		author: 'Danson67',
		featured: true,
		cols: 2,
	},
	{
		img: img03,
		title: 'Camera',
		author: 'Veterinaria San Lorenzo',
	},
	{
		img: img04,
		title: 'Morning',
		author: 'Veterinaria San Lorenzo',
		featured: true,
	},
	{
		img: img03,
		title: 'Camera',
		author: 'Veterinaria San Lorenzo',
	},
	{
		img: img04,
		title: 'Morning',
		author: 'Veterinarira San Lorenzo',
		featured: true,
		cols: 2,
	},
];

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
					<Box>
						<Box className={classes.imgAndTitle}>
							<Typography className={classes.titleLanding} variant='h2'>
								Veterinaria San Lorenzo
							</Typography>
							<img
								className={classes.logoLanding}
								src={logo}
								alt='Logo Veterinaria San Lorenzo'
							/>
							<img
								className={classes.imgLanding}
								src='https://scontent.flim2-1.fna.fbcdn.net/v/t1.6435-9/86277324_2814306128615707_5233711644982378496_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3c11LW7-NWYAX-SW-M3&_nc_ht=scontent.flim2-1.fna&oh=00_AT-6P-sp_olFuVbvkgklFbuN5vxF9w_pM0TLcnW7eJDz3g&oe=61EDD636'
								alt='Front pets'
							/>
						</Box>
					</Box>

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
						<img src={conejo} alt='Perrito Main' />
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

					<Paper className={classes.paperTitle} elevation={1}>
						<Typography color='initial' align='center'>
							Nuestro Album
						</Typography>
					</Paper>
					<ImageList rowHeight={160} className={classes.imageList} cols={3}>
						{itemData.map((item, index) => (
							<ImageListItem key={item.img + index} cols={item.cols || 1}>
								<img src={item.img} alt={item.title} />
							</ImageListItem>
						))}
					</ImageList>
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
