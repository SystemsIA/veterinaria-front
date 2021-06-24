import { useState } from 'react';
import clsx from 'clsx';
import {
	Toolbar,
	AppBar,
	Button,
	ListItem,
	ListItemText,
	ListItemIcon,
	Drawer,
	List,
	IconButton,
	useTheme,
} from '@material-ui/core';
import AppLogoLink from 'components/AppLogoLink';

import StarBorder from '@material-ui/icons/StarBorder';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Styles
import dogFlower from 'assets/img/perritoFlores.png';
import imgTask from 'assets/img/imag4.png';
import imgClient from 'assets/img/imag3.png';
import imgBone from 'assets/img/iconHuesito.png';

import * as LINKS from 'routes';
import ItemListCollapse from 'components/ItemListCollapse';

// Styles
import useStyles from './LayoutMedico.styles';
import useTitleDocument from 'hooks/useTitleDocument';
import MenuBtnUser from 'components/MenuBtnUser';

function LayoutMedico({ title = 'Dr. Doctor', children }) {
	const classes = useStyles();
	const theme = useTheme();

	useTitleDocument(title);

	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className={classes.root}>
			<AppBar
				position="fixed"
				color="inherit"
				elevation={1}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar className={classes.toolbar}>
					<AppLogoLink
						to={LINKS.MEDICO_INICIO}
						nameLink="Veterinaria | Médico"
						small
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</AppLogoLink>

					<div>
						<Button className={classes.imgSize}>
							<img src={imgBone} alt="Hueso Imagen" />
						</Button>
						<MenuBtnUser as={SettingsOutlinedIcon} fontSize="large" />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
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
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				{children}
			</main>
		</div>
	);
}

export default LayoutMedico;
