import React from 'react'
import { Controller, Control } from 'react-hook-form'
import { Form, Input, Checkbox, Radio, Select } from 'antd'
import { IceCreamEnum, GenderEnum, FormValues } from '../utils/types'

interface FormProps {
  control: Control<FormValues>
}

export function BasicForm({ control }: FormProps) {
  return (
    <Form name="basic" initialValues={{ remember: true }}>
      <Form.Item label="Username">
        <Controller
          name="username"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <Form.Item label="Password">
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input.Password {...field} />}
        />
      </Form.Item>

      <Form.Item label="Flavor">
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={Object.keys(IceCreamEnum).map((key: string) => ({
                value: key,
                label: key,
              }))}
            />
          )}
        />
      </Form.Item>

      <Form.Item label="Gender">
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Radio.Group {...field}>
              {Object.keys(GenderEnum).map((gender) => (
                <Radio key={gender} value={gender}>
                  {gender}
                </Radio>
              ))}
            </Radio.Group>
          )}
        />
      </Form.Item>

      <Form.Item valuePropName="checked">
        <Controller
          name="remember"
          control={control}
          render={({ field }) => <Checkbox {...field}>Remember me</Checkbox>}
        />
      </Form.Item>
    </Form>
  )
}
