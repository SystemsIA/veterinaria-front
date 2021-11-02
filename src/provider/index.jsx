import { Fragment, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { INICIO } from 'routes';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from 'mui/theme';

function GeneralProvider({ children }) {
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

export default GeneralProvider;
