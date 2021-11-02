import { AppRoutes } from 'routes';
import GeneralProvider from 'provider';
import ErrorBoundary from 'boundary/ErrorBoundary';

function VeterinariaApp() {
	return (
		<GeneralProvider>
			<ErrorBoundary>
				<AppRoutes />
			</ErrorBoundary>
		</GeneralProvider>
	);
}

export default VeterinariaApp;
