import { Box, InputBase } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchField.styles';

function BuscarField({ onChange, placeholder = 'Buscar...' }) {
	const classes = useStyles();
	return (
		<Box display='flex'>
			<div className={classes.search}>
				<div className={classes.searchIcon}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder={placeholder}
					classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
					}}
					inputProps={{ 'aria-label': 'search' }}
					onChange={onChange}
				/>
			</div>
		</Box>
	);
}

export default BuscarField;
