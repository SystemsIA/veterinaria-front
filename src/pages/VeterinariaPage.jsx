import { Container, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

export default function VeterinariaPage() {
  return (
    <Layout title="Veterinaria San Lorenzo">
      <Container>
        <Typography variant="h4" align="right">
          Veterinaria San Lorenzo
        </Typography>
        <Typography variant="body1" align="justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
          laudantium repellendus, voluptatibus aliquam totam placeat perferendis
          odit laboriosam, possimus natus rerum, distinctio quidem!
        </Typography>
      </Container>
    </Layout>
  );
}
