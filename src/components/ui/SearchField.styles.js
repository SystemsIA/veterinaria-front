import { alpha, makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	search: {
		width: '100%',
		margin: theme.spacing(2),
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.primary.main, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.main, 0.25),
		},
		marginLeft: 0,

		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		display: 'flex',
		[theme.breakpoints.up('sm')]: {
			width: '15ch',
			'&:focus': {
				width: '50ch',
			},
		},
	},
}));
