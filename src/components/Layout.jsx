import { Fragment } from 'react';

import clsx from 'clsx';

import Footer from 'components/Footer';

// Hooks
import useTitleDocument from 'hooks/useDocumentTitle';

// Styles
import useStyles from './Layout.styles';

function Layout({ children, title = 'Inicio', open = true }) {
	const classes = useStyles();

	useTitleDocument(title);

	return (
		<Fragment>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<div className={classes.drawerHeader} />
				{children}
			</main>
			<Footer />
		</Fragment>
	);
}

export default Layout;
