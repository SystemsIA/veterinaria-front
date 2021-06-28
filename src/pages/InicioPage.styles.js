import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
	},
	withoutFlexBasis: {
		flexBasis: 'auto',
		flexDirection: 'column',
		alignItems: 'center',
		'& > img': {
			maxWidth: 350,
		},
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
	sizeImgMobile: {
		width: '240px',
	},
}));
