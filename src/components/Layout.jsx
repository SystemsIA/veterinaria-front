import { Fragment } from 'react';

import clsx from 'clsx';

// Hooks
import useTitleDocument from 'hooks/useTitleDocument';

// Styles
import useStyles from './Layout.styles';

function Layout({ children, title = 'Inicio', open = true }) {
	const classes = useStyles();

	useTitleDocument(title);

	return (
		<Fragment>
			<div className={classes.drawerHeader} />
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				{children}
			</main>
		</Fragment>
	);
}

export default Layout;
