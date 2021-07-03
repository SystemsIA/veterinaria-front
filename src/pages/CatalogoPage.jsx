import { Grid, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';
import CardRopa from 'components/mascota/CardRopa';

// Images
import gatoLibro from 'assets/img/gatitoLibro.png';

// Styles
import useStyles from './CatalogoPage.styles';

function CatalogoPage() {
	const isNotMobileSize = useMediaQuery('(min-width:520px)');
	const classes = useStyles({ isNotMobileSize });
	return (
		<Layout title='Catálogo'>
			<div className='elipse_yellow' />
			<div className={classes.root}>
				<Grid
					container
					spacing={2}
					direction={isNotMobileSize ? 'row-reverse' : 'column'}
					wrap='wrap'
					justify='space-evenly'
					alignItems={isNotMobileSize ? 'stretch' : 'center'}
				>
					{[...Array(6).keys()].map((index) => (
						<Grid
							item
							key={`p-${index}`}
							xs={isNotMobileSize ? 12 : 6}
							sm={isNotMobileSize ? 6 : 3}
							className={classes.withoutFlexBasis}
						>
							<CardRopa />
						</Grid>
					))}
					{[...Array(8).keys()].map((index) => (
						<Grid
							item
							key={`s-${index}`}
							xs={isNotMobileSize ? 12 : 6}
							sm={isNotMobileSize ? 6 : 3}
							className={classes.withoutFlexBasis}
						>
							<CardRopa />
						</Grid>
					))}
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={`${classes.withoutFlexBasis} ${classes.contentImage}`}
					>
						<img src={gatoLibro} alt='gatoLibro' />
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default CatalogoPage;
