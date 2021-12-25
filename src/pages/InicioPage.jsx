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

// Styles
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './InicioPage.styles';
const itemData = [
	{
		img: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/250665735_4541890575857245_5520610279551825821_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=X1SmyL4XXCAAX93poq8&_nc_ht=scontent.flim2-1.fna&oh=00_AT8lbcYXD7QZxEEboLR1kh5XlXC39nn3sBgL0RoJrGG2Yw&oe=61CB0983',
		title: 'Breakfast',
		author: 'jill111',
		cols: 2,
		featured: true,
	},
	{
		img: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/251068569_4541890479190588_9083168083692634579_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fXuY7DT7tkkAX_RqlOY&_nc_ht=scontent.flim2-2.fna&oh=00_AT_Pc0ejiGjBI9jLZG8aRrTKpGjeYwm0ttVPeYBsS1-Dow&oe=61CBC819',
		title: 'Tasty burger',
		author: 'director90',
	},
	{
		img: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/247708067_4539321812780788_2995304572502581281_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=sggGScMAAroAX-dFrqA&_nc_ht=scontent.flim2-2.fna&oh=00_AT9UyxPnzUlS15k7BhDlvF1lncJHfAnCkJrpvfF-OTuw4A&oe=61CC940F',
		title: 'Camera',
		author: 'Danson67',
	},
	{
		img: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/247200090_4539321729447463_7450335770288460105_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=i_ZNGbgUkDgAX9VyxHK&_nc_ht=scontent.flim2-1.fna&oh=00_AT__tQT4pM5GOFR595e7DRAHWh2rzipSm5_34QfYvd3feQ&oe=61CB557E',
		title: 'Morning',
		author: 'fancycrave1',
		featured: true,
	},
	{
		img: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/245865113_4539321642780805_3771610358575257552_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=6vFg1G9P35wAX8RSKpF&tn=9_vRfx7vkPlmB-2M&_nc_ht=scontent.flim2-1.fna&oh=00_AT9R6oaAayrQydRj6O-6WlwaTD4b_jSoXGOFOx2Dl81ygQ&oe=61CB8B08',
		title: 'Hats',
		author: 'Hans',
	},
	{
		img: 'https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/246654498_4551919524854350_642808159441670647_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Vse8F_l6BqgAX9b8Awp&_nc_ht=scontent.flim2-2.fna&oh=00_AT8Z6YYi30ozziKgDvAphZFr20CLmlUy0L3iKoUON1X1ZA&oe=61CBDA07',
		title: 'Honey',
		author: 'fancycravel',
	},
	{
		img: 'https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/245929683_4551919421521027_8414731200732381494_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fCrLSqTgDCYAX-WspYm&_nc_ht=scontent.flim2-1.fna&oh=00_AT-oRRO4lrI8I04Vt1LjzsfIkn51H1u4BZBhst_3OelbUw&oe=61CCAA47',
		title: 'Vegetables',
		author: 'jill111',
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

						<Paper className={classes.paperTitle} elevation={1}>
							<Typography>Nuestro Clientes</Typography>
						</Paper>
						<ImageList rowHeight={160} className={classes.imageList} cols={3}>
							{itemData.map((item) => (
								<ImageListItem key={item.img} cols={item.cols || 1}>
									<img src={item.img} alt={item.title} />
								</ImageListItem>
							))}
						</ImageList>
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
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
