import { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from '@material-ui/core';

// Routes
import { INICIO, linksNAV, LOGIN, PERFIL } from '../routes';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: '#F3F3F1',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#F3F3F1',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  navMobile: {
    display: 'flex',
    flex: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkNav: {
    padding: theme.spacing(1, 2),
    cursor: 'pointer',
    transition: '0.3s ease',
    textDecoration: 'none',
    color: '#5e5c5c',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover': {
      color: '#b35f97eb',
    },
  },
  activeClassName: {
    color: '#b35f97eb',
  },
  sideBarLinks: {
    cursor: 'pointer',
    color: '#b35f97eb',
    textDecoration: 'none',
  },
  menuLinks: {
    '& > a': {
      textDecoration: 'none',
      color: '#b35f97eb',
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

  const [anchorEl, setAnchorEl] = useState(null);
  const openLogin = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isQueryMobile = useMediaQuery('(min-width:870px)');
  let isLogin = true;
  const ButtonAuthLogin = (
    <Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircleIcon />
      </IconButton>
      {openLogin ? (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={openLogin}
          onClose={handleClose}
        >
          {isLogin ? (
            <MenuItem className={classes.menuLinks}>
              <Link to={LOGIN}>Iniciar Sesión</Link>
            </MenuItem>
          ) : null}
          <MenuItem onClick={handleClose} className={classes.menuLinks}>
            <Link to={PERFIL}>Perfil</Link>
          </MenuItem>
          <MenuItem className={classes.btnLogout} onClick={handleClose}>
            <span>Cerrar Sesión</span>
          </MenuItem>
        </Menu>
      ) : null}
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar position="fixed" color="default" elevation={0}>
        <Toolbar className={classes.navMobile}>
          {isQueryMobile ? null : (
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

          <AppLogoLink to={INICIO} nameLink="Veterinaria" />

          <div className={classes.navMobile}>
            {isQueryMobile ? (
              <Fragment>
                {linksNAV.map((link, index) => (
                  <Button
                    key={index}
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
            {ButtonAuthLogin}
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
          <AppLogoLink small to={INICIO} nameLink="Veterinaria" />
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
          {linksNAV.map((link, index) => (
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
