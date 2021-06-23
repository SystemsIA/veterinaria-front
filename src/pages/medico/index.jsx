import { Redirect } from 'react-router-dom';

// Hooks
import useAuth from 'hooks/useAuth';
// Components
import Layout from 'components/Layout';
import { Box, Button, Typography, useMediaQuery } from '@material-ui/core';

//Routes
import * as LINKS from 'routes';

function Index(props) {
	const url = props.match.url;
	const isMobileSize = useMediaQuery('(min-width:400px)');
	const { isLogin } = useAuth();

	if (!isLogin) {
		return <Redirect to={props.history.goBack() || '/'} exact />;
	}
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

				<Button
					color="secondary"
					variant="contained"
					href={`${url}` + LINKS.MEDICO_TAREAS}
				>
					Revisar tareas
				</Button>
			</Box>
		</Layout>
	);
}

export default Index;
