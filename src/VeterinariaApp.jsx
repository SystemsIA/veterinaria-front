import { AppRoute } from 'routes';
import { GeneralProvider } from 'provider';
import ErrorBoundary from 'boundary/ErrorBoundary';
import AppRoot from 'components/AppRoot';

function VeterinariaApp() {
	return (
		<GeneralProvider>
			<ErrorBoundary>
				<AppRoot>
					<AppRoute />
				</AppRoot>
			</ErrorBoundary>
		</GeneralProvider>
	);
}

export default VeterinariaApp;
