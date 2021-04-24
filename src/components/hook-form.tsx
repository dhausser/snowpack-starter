import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { Form, Input, Checkbox, Radio, Select } from 'antd'
import { IceCreamEnum, GenderEnum, FormValues } from '../utils/types'

interface FormProps {
  control: Control<FormValues>
}

interface InputProps {
  name: keyof FormValues
  label: string
}

export function BasicForm({ control }: FormProps) {
  const CustomInput = ({ label, name }: InputProps) => (
    <Form.Item label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref } }) => <Input ref={ref} />}
      />
    </Form.Item>
  )

  const PasswordInput = ({ label, name }: InputProps) => (
    <Form.Item label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref } }) => <Input.Password ref={ref} />}
      />
    </Form.Item>
  )

  const CustomSelect = ({ label, name }: InputProps) => (
    <Form.Item label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref } }) => (
          <Select
            ref={ref}
            options={Object.keys(IceCreamEnum).map((key: string) => ({
              value: key,
              label: key,
            }))}
          />
        )}
      />
    </Form.Item>
  )

  const CustomRadio = ({ label, name }: InputProps) => (
    <Form.Item label={label}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref } }) => (
          <Radio.Group ref={ref}>
            {Object.keys(GenderEnum).map((gender) => (
              <Radio key={gender} value={gender}>
                {gender}
              </Radio>
            ))}
          </Radio.Group>
        )}
      />
    </Form.Item>
  )

  const CustomCheckbox = ({ name }: Omit<InputProps, 'label'>) => (
    <Form.Item valuePropName="checked">
      <Controller
        name={name}
        control={control}
        render={({ field: { ref } }) => (
          <Checkbox ref={ref}>Remember me</Checkbox>
        )}
      />
    </Form.Item>
  )

  return (
    <Form name="basic" initialValues={{ remember: true }}>
      <CustomInput label="Username" name="username" />
      <PasswordInput label="Password" name="password" />
      <CustomSelect label="Flavor" name="iceCreamType" />
      <CustomRadio label="Gender" name="gender" />
      <CustomCheckbox name="remember" />
    </Form>
  )
}
