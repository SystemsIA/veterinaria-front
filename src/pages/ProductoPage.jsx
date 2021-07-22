import { useEffect } from 'react';
import Layout from 'components/Layout';
import CardRopa from 'components/mascota/CardRopa';
import useGeneralState from 'hooks/useGeneralState';

function ProductoPage(props) {
	const { idProducto } = props.match.params;
	const state = useGeneralState();

	useEffect(() => {
		state.getProductoAction(idProducto);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [idProducto]);
	return (
		<Layout title={`Producto - ${state.producto?.nombre}`}>
			<CardRopa producto={state?.producto} />
		</Layout>
	);
}

export default ProductoPage;
