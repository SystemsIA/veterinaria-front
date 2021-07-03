import { Typography } from '@material-ui/core';
import LayoutMedico from 'components/medico/LayoutMedico';

function MedicoInventariosPage() {
	return (
		<LayoutMedico title="Inventario">
			<Typography variant="h3" component="h3" align="center">
				Todos los productos
			</Typography>
		</LayoutMedico>
	);
}

export default MedicoInventariosPage;
