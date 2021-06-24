import { Fragment } from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';
import CardRopa from 'components/CardRopa';

// Images
import gatoLibro from 'assets/img/gatitoLibro.png';

// Styles
import useStyles from './CatalogoPage.styles';

function CatalogoPage() {
	const isNotMobileSize = useMediaQuery('(min-width:520px)');
	const classes = useStyles({ isNotMobileSize });
	return (
		<Layout title="Catálogo">
			<div className={classes.root}>
				<Grid container>
					<Fragment>
						<Grid
							container
							item
							xs={12}
							sm={isNotMobileSize ? 12 : 6}
							spacing={2}
							direction={isNotMobileSize ? 'row' : 'column'}
							wrap="wrap"
							justify="space-evenly"
							alignItems={isNotMobileSize ? 'stretch' : 'center'}
						>
							{[...Array(8).keys()].map((index) => (
								<Grid
									item
									key={index}
									xs={isNotMobileSize ? 6 : 12}
									sm={isNotMobileSize ? 6 : 3}
									className={classes.withoutFlexBasis}
								>
									<CardRopa />
								</Grid>
							))}
							<Grid
								item
								xs={isNotMobileSize ? 6 : 12}
								sm={isNotMobileSize ? 6 : 3}
								className={`${classes.withoutFlexBasis} ${classes.contentImage}`}
							>
								<img src={gatoLibro} alt="gatoLibro" />
							</Grid>
						</Grid>
					</Fragment>
				</Grid>
			</div>
		</Layout>
	);
}

export default CatalogoPage;
