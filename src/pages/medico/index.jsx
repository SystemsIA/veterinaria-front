import Layout from '../../components/Layout';
import { Box, Button, Typography } from '@material-ui/core';
import { MEDICO_TAREAS } from '../../routes';

function index() {
  return (
    <Layout title="Inicio Tareas">
      <Typography align="center" variant="h4">
        Inicio Página
      </Typography>
      <Typography variant="h1" color="primary" align="center">
        Bienvenido Doctor
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Button color="secondary" variant="contained" href={MEDICO_TAREAS}>
          Revisar tareas
        </Button>
      </Box>
    </Layout>
  );
}

export default index;
