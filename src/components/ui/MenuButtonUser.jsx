import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import useAuth from 'hooks/useAuth';

import * as LINKS from 'routes';

// Components
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserCardInfo from './UserCardInfo';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

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
					<Link to={LINKS.LOGIN} className={classes.menuLinks}>
						<MenuItem ref={anchorEl} onClick={handleClose}>
							Iniciar Sesión
						</MenuItem>
					</Link>
				)}
			</Menu>
		</Fragment>
	);
}

export default MenuButtonUser;
