import React from 'react'
import { Modal, Button, Form } from 'antd'
import { useForm } from 'react-hook-form'
import { BasicForm } from './hook-form'
import type { FormValues } from '../utils/types'

export function ModalForm(): React.ReactElement {
  const [visible, setVisible] = React.useState(true)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const { control, handleSubmit } = useForm<FormValues>()
  const [form] = Form.useForm()

  const showModal = () => {
    setVisible(true)
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
    form.submit()
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
      <Button form="myForm" type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleSubmit(onSubmit)}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <BasicForm
          form={form}
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </Modal>
    </div>
  )
}
