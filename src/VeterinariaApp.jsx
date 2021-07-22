import { useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, INICIO } from 'routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import ErrorBoundary from 'boundary/ErrorBoundary';

import theme from 'mui/theme';

function VeterinariaApp() {
	const themeMui = useMemo(() => theme, []);

	return (
		<BrowserRouter basename={INICIO}>
			<ThemeProvider theme={themeMui}>
				<CssBaseline />
				<ErrorBoundary>
					<AppRoutes />
				</ErrorBoundary>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default VeterinariaApp;
