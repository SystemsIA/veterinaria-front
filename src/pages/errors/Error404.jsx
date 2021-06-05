import Layout from '../../components/Layout';
import { Box, Typography } from '@material-ui/core';

function Error404() {
  return (
    <Layout title="Error 404">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2" color="primary" align="center">
          Error 404
        </Typography>

        <Typography variant="body1" align="center">
          Up parece que no encuentras lo que buscas
        </Typography>
      </Box>
    </Layout>
  );
}

export default Error404;
