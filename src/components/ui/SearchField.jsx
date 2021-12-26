import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import useStyles from './SearchField.styles';

function SearchField({ onChange, placeholder = 'Buscar...', wInput, wInputFocus = 50 }) {
	const classes = useStyles({ wInput: wInput || (placeholder.trim().length - 3), wInputFocus });
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
						input: classes.inputInput
					}}
					inputProps={{ 'aria-label': 'search' }}
					onChange={onChange}
				/>
			</div>
		</Box>
	);
}

export default SearchField;
