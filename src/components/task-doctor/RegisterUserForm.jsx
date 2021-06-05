import { TextField } from '@material-ui/core';
import { useForm } from '../../hooks/useForm';

function RegisterUserForm() {
  const { formData, handleChange } = useForm();
  console.log(formData);
  return (
    <form onChange={handleChange}>
      <TextField
        id="name-user"
        name="name"
        label="Nombre del cliente"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="dni-user"
        name="dni"
        label="DNI del cliente"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="address-user"
        name="address"
        label="Dirección del cliente"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="phone-user"
        name="phone"
        label="Teléfono del cliente"
        variant="outlined"
        color="secondary"
      />
    </form>
  );
}

export default RegisterUserForm;
