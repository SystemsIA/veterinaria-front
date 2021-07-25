import TextField from '@material-ui/core/TextField';
import Autocomplete, {
	createFilterOptions,
} from '@material-ui/lab/Autocomplete';
const filter = createFilterOptions();

function AutocompleteInput({
	field,
	data,
	value,
	setValue,
	label = 'Buscar...',
}) {
	return (
		<Autocomplete
			value={value}
			onChange={(event, newValue) => {
				if (typeof newValue === 'string') {
					setValue({
						field: newValue,
					});
				} else if (newValue && newValue.inputValue) {
					setValue({
						field: newValue.inputValue,
					});
				} else {
					setValue(newValue);
				}
			}}
			filterOptions={(options, params) => {
				const filtered = filter(options, params);

				if (params.inputValue !== '') {
					filtered.push({
						inputValue: params.inputValue,
						field: `No se encontro "${params.inputValue}"`,
					});
				}

				return filtered;
			}}
			selectOnFocus
			clearOnBlur
			handleHomeEndKeys
			id='free-solo-with-text-demo'
			options={data}
			getOptionLabel={(option) => {
				if (typeof option === 'string') {
					return option;
				}
				if (option.inputValue) {
					return option.inputValue;
				}

				return option[field];
			}}
			renderOption={(option) => option[field]}
			style={{ width: 300 }}
			freeSolo
			renderInput={(params) => (
				<TextField
					{...params}
					color='secondary'
					label={label}
					variant='outlined'
				/>
			)}
		/>
	);
}

export default AutocompleteInput;
