// Links Front Office
export const INICIO = '/',
	CATALOGO = '/catalogo',
	VETSANLOR = '/veterinaria-san-lorenzo',
	SERVICIOS = '/servicios',
	LOGIN = '/login';

// Links For Navbar
export const LINKS_NAV_APP = [
	{ name: 'Inicio', path: INICIO },
	{ name: 'Catálogo', path: CATALOGO },
	{ name: 'Veterinaria San Lorenzo', path: VETSANLOR },
	{ name: 'Nuestros Servicios', path: SERVICIOS },
];

// Links User
export const USER_HOME = '/user',
	USER_PERFIL = '/user/perfil';

// Links Médico
export const MEDICO_INICIO = '/medico',
	MEDICO_TAREAS = '/tareas',
	MEDICO_MASCOTAS = '/mascotas',
	MEDICO_CATALOGO = '/catalogo',
	MEDICO_CITAS = '/citas';

// Links Mascotas
export const MASCOTA_HISTORIAL = '/historial/:idMascota';

// Links Errors
export const FORBIDDEN = '/forbidden',
	UNAUTHORIZED = '/unauthorized';
