import { makeStyles } from '@material-ui/core/styles';

//Components
import Layout from '../../components/Layout';
import ItemListCollapse from '../../components/ItemListCollapse';
import TaskTable from '../../components/TaskTable';
import AppLogoLink from '../../components/AppLogoLink';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@material-ui/core';

// Icons
import StarBorder from '@material-ui/icons/StarBorder';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

// Routes
import { MEDICO_INICIO } from '../../routes';

// Images
import dogFlower from '../../assets/img/perritoFlores.png';
import imgTask from '../../assets/img/imag4.png';
import imgClient from '../../assets/img/imag3.png';
import imgMore from '../../assets/img/iconMas.png';
import imgBone from '../../assets/img/iconHuesito.png';
import MenuBtnUser from '../../components/MenuBtnUser';
import RegisterUserForm from '../../components/task-doctor/RegisterUserForm';

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
      maxWidth: 40,
      minWidth: 15,
    },
  },

  paper: {
    padding: 20,
  },
  toolbar: {
    padding: 0,
    justifyContent: 'space-between',
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
        <Toolbar className={classes.toolbar}>
          <AppLogoLink to={MEDICO_INICIO} nameLink="Veterinaria | Médico" small>
            <MenuBtnUser side="left" />
          </AppLogoLink>

          <div>
            <Button className={classes.imgSize}>
              <img src={imgBone} alt="Hueso Imagen" />
            </Button>
            <Button>
              <SettingsOutlinedIcon fontSize="large" />
            </Button>
          </div>
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
              <img src={dogFlower} alt="Perro Flores" />
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
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Registrar cliente" />
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
          <Accordion>
            <AccordionSummary
              aria-controls="view-task"
              id="view-task"
              expandIcon={
                <Button color="primary" className={classes.imgSize}>
                  <img src={imgMore} alt="Tareas Doctor" />
                </Button>
              }
            >
              <Typography variant="h6">
                Buen Día Doctor <br /> Estas son sus tareas pendientes
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TaskTable />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              aria-controls="create-task"
              id="create-task"
              expandIcon={
                <Button color="primary" className={classes.imgSize}>
                  <img src={imgMore} alt="Tareas Doctor" />
                </Button>
              }
            >
              <Typography variant="h6">Crear tareas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RegisterUserForm />
            </AccordionDetails>
          </Accordion>
        </div>
      </Layout>
    </div>
  );
}

export default MedicoTaskPage;
