import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, INICIO } from 'routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'mui/theme';

function VeterinariaApp() {
	return (
		<BrowserRouter basename={INICIO}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppRoutes />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default VeterinariaApp;
