import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	root: {
		color: '#000',
		textDecoration: 'none',
	},
	sizeImg: {
		'& img': {
			maxWidth: 30,
			minWidth: 15,
		},
	},
	activeItem: {
		backgroundColor: theme.palette.primary.light,
	},
}));

function ItemListLink({ nameItem = '', href, image }) {
	const classes = useStyles();
	return (
		<ListItem
			button
			to={href}
			className={classes.root}
			activeClassName={classes.activeItem}
			component={NavLink}
		>
			<ListItemIcon className={classes.sizeImg}>
				{image && <img src={image} alt={nameItem} />}
			</ListItemIcon>
			<ListItemText primary={nameItem} />
		</ListItem>
	);
}

export default ItemListLink;
