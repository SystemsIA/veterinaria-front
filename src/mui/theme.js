import createTheme from '@material-ui/core/styles/createTheme';
import * as colors from '@material-ui/core/colors';

export default createTheme({
	palette: {
		primary: {
			main: '#ffca28',
		},
		secondary: {
			main: '#ff4081',
			contrastText: '#fff',
		},
		info: {
			main: '#96D2D9',
		},
		error: {
			main: colors.red['200'],
		},
	},

	typography: {
		fontFamily: ['"Assistant"', 'sans-serif'].join(','),
		fontSize: 15,
		fontWeightMedium: 'bold',
		fontWeightRegular: 'bold',
		fontWeightLight: 'normal',
	},
});
