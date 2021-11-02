import { useEffect } from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';
import CardRopa from 'components/mascota/CardRopa';
import SearchField from 'components/ui/SearchField';

// Hooks
import useGeneralState from 'hooks/useGeneralState';
import useSearch from 'hooks/useSearch';

// Images
import gatoLibro from 'assets/img/gatitoLibro.png';

// Styles
import useStyles from './CatalogoPage.styles';

function CatalogoPage() {
	const generalState = useGeneralState();
	const search = useSearch('nombre', generalState?.productos);

	const isNotMobileSize = useMediaQuery('(min-width:520px)');
	const classes = useStyles({ isNotMobileSize });

	useEffect(() => {
		generalState.getProductosAction();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout title='Catálogo de Productos'>
			<div className='elipse_yellow' />
			<div className={classes.root}>
				<SearchField
					placeholder='Buscar Productos...'
					onChange={search.handleSearch}
				/>
				<Grid
					container
					spacing={2}
					direction={isNotMobileSize ? 'row-reverse' : 'column'}
					wrap='wrap'
					justifyContent='space-evenly'
					alignItems={isNotMobileSize ? 'stretch' : 'center'}
				>
					{search.data.map((producto, index) => (
						<Grid
							item
							key={`catalogo-${index}`}
							xs={isNotMobileSize ? 12 : 6}
							sm={isNotMobileSize ? 6 : 3}
							className={classes.withoutFlexBasis}
						>
							<CardRopa producto={producto} />
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
