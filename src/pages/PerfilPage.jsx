import { Container, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

export default function PerfilPage() {
  return (
    <Layout title="Mi - Perfil">
      <Container>
        <Typography variant="h4" align="center">
          Veterinario
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laudantium repellendus, voluptatibus aliquam totam placeat perferendis
          odit laboriosam, possimus natus rerum, distinctio quidem!
        </Typography>
      </Container>
    </Layout>
  );
}
