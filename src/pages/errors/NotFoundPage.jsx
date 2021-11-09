import Layout from 'components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBack from 'components/ui/ButtonBack';
import lucasImage from 'assets/img/lucas.png';

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
				<Box
					display='flex'
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
					style={{ margin: 20 }}
				>
					<img src={lucasImage} alt='Lucas' width='50%' />
					<Typography align='center'>No te vayas 😘</Typography>
				</Box>
				<ButtonBack color='secondary' variant='contained' />
			</Box>
		</Layout>
	);
}

export default NotFoundPage;
