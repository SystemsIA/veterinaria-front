// Hooks
import useMounted from 'hooks/useMounted';
import useClient from 'hooks/useClient';
import useSearch from 'hooks/useSearch';

// Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
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
	
	const mascotaSearch = useSearch('nombre', cliente?.mascotas);
	
	useMounted(async () => {
		await cliente.listMascotaAction();
	});
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
				onChange={mascotaSearch.handleSearch}
				wInput={25}
			/>
			
			<Grid container spacing={2}>
				{mascotaSearch.data.map((mascota) => (
					<Grid key={mascota.id} item xs={12} sm={6}>
						<CardMascota dataMascota={mascota} isBtnHistory={false} />
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

export default MedicoMascotasPage;
