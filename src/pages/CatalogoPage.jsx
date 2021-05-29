import { Container, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

export default function CatalogoPage() {
  return (
    <Layout title="Catálogo">
      <Container>
        <Typography variant="h4">Catalogo</Typography>
        <Typography variant="body1">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          quae explicabo commodi, quasi dignissimos dolorem molestiae placeat
          nostrum odio adipisci voluptates exercitationem nihil?
        </Typography>
      </Container>
    </Layout>
  );
}
