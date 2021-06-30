import { NavLink } from 'react-router-dom';
import {
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		color: '#000',
		textDecoration: 'none',
		paddingLeft: theme.spacing(4),
	},
	sizeImg: {
		'& img': {
			maxWidth: 30,
			minWidth: 15,
		},
	},
	textSize: {
		'& span': {
			fontSize: 20,
		},
	},
	nested: {
		paddingLeft: theme.spacing(4),
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
				<img src={image} alt={nameItem} />
			</ListItemIcon>
			<ListItemText primary={nameItem} />
		</ListItem>
	);
}

export default ItemListLink;
