import React from 'react'
import { useForm } from 'react-hook-form'
import { Modal, Button } from 'antd'
import { BasicForm } from './hook-form'
import type { FormValues } from '../utils/types'

export function ModalForm() {
  const [visible, setVisible] = React.useState(true)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const { control, handleSubmit } = useForm<FormValues>()

  const showModal = () => {
    setVisible(true)
  }

  const onSubmit = (data: FormValues) => {
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
        <BasicForm control={control} />
      </Modal>
    </div>
  )
}
