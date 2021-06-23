import { makeStyles } from '@material-ui/core';

export default makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: '1.8rem 1.5rem',
		'& > img': {
			maxWidth: 280,
			minWidth: 120,
			borderRadius: '12px',
			padding: '0 1rem',
		},
	},
	cardActions: {
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
