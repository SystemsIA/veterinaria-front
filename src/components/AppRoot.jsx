import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Hooks
import useMounted from 'hooks/useMounted';
import useAuth from 'hooks/useAuth';
import useDocumentTitle from 'hooks/useDocumentTitle';

function AppRoot({ children }) {
	const auth = useAuth();

	useDocumentTitle('Cargando...');
	useMounted(async () => {
		await auth.userDetailAction();
		await Promise.resolve(auth.setReadyAppAction(true));
	});

	if (!auth.isReady) {
		return (
			<Box
				display='flex'
				gridColumnGap='2rem'
				justifyContent='center'
				alignItems='center'
				flexDirection='column'
			>
				<Typography variant='h1' component='h1'>
					Cargando...
				</Typography>
			</Box>
		);
	}

	return <Fragment>{children}</Fragment>;
}

export default AppRoot;
