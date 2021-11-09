import makeStyles from '@material-ui/core/styles/makeStyles';

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
		maxWidth: '100%',
		textAlign: 'center',
		'& img': {
			margin: '1rem auto',
			maxWidth: 250,
		},
	},

	loginPage: {
		maxWidth: '100%',
		textAlign: 'center',
		'& > img': {
			margin: '1rem auto',
			maxWidth: (props) => (props.isMinSize ? 800 : 200),
		},
	},
}));
