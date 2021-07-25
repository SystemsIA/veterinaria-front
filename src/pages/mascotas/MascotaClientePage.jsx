import { useEffect } from 'react';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Grid,
	Typography,
} from '@material-ui/core';
import CardMascota from 'components/mascota/CardMascota';
import LayoutMedico from 'components/medico/LayoutMedico';
import useClient from 'hooks/useClient';
import ButtonBack from 'components/ui/ButtonBack';
import ArrowBack from 'components/icons/ArrowBack';
import MascotaForm from 'components/mascota/MascotaForm';
import imgMore from 'assets/img/iconMas.png';
function MascotaClientePage(props) {
	let { clientId } = props.match.params;

	const cliente = useClient();

	useEffect(() => {
		(async () => {
			await cliente.fetchClientAction(clientId);
		})();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LayoutMedico container title={`Mascotas - ${cliente?.c?.nombre}`}>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<div>
					<Typography variant='h3' component='h3'>
						Mascotas de
					</Typography>
					<Typography color='secondary' variant='h4'>
						{cliente?.c?.nombre}
					</Typography>
				</div>

				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>
			<br />
			<Box>
				<Accordion>
					<AccordionSummary
						expandIcon={
							<img width={40} src={imgMore} alt='Registrar nueva mascota' />
						}
						aria-controls='panel3a-content'
						id='panel3a-header'
					>
						<Typography variant='h6'>Registrar su mascota</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<MascotaForm clientId={clientId} />
					</AccordionDetails>
				</Accordion>
			</Box>
			<br />
			<Grid container spacing={2}>
				{cliente?.c?.mascotas.map((mascota) => (
					<Grid key={mascota.id} item xs={12} sm={6}>
						<CardMascota
							dataMascota={mascota}
							ownerMascota={cliente?.c?.nombre}
						/>
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

export default MascotaClientePage;
