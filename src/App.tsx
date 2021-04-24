import React, { useState } from 'react'
import { FormDemo } from './components/form'
import { Modal, Button } from 'antd'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(true)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="container">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FormDemo />
      </Modal>
    </div>
  )
}

export default App
