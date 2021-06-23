import Layout from 'components/Layout';
import useAuth from 'hooks/useAuth';

function UserPerfilPage() {
	const auth = useAuth();

	return (
		<Layout title={`Mi Perfil | ${auth.user?.username} `}>
			<h1>Mi Perfil</h1>
		</Layout>
	);
}

export default UserPerfilPage;
