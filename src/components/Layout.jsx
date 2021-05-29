import { makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import Main from './Main';
import MenuAppBar from './MenuAppBar';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    background: '#F3F3F1',
    height: '100vh',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function Layout({ children, title = 'Inicio' }) {
  const classes = useStyles();

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={classes.root}>
      <MenuAppBar />
      <Main classes={classes}>{children}</Main>
    </div>
  );
}
