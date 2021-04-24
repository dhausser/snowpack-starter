import React, { useState } from 'react'
import { Button, Modal, Form, Input, Radio, Select } from 'antd'
import { IceCreamEnum, GenderEnum } from '../utils/types'

interface Values {
  title: string
  description: string
  modifier: string
  iceCreamType: IceCreamEnum
  gender: GenderEnum
}

interface CollectionCreateFormProps {
  visible: boolean
  onCreate: (values: Values) => void
  onCancel: () => void
}

function CollectionCreateForm({
  visible,
  onCreate,
  onCancel,
}: CollectionCreateFormProps) {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="iceCreamType"
          label="Flavor"
          rules={[{ required: true, message: 'Please choose your flavor!' }]}
        >
          <Select
            options={Object.keys(IceCreamEnum).map((key: string) => ({
              value: key,
              label: key,
            }))}
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: 'Please choose your gender!' }]}
        >
          <Radio.Group>
            {Object.keys(GenderEnum).map((gender) => (
              <Radio key={gender} value={gender}>
                {gender}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export function Collection(): React.ReactElement {
  const [visible, setVisible] = useState(false)

  const onCreate = (values: Values) => {
    console.log('Received values of form: ', values)
    setVisible(false)
  }

  return (
    <div className="container">
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        New Collection
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}
