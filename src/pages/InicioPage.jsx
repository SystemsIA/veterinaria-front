import { Fragment } from 'react';
// Components
import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';

import perroMain from 'assets/img/perroMain.png';
import perroTasa from 'assets/img/perritoTasa.png';

// Styles
import useStyles from './InicioPage.styles';

function InicioPage() {
	const classes = useStyles();

	const isMobile = useMediaQuery('(min-width:550px)');

	return (
		<Layout title="Inicio">
			<div className={classes.root}>
				<Grid container spacing={1}>
					{isMobile ? (
						<Fragment>
							<Grid
								container
								item
								xs={12}
								spacing={2}
								wrap="wrap"
								direction="row"
								justify="space-evenly"
							>
								<Grid item xs={6}>
									<Paper className={classes.paper}>
										<Typography variant="h2" align="center" color="secondary">
											Veterinaria San Lorenzo
										</Typography>
									</Paper>
								</Grid>
								<Grid item xs={6} className={classes.withoutFlexBasis}>
									<img src={perroMain} alt="Perrito Main" />
								</Grid>
							</Grid>
							<Grid
								container
								item
								xs={12}
								spacing={2}
								justify="space-evenly"
								alignContent="center"
								direction="row"
								wrap="wrap"
							>
								<Grid item xs={6} className={classes.withoutFlexBasis}>
									<img src={perroTasa} alt="Perrito Main" />
								</Grid>
								<Grid item xs={6}>
									<Paper className={classes.paper}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Consequatur eos voluptate animi recusandae quo eaque
										laboriosam vitae aliquid ex est? Animi recusandae aspernatur
										in corrupti nulla fugit! Nam veniam architecto fugiat optio
										corrupti nulla similique nisi, rem doloremque illum deleniti
										perspiciatis ad dolores. Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Itaque ea nulla quisquam sit
										in deleniti non dolor quidem accusantium, incidunt assumenda
										odit, eius quae illo a labore ullam consequatur! Maxime
										consequatur distinctio animi sint placeat! Praesentium
										consequuntur eum cupiditate nesciunt nemo unde
										exercitationem!
									</Paper>
								</Grid>
							</Grid>
						</Fragment>
					) : (
						<Fragment>
							<Grid container item sm={6} spacing={1} direction="column">
								<Grid item sm={3}>
									<Paper className={classes.paper}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate deleniti sed suscipit cum doloremque labore
										beatae similique quaerat quos repellendus! Autem, laborum
										et! Cumque ratione officia sapiente unde cupiditate voluptas
										rerum tempore, sint tempora, blanditiis quisquam eaque.
										Quibusdam ipsum dolorem quia quae magnam. Lorem ipsum dolor
										sit amet consectetur adipisicing elit. Itaque ea nulla
										quisquam sit in deleniti non dolor quidem accusantium,
										incidunt assumenda odit, eius quae illo a labore ullam
										consequatur! Maxime consequatur distinctio animi sint
										placeat! Praesentium consequuntur eum cupiditate nesciunt
										nemo unde exercitationem!
									</Paper>
								</Grid>
								<Grid item sm={3} className={classes.withoutFlexBasis}>
									<img
										src={perroMain}
										alt="Perrito Main"
										className={classes.sizeImgMobile}
									/>
								</Grid>
							</Grid>
							<Grid container item sm={6} spacing={1} direction="column">
								<Grid item sm={3}>
									<Paper className={classes.paper}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cupiditate deleniti sed suscipit cum doloremque labore
										beatae similique quaerat quos repellendus! Autem, laborum
										et! Cumque ratione officia sapiente unde cupiditate voluptas
										rerum tempore, sint tempora, blanditiis quisquam eaque.
										Quibusdam ipsum dolorem quia quae magnam. Lorem ipsum dolor
										sit amet consectetur adipisicing elit. Itaque ea nulla
										quisquam sit in deleniti non dolor quidem accusantium,
										incidunt assumenda odit, eius quae illo a labore ullam
										consequatur! Maxime consequatur distinctio animi sint
										placeat! Praesentium consequuntur eum cupiditate nesciunt
										nemo unde exercitationem!
									</Paper>
								</Grid>
								<Grid item sm={3} className={classes.withoutFlexBasis}>
									<img
										src={perroTasa}
										alt="Perrito Main"
										className={classes.sizeImgMobile}
									/>
								</Grid>
							</Grid>
						</Fragment>
					)}
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
