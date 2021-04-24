import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Input, Button, Checkbox } from 'antd'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  firstName: string
  gender: GenderEnum
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export function FormDemo() {
  const { register, handleSubmit } = useForm<IFormInput>()
  // const onSubmit = (data: IFormInput) => console.log(data)

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      {/* <label>First Name</label>
      <input {...register('firstName')} />
      <label>Gender Selection</label>
      <select {...register('gender')}>
        {Object.keys(GenderEnum).map((key: string) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
      <input type="submit" /> */}
    </Form>
  )
}
