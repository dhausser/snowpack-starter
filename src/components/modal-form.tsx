import React from 'react'
import { useForm } from 'react-hook-form'
import { Modal, Button } from 'antd'
import { BasicForm } from './hook-form'
import type { IceCreamEnum, GenderEnum } from '../utils/types'

interface IFormInput {
  username: string
  password: string
  iceCreamType: IceCreamEnum
  gender: GenderEnum
  remember: boolean
}

export function ModalForm() {
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
        <BasicForm control={control} handleSubmit={handleSubmit} />
      </Modal>
    </div>
  )
}
