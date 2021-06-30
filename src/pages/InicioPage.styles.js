import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
	},
	withoutFlexBasis: {
		flexBasis: 'auto',
		flexDirection: 'column',
		'& > img': {
			maxWidth: 250,
		},
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
	sizeImgMobile: {
		width: '240px',
	},
	content: {
		maxWidth: '100%',
	},
}));
