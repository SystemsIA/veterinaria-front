import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import useAuth from 'hooks/useAuth';

import * as LINKS from 'routes';

// Components
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserCardInfo from './UserCardInfo';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

// Styles
import useStyles from './MenuButtonUser.styles';

function MenuButtonUser({ isUser, side = 'right', as: IC, ...rest }) {
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
				aria-label='account of current user'
				aria-controls='menu-user'
				aria-haspopup='true'
				onClick={handleMenu}
				color='inherit'
			>
				{isUser ? <AccountCircleIcon /> : IC ? <IC {...rest} /> : <MenuIcon />}
			</IconButton>

			<Menu
				className={classes.ulMenu}
				id='menu-user'
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
					<UserCardInfo handleClose={handleClose} ref={anchorEl} />
				) : (
					<MenuItem
						ref={anchorEl}
						className={classes.menuLinks}
						onClick={handleClose}
					>
						<Link to={LINKS.LOGIN}>Iniciar Sesión</Link>
					</MenuItem>
				)}
			</Menu>
		</Fragment>
	);
}

export default MenuButtonUser;
