import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& > *': {
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
	withoutFlexBasis: {
		flexBasis: 'auto',
		maxWidth: '100%',
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
	sizeImg: { width: '450px', zIndex: 100 },
	sizeImgMobile: {
		width: '240px',
	},
	contentImage: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& > img': {
			maxWidth: (props) => (props.isNotMobileSize ? 345 : 170),
			minWidth: 80,
		},
	},
}));
