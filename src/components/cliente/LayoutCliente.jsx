import { useState } from 'react';
import { motion } from 'framer-motion';
import * as LINKS from 'routes';
import clsx from 'clsx';

// Hooks
import useAuth from 'hooks/useAuth';
import useDocumentTitle from 'hooks/useDocumentTitle';

// Components
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import AppLogoLink from 'components/ui/AppLogoLink';
import ItemListLink from 'components/ui/ItemListLink';
import MenuButtonUser from 'components/ui/MenuButtonUser';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

// Images
import imgTarea from 'assets/img/imag4.png';
import imgMascota from 'assets/img/imag3.png';
import imgCasa from 'assets/img/imag1.png';
import imgAcc from 'assets/img/imag2.png';
import imgPerroFlores from 'assets/img/perritoFlores.png';

// Styles
import useTheme from '@material-ui/core/styles/useTheme';
import useSytles from './LayoutCliente.styles';

function LayoutCliente({ title = '', container = false, children }) {
	const [open, setOpen] = useState(false);
	const auth = useAuth();
	const classes = useSytles();
	const theme = useTheme();
	useDocumentTitle(`Perfil | ${title}`);
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
					<AppLogoLink to={LINKS.INICIO} nameLink='Veterinaria' small>
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
						<ItemListLink
							nameItem='Inicio'
							image={imgCasa}
							href={`${LINKS.USER_INICIO}/inicio`}
						/>
						<ItemListLink
							nameItem='Mis mascotas'
							image={imgMascota}
							href={`${LINKS.USER_INICIO}${LINKS.USER_MASCOTAS}`}
						/>
						<ItemListLink
							nameItem='Catálogo'
							image={imgAcc}
							href={`${LINKS.USER_INICIO}${LINKS.USER_CATALOGO}`}
						/>
						<ItemListLink
							nameItem='Citas'
							image={imgTarea}
							href={`${LINKS.USER_INICIO}${LINKS.USER_CITAS}`}
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

export default LayoutCliente;
