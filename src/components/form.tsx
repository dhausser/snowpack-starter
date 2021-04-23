import React from 'react'
import { useForm } from 'react-hook-form'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

export function Form() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit = (data: IFormInput) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} />
      <label>Gender Selection</label>
      <select {...register('gender')}>
        {Object.keys(GenderEnum).map((key: string) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <input type="submit" />
    </form>
  )
}
