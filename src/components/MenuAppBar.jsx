import { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

// Components
import AppLogoLink from './AppLogoLink';
import {
	AppBar,
	Button,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	useMediaQuery,
} from '@material-ui/core';

// Routes
import { INICIO, LINKS_NAV_APP } from 'routes';

// Styles
import { useTheme } from '@material-ui/core/styles';
import useStyles from './MenuAppBar.styles';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuButtonUser from './MenuButtonUser';

function MenuAppBar() {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const theme = useTheme();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const isNotQueryMobile = useMediaQuery('(min-width:870px)');

	return (
		<Fragment>
			<AppBar position="fixed" color="default" elevation={0}>
				<Toolbar className={classes.navMobile}>
					{isNotQueryMobile ? null : (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					)}

					<AppLogoLink
						small={!isNotQueryMobile}
						to={INICIO}
						nameLink="Veterinaria San Lorenzo"
					/>

					<div className={classes.navMobile}>
						{isNotQueryMobile ? (
							<Fragment>
								{LINKS_NAV_APP.map((link, index) => (
									<Button
										key={`${link.name}-${index}`}
										display="inline"
										align="center"
										size="medium"
										activeClassName={classes.activeClassName}
										className={classes.linkNav}
										exact
										to={link.path}
										component={NavLink}
									>
										{link.name}
									</Button>
								))}
							</Fragment>
						) : null}
						<MenuButtonUser isUser />
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
					<AppLogoLink small={true} to={INICIO} nameLink="Veterinaria" />
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{LINKS_NAV_APP.map((link, index) => (
						<ListItem button key={index}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText>
								<Link to={link.path} className={classes.sideBarLinks}>
									{link.name}
								</Link>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Fragment>
	);
}

export default MenuAppBar;
