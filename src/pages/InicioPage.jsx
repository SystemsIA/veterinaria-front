// Components
import { Container, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

export default function InicioPage() {
  return (
    <Layout title="Inicio">
      <Container>
        <Typography variant="h4">Inicio</Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          quae explicabo commodi, quasi dignissimos dolorem molestiae placeat
          nostrum odio adipisci voluptates exercitationem nihil?
        </Typography>
      </Container>
    </Layout>
  );
}
