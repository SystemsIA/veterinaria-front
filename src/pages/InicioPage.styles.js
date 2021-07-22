import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '4px 0',
		position: 'relative',
		flexGrow: 1,
	},
	withoutFlexBasis: {
		flexBasis: 'auto',
		'& img': {
			maxWidth: 350,
			minWidth: 100,
		},
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,

		'& ul': {
			listStyleType: 'none',
			padding: theme.spacing(1, 0),
		},
		'& li': {
			display: 'flex',
			flexBasis: 2,
		},
	},
	sizeImgMobile: {
		width: '240px',
	},
	content: {
		maxWidth: '100%',
	},
	paperTitle: {
		padding: theme.spacing(1, 1),
		margin: theme.spacing(2, 0),
		width: '50%',
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.getContrastText(theme.palette.secondary.main),
	},
}));
