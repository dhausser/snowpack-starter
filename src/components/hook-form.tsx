import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { Form, Input, Checkbox, Radio, Select, Button } from 'antd'
import { IceCreamEnum, GenderEnum, FormValues } from '../utils/types'

interface FormProps {
  control: Control<FormValues>
  handleSubmit: any
  onSubmit: any
}

interface InputProps {
  name: keyof FormValues
  label: string
}

interface SelectProps extends InputProps {
  enumType: typeof IceCreamEnum | typeof GenderEnum
}

export function BasicForm({ control, handleSubmit, onSubmit }: FormProps) {
  const CustomInput = ({ label, name }: InputProps) => (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => <Input onChange={onChange} />}
      />
    </Form.Item>
  )

  const PasswordInput = ({ label, name }: InputProps) => (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Input.Password onChange={onChange} />
        )}
      />
    </Form.Item>
  )

  const CustomSelect = ({ label, name, enumType }: SelectProps) => (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Please choose your flavor!' }]}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Select
            onChange={onChange}
            options={Object.keys(enumType).map((key: string) => ({
              value: key,
              label: key,
            }))}
          />
        )}
      />
    </Form.Item>
  )

  const CustomRadio = ({ label, name, enumType }: SelectProps) => (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: true, message: 'Please choose your gender!' }]}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Radio.Group onChange={onChange}>
            {Object.keys(enumType).map((gender) => (
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
    <Form.Item
      valuePropName="checked"
      name={name}
      rules={[{ required: true, message: 'Please check the box!' }]}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Checkbox onChange={onChange}>Remember me</Checkbox>
        )}
      />
    </Form.Item>
  )

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
    >
      <CustomInput label="Username" name="username" />
      <PasswordInput label="Password" name="password" />
      <CustomSelect
        label="Flavor"
        name="iceCreamType"
        enumType={IceCreamEnum}
      />
      <CustomRadio label="Gender" name="gender" enumType={GenderEnum} />
      <CustomCheckbox name="remember" />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
