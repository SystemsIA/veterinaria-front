import { Fragment, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { INICIO } from 'routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import theme from 'mui/theme';

export function GeneralProvider({ children }) {
	const themeMui = useMemo(() => theme, []);
	return (
		<Fragment>
			<BrowserRouter basename={INICIO}>
				<ThemeProvider theme={themeMui}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</BrowserRouter>
		</Fragment>
	);
}
