import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Layout from '../../components/Layout';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppLogoLink from '../../components/AppLogoLink';
import { Box, ListItemIcon } from '@material-ui/core';

// Icons
import StarBorder from '@material-ui/icons/StarBorder';

// Routes
import { MEDICO_INICIO } from '../../routes';

// Images
import dogFlower from '../../assets/img/perritoFlores.png';
import imgTask from '../../assets/img/imag4.png';
import imgClient from '../../assets/img/imag3.png';
import ItemListCollapse from '../../components/ItemListCollapse';
import TaskTable from '../../components/TaskTable';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#95D1D8',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nameDoctorLogo: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& img': {
      maxHeight: 140,
    },
  },
  roundedLogo: {
    height: 150,
    width: 150,
    borderRadius: '50%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rootList: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  gridRoot: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  imgSize: {
    '& img': {
      maxWidth: 50,
    },
  },
}));

function MedicoTaskPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        color="inherit"
        elevation={1}
      >
        <Toolbar style={{ padding: 0 }}>
          <AppLogoLink to={MEDICO_INICIO} nameLink="Veterinaria | Médico" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <div className={classes.nameDoctorLogo}>
            <div className={classes.roundedLogo}>
              <img src={dogFlower} alt="" />
            </div>
            <h1>Doctor</h1>
          </div>

          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.rootList}
          >
            <ItemListCollapse nameItem="Tareas" image={imgTask}>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Citas" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Cirugías" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Vacunas" />
              </ListItem>
            </ItemListCollapse>
            <ItemListCollapse nameItem="Clientes" image={imgClient}>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </ItemListCollapse>
            <ItemListCollapse nameItem="Inventario" image={imgTask}>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </ItemListCollapse>
          </List>
        </div>
      </Drawer>
      <Layout title="Medico | Dr. Doctor">
        <Toolbar />
        <div className={classes.gridRoot}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <div>
              <Typography variant="h4">Buen Día Doctor</Typography>
              <span>Estas son sus tareas pendientes</span>
            </div>
            <div className={classes.imgSize}>
              <img src={imgTask} alt="Tareas Doctor" />
            </div>
          </Box>
          <br />
          <Box justifyContent="center">
            <TaskTable />
          </Box>
        </div>
      </Layout>
    </div>
  );
}
export default MedicoTaskPage;
