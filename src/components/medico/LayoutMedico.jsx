import { useState } from 'react';
import clsx from 'clsx';
import * as LINKS from 'routes';
import {
	Toolbar,
	AppBar,
	Button,
	Drawer,
	List,
	IconButton,
	useTheme,
} from '@material-ui/core';
import AppLogoLink from 'components/ui/AppLogoLink';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MenuButtonUser from 'components/ui/MenuButtonUser';
import ItemListLink from 'components/ui/ItemListLink';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Hooks
import useAuth from 'hooks/useAuth';
import useDocumentTitle from 'hooks/useDocumentTitle';

// Images
import imgPerroFlores from 'assets/img/perritoFlores.png';
import imgTarea from 'assets/img/imag4.png';
import imgMascota from 'assets/img/imag3.png';
import imgHueso from 'assets/img/iconHuesito.png';
import imgCasa from 'assets/img/imag1.png';
import imgAcc from 'assets/img/imag2.png';

// Styles
import useStyles from './LayoutMedico.styles';

// PropTypes
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container } from '@material-ui/core';

function LayoutMedico({ title = 'Dr. Doctor', container = false, children }) {
	const classes = useStyles();
	const theme = useTheme();
	const auth = useAuth();

	useDocumentTitle(title);

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
							<img src={imgHueso} alt="Hueso Imagen" />
						</Button>
						<MenuButtonUser as={SettingsOutlinedIcon} fontSize="large" />
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
							<img src={imgPerroFlores} alt="Perro Flores" />
						</div>
						<h3>{auth.user?.email}</h3>
					</div>

					<List
						component="nav"
						aria-labelledby="nested-list-subheader"
						className={classes.rootList}
					>
						<ItemListLink
							nameItem="Inicio"
							image={imgCasa}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_TAREAS}`}
						/>
						<ItemListLink
							nameItem="Mascota"
							image={imgMascota}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_MASCOTAS}`}
						/>
						<ItemListLink
							nameItem="Catálogo"
							image={imgAcc}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_CATALOGO}`}
						/>
						<ItemListLink
							nameItem="Citas"
							image={imgTarea}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_CITAS}`}
						/>
					</List>
				</div>
			</Drawer>

			<motion.main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
				animate="animate"
				exit={{ opacity: 0 }}
			>
				<div className={classes.drawerHeader} />
				{container ? <Container>{children}</Container> : children}
			</motion.main>
		</div>
	);
}

LayoutMedico.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

export default LayoutMedico;
