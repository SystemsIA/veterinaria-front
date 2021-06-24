import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// Hooks
import useAuth from 'hooks/useAuth';

import * as LINKS from 'routes';

// Components
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

// Colors
import * as colors from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
	menuLinks: {
		'& > a': {
			textDecoration: 'none',
			color: colors.purple['700'],
			display: 'block',
			width: '100%',
		},
	},
	btnLogout: {
		transition: '0.3s ease-out',
		'&:hover': {
			backgroundColor: colors.red['400'],
			color: '#fff',
		},
	},
}));

const isDoctor = (r) => r !== 'CLIENTE';

function MenuBtnUser({ isUser, side = 'right', as: CI, ...rest }) {
	const auth = useAuth();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const openLogin = Boolean(anchorEl);

	const handleMenu = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-user"
				aria-haspopup="true"
				onClick={handleMenu}
				color="inherit"
			>
				{isUser ? <AccountCircleIcon /> : CI ? <CI {...rest} /> : <MenuIcon />}
			</IconButton>

			<Menu
				id="menu-user"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: side,
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: side,
				}}
				open={openLogin}
				onClose={handleClose}
			>
				{auth.isLogin ? (
					<div>
						<MenuItem onClick={handleClose} className={classes.menuLinks}>
							<Link to={LINKS.PERFIL}>Perfil</Link>
						</MenuItem>
						{isDoctor(auth.user?.tipoUsuario) ? (
							<MenuItem className={classes.menuLinks}>
								<Link to={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_TAREAS}`}>
									Revisar tareas
								</Link>
							</MenuItem>
						) : null}
						<MenuItem
							className={classes.btnLogout}
							onClick={() => {
								handleClose();
								auth.logoutAction();
							}}
						>
							<span>Cerrar Sesión</span>
						</MenuItem>
					</div>
				) : (
					<MenuItem className={classes.menuLinks}>
						<Link to={LINKS.LOGIN}>Iniciar Sesión</Link>
					</MenuItem>
				)}
			</Menu>
		</Fragment>
	);
}

export default MenuBtnUser;
