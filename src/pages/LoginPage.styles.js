import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
	},

	withoutFlexBasis: {
		flexBasis: 'auto',
	},

	loginContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	imgLogin: {
		textAlign: 'center',
		'& > img': {
			margin: '1rem auto',
			maxWidth: '222px',
			maxHeight: '212px',
		},
	},

	imgPageLogin: {
		textAlign: 'center',
		'& > img': {
			maxWidth: (props) => (props.isMobileSize ? '400px' : '200px'),
			maxHeight: (props) => (props.isMobileSize ? '400px' : '200px'),
			minWidth: (props) => (props.isMobileSize ? 200 : 100),
		},
	},

	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));
