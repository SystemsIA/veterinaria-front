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

const useStyles = makeStyles(() => ({
	menuLinks: {
		'& > a': {
			textDecoration: 'none',
			color: '#b35f97eb',
			display: 'block',
			width: '100%',
		},
	},
	btnLogout: {
		transition: '0.3s ease-out',
		'&:hover': {
			backgroundColor: '#ff7961',
			color: '#fff',
		},
	},
}));

function MenuBtnUser({ isUser, side = 'right' }) {
	const { isLogin, logoutAction } = useAuth();
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const openLogin = Boolean(anchorEl);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
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
				{isUser ? <AccountCircleIcon /> : <MenuIcon />}
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
				{isLogin ? (
					<div>
						<MenuItem onClick={handleClose} className={classes.menuLinks}>
							<Link to={LINKS.PERFIL}>Perfil</Link>
						</MenuItem>
						<MenuItem className={classes.menuLinks}>
							<Link to="/medico">Revisar tareas</Link>
						</MenuItem>
						<MenuItem
							className={classes.btnLogout}
							onClick={() => {
								handleClose();
								logoutAction();
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
