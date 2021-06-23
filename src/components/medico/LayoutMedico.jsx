import {
	Toolbar,
	AppBar,
	Button,
	ListItem,
	ListItemText,
	ListItemIcon,
	Drawer,
	List,
} from '@material-ui/core';
import AppLogoLink from 'components/AppLogoLink';
import MenuBtnUser from 'components/MenuBtnUser';

import StarBorder from '@material-ui/icons/StarBorder';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import dogFlower from 'assets/img/perritoFlores.png';
import imgTask from 'assets/img/imag4.png';
import imgClient from 'assets/img/imag3.png';
import imgBone from 'assets/img/iconHuesito.png';

import * as LINKS from 'routes';
import ItemListCollapse from 'components/ItemListCollapse';
import Layout from 'components/Layout';

// Styles
import useStyles from './LayoutMedico.styles';

function LayoutMedico({ title = 'Dr. Doctor', children }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				className={classes.appBar}
				color="inherit"
				elevation={1}
			>
				<Toolbar className={classes.toolbar}>
					<AppLogoLink
						to={LINKS.MEDICO_INICIO}
						nameLink="Veterinaria | Médico"
						small
					>
						<MenuBtnUser side="left" />
					</AppLogoLink>

					<div>
						<Button className={classes.imgSize}>
							<img src={imgBone} alt="Hueso Imagen" />
						</Button>
						<Button>
							<SettingsOutlinedIcon fontSize="large" />
						</Button>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<div className={classes.nameDoctorLogo}>
						<div className={classes.roundedLogo}>
							<img src={dogFlower} alt="Perro Flores" />
						</div>
						<h1>Doctor</h1>
					</div>

					<List
						component="nav"
						aria-labelledby="nested-list-subheader"
						className={classes.rootList}
					>
						<ItemListCollapse nameItem="Tareas" image={imgTask}>
							<ListItem button className={classes.nested}>
								<ListItemText primary="Citas" />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemText primary="Cirugías" />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemText primary="Vacunas" />
							</ListItem>
						</ItemListCollapse>
						<ItemListCollapse nameItem="Clientes" image={imgClient}>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<PersonAddIcon />
								</ListItemIcon>
								<ListItemText primary="Registrar cliente" />
							</ListItem>
						</ItemListCollapse>
						<ItemListCollapse nameItem="Inventario" image={imgTask}>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText primary="Starred" />
							</ListItem>
						</ItemListCollapse>
					</List>
				</div>
			</Drawer>
			<Layout title={`Medico | ${title}`}>
				<Toolbar />
				<div className={classes.contentChildren}>{children}</div>
			</Layout>
		</div>
	);
}

export default LayoutMedico;
