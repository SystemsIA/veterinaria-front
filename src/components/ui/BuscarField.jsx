import { alpha, InputBase, makeStyles } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
	search: {
		margin: theme.spacing(2),
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.primary.main, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.primary.main, 0.25),
		},
		marginLeft: 0,
		width: '100%',
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
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

function BuscarField({ onChange }) {
	const classes = useStyles();
	return (
		<div className={classes.search}>
			<div className={classes.searchIcon}>
				<SearchIcon />
			</div>
			<InputBase
				placeholder='Buscar...'
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ 'aria-label': 'search' }}
				onChange={onChange}
			/>
		</div>
	);
}

export default BuscarField;
