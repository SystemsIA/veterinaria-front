import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
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
	},

	typography: {
		fontFamily: ['"Assistant"', 'sans-serif'].join(','),
		fontSize: 15,
		fontWeightMedium: 'bold',
		fontWeightRegular: 'bold',
		fontWeightLight: 'normal',
	},
});
