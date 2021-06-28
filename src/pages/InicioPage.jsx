// Components
import { Grid, Paper, Typography, useMediaQuery } from '@material-ui/core';
import Layout from 'components/Layout';

import perroMain from 'assets/img/perroMain.png';
import perroTasa from 'assets/img/perritoTasa.png';

// Styles
import useStyles from './InicioPage.styles';

function InicioPage() {
	const classes = useStyles();

	const isNotMobileSize = useMediaQuery('(min-width:550px)');

	return (
		<Layout title="Inicio">
			<div className={classes.root}>
				<Grid container spacing={1}>
					<Grid
						container
						item
						xs={isNotMobileSize ? 6 : 12}
						spacing={2}
						sm={isNotMobileSize ? 12 : 6}
						wrap="wrap"
						direction={isNotMobileSize ? 'row' : 'column'}
						justify={isNotMobileSize ? 'space-evenly' : 'space-between'}
					>
						<Grid
							item
							xs={isNotMobileSize ? 6 : 12}
							sm={isNotMobileSize ? 6 : 3}
						>
							<Paper className={classes.paper}>
								<Typography
									variant={isNotMobileSize ? 'h2' : 'h4'}
									align="center"
									color="secondary"
								>
									Veterinaria San Lorenzo
								</Typography>
							</Paper>
						</Grid>
						<Grid
							item
							xs={isNotMobileSize ? 6 : 12}
							sm={isNotMobileSize ? 6 : 3}
							className={classes.withoutFlexBasis}
						>
							<img src={perroMain} alt="Perrito Main" />
						</Grid>
					</Grid>

					<Grid
						container
						item
						xs={isNotMobileSize ? 6 : 12}
						sm={isNotMobileSize ? 12 : 6}
						spacing={2}
						wrap="wrap"
						direction={isNotMobileSize ? 'row' : 'column-reverse'}
						justify={isNotMobileSize ? 'space-evenly' : 'flex-start'}
					>
						<Grid
							item
							xs={isNotMobileSize ? 6 : 12}
							sm={isNotMobileSize ? 6 : 3}
							className={classes.withoutFlexBasis}
						>
							<img src={perroTasa} alt="Perrito Main" />
						</Grid>
						<Grid
							item
							xs={isNotMobileSize ? 6 : 12}
							sm={isNotMobileSize ? 6 : 3}
						>
							<Paper className={classes.paper}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Consequatur eos voluptate animi recusandae quo eaque laboriosam
								vitae aliquid ex est? Animi recusandae aspernatur in corrupti
								nulla fugit! Nam veniam architecto fugiat optio corrupti nulla
								similique nisi, rem doloremque illum deleniti perspiciatis ad
								dolores. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Itaque ea nulla quisquam sit in deleniti non dolor quidem
								accusantium, incidunt assumenda odit, eius quae illo a labore
								ullam consequatur! Maxime consequatur distinctio animi sint
								placeat! Praesentium consequuntur eum cupiditate nesciunt nemo
								unde exercitationem!
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default InicioPage;
