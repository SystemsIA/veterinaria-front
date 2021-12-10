// Hooks
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import useDocumentTitle from 'hooks/useDocumentTitle';

import * as LINKS from 'routes';

import { motion } from 'framer-motion';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';

import AppLogoLink from 'components/ui/AppLogoLink';
import MenuButtonUser from 'components/ui/MenuButtonUser';
import ItemListLink from 'components/ui/ItemListLink';
import ItemListCollapse from 'components/ui/ItemListCollapse';
import ButtonLink from 'components/ui/ButtonLink';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Images
import imgPerroFlores from 'assets/img/perritoFlores.png';
import imgMascota from 'assets/img/imag3.png';
import imgHueso from 'assets/img/iconHuesito.png';
import imgTareas from 'assets/img/imag4.png';
import imgInventario from 'assets/img/imag2.png';

// Styles
import useTheme from '@material-ui/core/styles/useTheme';
import useStyles from './LayoutMedico.styles';

// PropTypes
import PropTypes from 'prop-types';

function LayoutMedico({ title = '', container = false, children }) {
	const classes = useStyles();
	const theme = useTheme();
	const auth = useAuth();

	useDocumentTitle(`Médico | ${title}`);

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
				position='fixed'
				color='inherit'
				elevation={1}
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
			>
				<Toolbar className={classes.toolbar}>
					<AppLogoLink
						to={LINKS.MEDICO_INICIO}
						nameLink='Veterinaria | Médico'
						small
					>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</AppLogoLink>

					<div>
						<ButtonLink
							to={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_CLIENTES}`}
							className={classes.imgSize}
						>
							<img src={imgHueso} alt='Hueso Imagen' />
						</ButtonLink>
						<MenuButtonUser as={SettingsOutlinedIcon} fontSize='large' />
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
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
							<img src={imgPerroFlores} alt='Perro Flores' />
						</div>
						<h3>{auth.user?.email}</h3>
					</div>

					<List
						component='nav'
						aria-labelledby='nested-list-subheader'
						className={classes.rootList}
					>
						<ItemListCollapse nameItem='Tareas' image={imgTareas}>
							<ItemListLink
								nameItem='Citas'
								href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_CITAS}`}
							/>
						</ItemListCollapse>
						<ItemListLink
							nameItem='Clientes'
							image={imgMascota}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_CLIENTES}`}
						/>
						<ItemListLink
							nameItem='Inventario'
							image={imgInventario}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_INVENTARIO}`}
						/>
						<ItemListLink
							nameItem='Mascotas'
							image={imgMascota}
							href={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_MASCOTAS}`}
						/>
					</List>
				</div>
			</Drawer>

			<motion.main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
				animate='animate'
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
