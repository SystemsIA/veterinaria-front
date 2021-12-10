import { Fragment } from 'react';
import { motion } from 'framer-motion';

import clsx from 'clsx';

import Footer from 'components/Footer';

// Hooks
import useTitleDocument from 'hooks/useDocumentTitle';

// Styles
import useStyles from './Layout.styles';

function Layout({ title = 'Inicio', open = true, children }) {
	const classes = useStyles();
	
	useTitleDocument(title);
	
	return (
		<Fragment>
			<div className={classes.drawerHeader} />
			<motion.main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
				animate='animate'
				exit={{ opacity: 0 }}
			>
				{children}
			</motion.main>
			<Footer />
		</Fragment>
	);
}

export default Layout;
