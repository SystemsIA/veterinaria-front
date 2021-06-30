import { Fragment } from 'react';
import { motion } from 'framer-motion';

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
			<motion.div animate="animate" exit={{ opacity: 0 }}>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					{children}
				</main>
				<Footer />
			</motion.div>
		</Fragment>
	);
}

export default Layout;
