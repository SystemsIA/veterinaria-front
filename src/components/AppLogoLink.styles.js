import { makeStyles } from '@material-ui/core';
import * as colors from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	sizeLogoImg: (props) => ({
		maxWidth: props.small ? 45 : 54,
		maxHeight: props.small ? 45 : 48,
		display: 'inline-block',
		padding: theme.spacing(1),
	}),
	navLogo: {
		color: colors.purple[500],
		cursor: 'pointer',
		textDecoration: 'none',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
}));
