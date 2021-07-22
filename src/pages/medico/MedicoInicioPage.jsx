// Components
import LayoutMedico from 'components/medico/LayoutMedico';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import ButtonLink from 'components/ui/ButtonLink';
//Routes
import * as LINKS from 'routes';

function MedicoInicioPage(props) {
	const url = props.match.url;
	const isNotMobileSize = useMediaQuery('(min-width:400px)');

	return (
		<LayoutMedico title='Inicio'>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
			>
				<Typography align='center' variant='h4'>
					Inicio Página
				</Typography>
				<Typography
					variant={isNotMobileSize ? 'h1' : 'h6'}
					color='primary'
					align='center'
				>
					Bienvenido Doctor
				</Typography>

				<ButtonLink
					color='secondary'
					variant='contained'
					to={`${url}${LINKS.MEDICO_TAREAS}`}
					text='Revisar tareas'
				/>
			</Box>
		</LayoutMedico>
	);
}

export default MedicoInicioPage;
