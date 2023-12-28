import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../types/bookFormType';
import Error from './error';


export default function Input({
  label,
  register,
  required,
  errors,
  type = "text",
  options,
}: {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  errors: any;
  type?: string;
  options?: any;
}) {
  return (
    <div className="my-6">
      <div>
        <label htmlFor={label}>{label}:</label>
      </div>
      <input
        type={type}
        id={label}
        {...register(label, { required, ...options })}
      />
      <Error type={errors[label]?.type} />
    </div>
  );
}
