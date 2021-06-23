import { Fragment, useEffect } from 'react';

import clsx from 'clsx';

// Styles
import useStyles from './Layout.styles';

function Layout({ children, title = 'Inicio', open = true }) {
	const classes = useStyles();

	useEffect(() => {
		document.title = title;
	}, [title]);

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
