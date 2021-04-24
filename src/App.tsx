import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Modal, Form, Input, Button, Checkbox, Radio, Select } from 'antd'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

enum IceCreamEnum {
  chocolate = 'Chocolate',
  strawberry = 'Strawberry',
  vanilla = 'Vanilla',
}

interface IFormInput {
  username: string
  password: string
  iceCreamType: IceCreamEnum
  gender: GenderEnum
  remember: boolean
}

function App() {
  const [visible, setVisible] = React.useState(true)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const { control, handleSubmit } = useForm<IFormInput>()

  const showModal = () => {
    setVisible(true)
  }

  const onSubmit = (data: IFormInput) => {
    console.log(data)
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }

  return (
    <div className="container">
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
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
              render={({ field }) => (
                <Checkbox {...field}>Remember me</Checkbox>
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App
