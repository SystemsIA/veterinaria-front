import { makeStyles } from '@material-ui/core';

export default makeStyles({
	root: {
		width: 345,
		height: 370,
		position: 'relative',
	},
	media: {
		height: 140,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '1rem 1.5rem',
		'& > img': {
			maxWidth: 180,
			maxHeight: 150,
			minWidth: 120,
			borderRadius: '12px',
			padding: '0 1rem',
		},
	},
	cardActions: {
		position: 'absolute',
		bottom: 10,
		left: 110,
		marginBottom: '1rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	cardContent: {
		textAlign: 'center',
	},
	bgButton: {
		backgroundColor: '#EB537C',
		color: '#fff',
		boxSizing: 'border-box',
		transition: '.5s',
		border: '1px solid #EB537C',
		'& > span': {
			fontSize: '12px',
		},
		'&:hover': {
			backgroundColor: '#fff',
			color: '#EB537C',
		},
	},
});
