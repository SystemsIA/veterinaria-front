import { Fragment, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
// Components

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// Icons
import IconButton from '@material-ui/core/IconButton';
import SettingsIconSvg from 'components/icons/SettingsIconSvg';
import withModalTransition from 'hocs/withModalTransition';

// Styles
import useStyles from './CardMascota.styles';
import ButtonLink from 'components/ui/ButtonLink';
import TransitionsModal from 'components/ui/TransitionsModal';
import HistoriaForm from './HistoriaForm';

// Hooks
import useAuth from 'hooks/useAuth';
import { useModalTransition } from 'contexts/ModalTransitionContext';

function CardMascota({ dataMascota, ownerMascota, isBtnHistory = true }) {
	const auth = useAuth();
	const url = useRouteMatch().url;
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);

	const modal = useModalTransition();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<Fragment>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar arial-label='recipe' className={classes.avatar}>
							{dataMascota.nombre[0].toUpperCase()}
						</Avatar>
					}
					action={
						<div>
							{auth.user?.isDoctor ? (
								<Fragment>
									<IconButton
										aria-label='settings'
										aria-controls='simple-menu'
										aria-haspopup='true'
										onClick={handleClick}
									>
										<SettingsIconSvg />
									</IconButton>
									<div>
										<Menu
											id='simple-menu'
											anchorEl={anchorEl}
											keepMounted
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											<MenuItem
												onClick={() => {
													handleClose();
													modal.handleOpen();
												}}
											>
												Añadir un historial
											</MenuItem>
										</Menu>
									</div>
									<TransitionsModal>
										<HistoriaForm
											title='Registrar una tarea'
											mascotaId={dataMascota.id}
											width='100%'
										/>
									</TransitionsModal>
								</Fragment>
							) : null}
						</div>
					}
					title={dataMascota.nombre.toUpperCase()}
					subheader={ownerMascota}
				/>
				<CardContent className={classes.rootContent}>
					<Box
						display='flex'
						justifyContent='space-between'
						className={classes.bgContent}
					>
						<div className={classes.contentInfoMascota}>
							<p>
								<b>Sexo:</b> {dataMascota.sexo}
							</p>
							<p>
								<b>Edad:</b> {dataMascota.edad}
							</p>
							<p>
								<b>Especie:</b> {dataMascota.especie.tipo}
							</p>
							<p>
								<b>Raza:</b> {dataMascota.raza}
							</p>
							<p>
								<b>Color:</b> {dataMascota.color}
							</p>
							<p>
								<b>Alergias:</b> {dataMascota.alergias}
							</p>
							<p>
								<b>EstadoReproductivo:</b> {dataMascota.estadoReproductivo}
							</p>
							<p>
								<b>Dueño:</b> {ownerMascota}
							</p>
							<p>
								<b>Dni:</b> {dataMascota.dni}
							</p>
							<p>
								<b>Vacunas:</b> {dataMascota.vacunas}
							</p>
							<p>
								<b>Esterilizado:</b> {dataMascota.esterilizado ? 'Si' : 'No'}
							</p>
							<p>
								<b>Entero:</b> {dataMascota.entero ? 'Si' : 'No'}
							</p>
							<p>
								<b>Gestación:</b> {dataMascota.gestacion ? 'Si' : 'No'}
							</p>
							<p>
								<b>Lactancia:</b> {dataMascota.lactancia ? 'Si' : 'No'}
							</p>
						</div>
						<CardMedia
							className={classes.media}
							image={dataMascota.especie.imagen}
							title={dataMascota.nombre}
						/>
					</Box>
					<Box
						display='flex'
						justifyContent='space-between'
						className={classes.bgContent}
					>
						<Button className={classes.btnBg} variant='contained'>
							Estado
						</Button>
						{isBtnHistory ? (
							<ButtonLink
								text='Historial'
								className={classes.linkBtn}
								to={`${url}/historial/${dataMascota.id}`}
								color='secondary'
								variant='contained'
							/>
						) : (
							<ButtonLink
								text='Más Información'
								className={classes.linkBtn}
								to={`${url}/historial/${dataMascota.id}`}
								variant='contained'
							/>
						)}
					</Box>
				</CardContent>
			</Card>
		</Fragment>
	);
}

CardMascota.defaultProps = {
	ownerMascota: '',
	dataMascota: {
		id: 0,
		sexo: 'Mascota Sexo',
		edad: 'Mascota edad',
		especie: { tipo: 'Mascota especie' },
		raza: 'Mascota raza',
		color: 'Mascota color',
		alergias: 'Mascota alergias[]',
		estadoReproductivo: 'Mascota en reproducción',
		duenio: 'Dueño Mascota',
		dni: 'ewqewqe2e',
		vacunas: 'Mascota Vacunas[]',
		esterilizado: false,
		entero: false,
		gestacion: false,
		lactancia: false,
	},
};

export default withModalTransition(CardMascota);
