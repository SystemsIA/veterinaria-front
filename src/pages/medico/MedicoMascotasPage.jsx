import { useEffect } from 'react';
import useClient from 'hooks/useClient';
import useSearch from 'hooks/useSearch';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Grid,
	Typography,
} from '@material-ui/core';

import ButtonBack from 'components/ui/ButtonBack';
import ArrowBack from 'components/icons/ArrowBack';
import SearchField from 'components/ui/SearchField';
import CardMascota from 'components/mascota/CardMascota';
import LayoutMedico from 'components/medico/LayoutMedico';
import MascotaForm from 'components/mascota/MascotaForm';

// Images
import imgMore from 'assets/img/iconMas.png';

function MedicoMascotasPage() {
	const cliente = useClient();

	const mascotas = useSearch('nombre', cliente?.mascotas);

	useEffect(() => {
		(async () => {
			await cliente.listMascotaAction();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<LayoutMedico container title='Mascotas'>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<div>
					<Typography color='secondary' variant='h3' component='h3'>
						Gestión de Mascotas
					</Typography>
				</div>

				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>
			<Accordion>
				<AccordionSummary
					expandIcon={
						<img width={40} src={imgMore} alt='Registrar nueva mascota' />
					}
					aria-controls='panel3a-content'
					id='panel3a-header'
				>
					<Typography variant='h6'>Registrar nueva mascota</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<MascotaForm activeListUser />
				</AccordionDetails>
			</Accordion>
			<h1>Mascotas de la veterinaria</h1>

			<SearchField
				placeholder='Buscar mascota por nombre...'
				onChange={mascotas.handleSearch}
			/>

			<Grid container spacing={2}>
				{mascotas.data.map((mascota) => (
					<Grid key={mascota.id} item xs={12} sm={6}>
						<CardMascota dataMascota={mascota} isBtnHistory={false} />
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

export default MedicoMascotasPage;
