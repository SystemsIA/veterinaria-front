import { Container, Typography } from '@material-ui/core';
import Layout from 'components/Layout';

function ServicioPage() {
	return (
		<Layout title="Servicios">
			<Container>
				<Typography variant="h4" align="center">
					Servicios
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

export default ServicioPage;
