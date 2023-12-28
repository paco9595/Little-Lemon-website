import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "../types/bookFormType";
import Error from "./error";

export default function Select({
  label,
  register,
  errors,
}: {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  errors: any;
  type?: string;
  options?: any;
}) {
  return (
    <div className="my-6">
      <div>
        <label htmlFor={label}>{label}:</label>
      </div>
      <select id={label} {...register(label)} required value="No Important">
        <option value="No Important">No Important</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <Error type={errors[label]?.type} />
    </div>
  );
}
