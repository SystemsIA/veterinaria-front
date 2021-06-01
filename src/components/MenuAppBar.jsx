import { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';

// Components
import {
  AppBar,
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
  Typography,
  useMediaQuery,
} from '@material-ui/core';

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { linksNAV, LOGIN, PERFIL } from '../routes';

import logoApp from '../assets/img/logo-app.png';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#fff',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(0),
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
    color: '#000',
    padding: theme.spacing(2),
    cursor: 'pointer',
    transition: '0.3s ease',
    textDecoration: 'none',
    '&:hover': {
      color: '#b35f97eb',
    },
  },

  navLogo: {
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  activeClassName: {
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#F3F3F1',
  },

  sizeLogoImg: {
    maxWidth: '54px',
    maxHeight: '48px',
    display: 'inline-block',
    padding: theme.spacing(1),
  },

  sideBarLinks: {
    cursor: 'pointer',
    textDecoration: 'none',
  },

  menuLinks: {
    '& > a': {
      textDecoration: 'none',
    },
  },
}));

export default function MenuAppBar({ setOpen, open }) {
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
          <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
        </Menu>
      ) : null}
    </Fragment>
  );

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={0}
      >
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

          <Link to="/" className={classes.navLogo}>
            <img
              src={logoApp}
              alt="Logo Veterinaria"
              className={classes.sizeLogoImg}
            />
            <Typography variant="h4" noWrap>
              APPVET
            </Typography>
          </Link>

          <div className={classes.navMobile}>
            {isQueryMobile ? (
              <Fragment>
                {linksNAV.map((link, index) => (
                  <NavLink
                    activeClassName={classes.activeClassName}
                    exact
                    to={link.path}
                    key={index}
                    className={classes.linkNav}
                  >
                    <Typography
                      variant="h6"
                      noWrap
                      display="inline"
                      align="center"
                    >
                      {link.name}
                    </Typography>
                  </NavLink>
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
