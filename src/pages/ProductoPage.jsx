import Layout from 'components/Layout';
import CardRopa from 'components/mascota/CardRopa';

// Hooks
import useGeneralState from 'hooks/useGeneralState';
import useMounted from 'hooks/useMounted';

function ProductoPage(props) {
	const { idProducto } = props.match.params;
	const state = useGeneralState();

	useMounted(async () => {
		await state.getProductoAction(idProducto);
	});

	return (
		<Layout title={`Producto - ${state.producto?.nombre}`}>
			<CardRopa producto={state?.producto} />
		</Layout>
	);
}

export default ProductoPage;
