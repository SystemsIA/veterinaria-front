import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, INICIO } from 'routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'mui/theme';

import MenuAppBar from 'components/MenuAppBar';

function VeterinariaApp() {
	return (
		<BrowserRouter basename={INICIO}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MenuAppBar />
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default VeterinariaApp;
