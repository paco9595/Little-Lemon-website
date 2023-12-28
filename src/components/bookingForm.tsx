import { useForm } from "react-hook-form";
import Input from './input';
import { IFormValues } from '../types/bookFormType';
import Select from './select';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const navigate = useNavigate();

  const onSubmit = (data: IFormValues) => {
    navigate("/confirmed-booking", {state: data, replace: true  })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
      <div className="mx-auto">
        <Input label="Full Name" register={register} errors={errors} required />

        <Input
          label="Mail"
          register={register}
          errors={errors}
          required
          options={{ pattern: /^[^@]+@[^@]+\.[^@]+$/ }}
        />
        <Input
          label="Number of Guest"
          errors={errors}
          register={register}
          required
          options={{ min: 1 }}
        />
      </div>
      <div className="mx-auto">
        <Input
          label="Date"
          errors={errors}
          register={register}
          required
          type="date"
          options={{ min: new Date() }}
        />
        <Input
          label="Hour"
          errors={errors}
          register={register}
          required
          type="time"
        />
        <Select errors={errors} register={register} label='Occasion' />
      </div>
      <div className="mx-auto col-span-2">
        <button
          type="submit"
          className="py-2 px-4 rounded-lg mt-3 bg-primary-yellow"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BookingForm