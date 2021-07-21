import { Box, Typography } from '@material-ui/core';
import ArrowBack from 'components/icons/ArrowBack';
import LayoutMedico from 'components/medico/LayoutMedico';
import ButtonBack from 'components/ui/ButtonBack';

function MedicoInventariosPage() {
	return (
		<LayoutMedico title='Inventario'>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<div>
					<Typography variant='h3' component='h3' align='center'>
						Todos los productos
					</Typography>
				</div>

				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>
		</LayoutMedico>
	);
}

export default MedicoInventariosPage;
