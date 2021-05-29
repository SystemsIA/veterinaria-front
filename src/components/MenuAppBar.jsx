import React, { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Menu, MenuItem, useMediaQuery } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { linksNAV, PERFIL } from '../routes';

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
  },
  drawerPaper: {
    width: drawerWidth,
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
  },

  activeClassName: {
    color: '#000000',
    fontWeight: 'bold',
    backgroundColor: '#F3F3F1',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLogin = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isQueryMobile = useMediaQuery('(min-width:730px)');

  return (
    <Fragment>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        elevation={1}
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

          <Typography variant="h4" noWrap>
            <Link to="/" className={classes.navLogo}>
              APPVET
            </Link>
          </Typography>

          <div className={classes.navMobile}>
            {isQueryMobile ? (
              <Fragment>
                {linksNAV.map((link, index) => (
                  <NavLink
                    activeClassName={classes.activeClassName}
                    to={link.path}
                    underline="none"
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
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
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
                <MenuItem onClick={handleClose}>
                  <Link to={PERFIL}>Perfil</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
              </Menu>
            ) : null}
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
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
}
