import { useState } from 'react';

export function useForm(initData) {
  const [formData, setForm] = useState(initData);

  const handleChange = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };
  return { formData, handleChange };
}
