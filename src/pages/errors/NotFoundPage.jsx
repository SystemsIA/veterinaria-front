import Layout from 'components/Layout';
import { Box, Typography } from '@material-ui/core';
import ButtonBack from 'components/ui/ButtonBack';

function NotFoundPage(props) {
	let { rest } = props.match.params;
	return (
		<Layout title='Error 404'>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Typography variant='h2' color='primary' align='center'>
					Error 404
				</Typography>
				<Typography
					variant='h4'
					color='error'
					style={{ textDecoration: 'underline' }}
				>
					{rest}
				</Typography>
				<Typography align='center'>
					Ups parece que la dirección que buscas no esta disponible o no existe!
					😅
				</Typography>
				<ButtonBack color='secondary' variant='contained' />
			</Box>
		</Layout>
	);
}

export default NotFoundPage;
