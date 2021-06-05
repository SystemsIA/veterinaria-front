import Layout from '../../components/Layout';
import { Box, Button, Typography, useMediaQuery } from '@material-ui/core';
import { MEDICO_TAREAS } from '../../routes';

function Index() {
  const isMobileSize = useMediaQuery('(min-width:400px)');
  return (
    <Layout title="Inicio Tareas">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography align="center" variant="h4">
          Inicio Página
        </Typography>
        <Typography
          variant={isMobileSize ? 'h1' : 'h4'}
          color="primary"
          align="center"
        >
          Bienvenido Doctor
        </Typography>

        <Button color="secondary" variant="contained" href={MEDICO_TAREAS}>
          Revisar tareas
        </Button>
      </Box>
    </Layout>
  );
}

export default Index;
