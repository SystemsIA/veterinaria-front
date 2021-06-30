import React, { Fragment, useRef, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Collapse, ListItemIcon, makeStyles } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
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
	activeItem: {
		backgroundColor: theme.palette.primary.light,
	},
}));

function ItemListCollapse({ nameItem = '', image, children }) {
	const [open, setOpen] = useState(false);
	const classes = useStyles();
	const handleClick = () => {
		setOpen(!open);
	};
	const wrapperRef = useRef();
	return (
		<Fragment>
			<ListItem
				button
				onClick={handleClick}
				className={open ? classes.activeItem : ''}
			>
				<ListItemIcon className={classes.sizeImg}>
					<img src={image} alt={nameItem} />
				</ListItemIcon>
				<ListItemText className={classes.textSize} primary={nameItem} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItem>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding innerRef={wrapperRef}>
					{children}
				</List>
			</Collapse>
		</Fragment>
	);
}

export default ItemListCollapse;
