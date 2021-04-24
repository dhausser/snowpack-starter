import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Modal, Form, Input, Button, Checkbox, Radio } from 'antd'

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

interface IFormInput {
  username: string
  password: string
  remember: boolean
  gender: GenderEnum
}

function App() {
  const [visible, setVisible] = React.useState(true)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const { register, control, handleSubmit } = useForm<IFormInput>()

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

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
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
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit(onFinish)}
          onFinishFailed={onFinishFailed}
        >
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Item label="Username" {...field}>
                <Input />
              </Form.Item>
            )}
          />

          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Form.Item label="Password" {...field}>
                <Input.Password />
              </Form.Item>
            )}
          />

          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Form.Item label="Gender" {...field}>
                <Radio.Group>
                  {Object.keys(GenderEnum).map((gender) => (
                    <Radio key={gender} value={gender}>
                      {gender}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            )}
          />

          <Controller
            name="remember"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Form.Item valuePropName="checked" {...field}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            )}
          />
        </Form>
        {/* <DevTool control={control} /> */}
      </Modal>
    </div>
  )
}

export default App
