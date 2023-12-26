import { useState } from "react";
import { getDays, getHours, getLocation } from "../services/bookService";
import Tag from "./tag";
import moment from "moment";
import Input from "./input";
import {SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
  "Full Name": string
  'Mail': string
  'Phone': string
}

export default function Book() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const [values, setValues] = useState({ location: "", day: "", hour: "" });
  
  return (
    <div className='mt-3'>
      <div>Loction</div>
      <div className=" flex">
        {getLocation().map((location, id) => (
          <Tag
            key={id}
            label={location}
            isActive={values.location === location}
            clickHandler={(label) =>
              setValues({ location: label, day: "", hour: "" })
            }
          />
        ))}
      </div>
      {values.location ? (
        <>
          <div>days</div>
          <div className="flex flex-wrap">
            {getDays(values.location).map((day, id) => (
              <Tag
                key={id}
                label={moment(day).format("DD dddd")}
                isActive={values.day === moment(day).format("DD dddd")}
                clickHandler={(label) =>
                  setValues((old) => ({ ...old, day: label, hour: "" }))
                }
              />
            ))}
          </div>
        </>
      ) : null}
      {values.day ? (
        <>
          <div>hours</div>
          <div className="flex flex-wrap">
            {getHours(values.location, values.day).map((hour, id) => (
              <Tag
                key={id}
                label={hour}
                isActive={values.hour === hour}
                clickHandler={(label) =>
                  setValues((old) => ({ ...old, hour: label }))
                }
              />
            ))}
          </div>
        </>
      ) : null}
      {values.hour ? (
        <form className="w-4/5 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input label="Full Name" {...register('Full Name')} register={register} required />
          </div>
          <div>
            <Input label="Phone" {...register('Phone')} register={register} required/>
          </div>
          <div>
            <Input label='Mail' {...register('Mail')} register={register} required/>
          </div>
          <button className='mt-10 bg-[#495E57] px-3 py-2 rounded-xl'>submit</button>
        </form>
      ) : null}
    </div>
  );
}
