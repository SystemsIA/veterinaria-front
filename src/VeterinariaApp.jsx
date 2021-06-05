import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { theme } from './mui/theme';
import { AppRoutes, INICIO } from './routes';
import { AuthProvider } from './context/AuthContext';

function VeterinariaApp() {
  return (
    <AuthProvider>
      <BrowserRouter basename={INICIO}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default VeterinariaApp;
