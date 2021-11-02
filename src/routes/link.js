// Links Front Office
export const INICIO = '/',
	CATALOGO = '/catalogo',
	VETSANLOR = '/veterinaria-san-lorenzo',
	SERVICIOS = '/servicios',
	LOGIN = '/login',
	PRODUCTO = '/producto/:idProducto';

// Links Navbar
export const LINKS_NAV_APP = [
	{ name: 'Inicio', path: INICIO },
	{ name: 'Catálogo', path: CATALOGO },
	{ name: 'Nuestros Servicios', path: SERVICIOS }
];

// Links User
export const USER_INICIO = '/user',
	USER_PERFIL = '/perfil',
	USER_MASCOTAS = '/mascotas',
	USER_CITAS = '/citas',
	USER_CATALOGO = '/catalogo',
	USER_RESET_PASSWORD = '/cambio-password';

// Links Médico
export const MEDICO_INICIO = '/medico',
	MEDICO_TAREAS = '/tareas',
	MEDICO_MASCOTAS = '/mascotas',
	MEDICO_CATALOGO = '/catalogo',
	MEDICO_CLIENTES = '/clientes',
	MEDICO_INVENTARIO = '/inventarios',
	MEDICO_CITAS = '/citas';

// Links Mascotas
export const MASCOTA_HISTORIAL = '/historial/:idMascota';

// Links Errors
export const FORBIDDEN = '/forbidden',
	UNAUTHORIZED = '/unauthorized';
