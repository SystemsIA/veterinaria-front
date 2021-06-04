import Layout from '../../components/Layout';
import { Typography } from '@material-ui/core';

function Error404() {
  return (
    <Layout title="Error 404">
      <Typography variant="h2" color="primary" align="center">
        Error 404
      </Typography>

      <Typography variant="body1" align="center">
        Up parece que no encuentras lo que buscas
      </Typography>
    </Layout>
  );
}

export default Error404;
