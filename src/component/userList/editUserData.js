import React, { useEffect } from "react"
import { Modal, Form, Input } from "antd"

const formItemLayout = {
    labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const EditUserData = ({ visible, onCreate, onCancel, selectedUser }) => {
    const [form] = Form.useForm()
    const { name, email, phone, website, id } = selectedUser
  useEffect(() => {
    form.setFieldsValue(selectedUser)
  })
  return (
    <>
      <Modal
        visible={visible}
        title='Basic Modal'
        okText='Ok'
        cancelText='Cancel'
        width={500}
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              values.id = id
              form.resetFields()
              onCreate(values)
            })
            .catch((info) => {
              console.log("Validate Failed:", info)
            })
        }}>
        <Form
          {...formItemLayout}
          form={form}
          layout="Horizontal"
          name='form_in_modal'
          initialValues={{ name, email, phone, website }}>
          <Form.Item
            name='name'
            label='Name'
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              {
                type: "email",
                required: true,
                message: "Invalid email",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='phone'
            label='Phone'
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name='website'
            label='Website'
            rules={[
              {
                required: true,
                message: "This field is required",
              },
            ]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EditUserData
