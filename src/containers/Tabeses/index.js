import React from 'react'
import { Form, Input, Icon, Button, Select, Upload } from 'antd'

let id = 0
const { Option } = Select
class DynamicFieldSet extends React.Component {
  remove = k => {
    const { form } = this.props
    const keys = form.getFieldValue('keys')
    if (keys.length === 1) {
      return
    }
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    })
  };

  handleAdd = () => {
    const { form } = this.props
    const keys = form.getFieldValue('keys')
    console.log(keys, 'keys')
    const nextKeys = keys.concat(id++)
    form.setFieldsValue({
      keys: nextKeys
    })
  };

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values, 'values')
        const { keys, names } = values
        console.log('Received values of form: ', values)
        console.log('Merged values:', keys.map(key => names[key]))
      }
    })
  };

  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    }
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 }
      }
    }
    getFieldDecorator('keys', { initialValue: [] })
    const keys = getFieldValue('keys')
    const formItems = keys.map((k, index) => (
      <div key={k} className='items'>

        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label='功能名称'
          required={false}
        >
          {getFieldDecorator(`names[${k}].name1`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                required: true,
                whitespace: true,
                message: "Please input passenger's name or delete this field."
              }
            ]
          })(<Input placeholder='passenger name' style={{ width: '60%', marginRight: 8 }} />)}

        </Form.Item>
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label='跳转类型'
          required={false}
        >
          {getFieldDecorator(`names[${k}].name2`)(
            <Select placeholder='Please select favourite colors'>
              <Option value='red'>Red</Option>
              <Option value='green'>Green</Option>
              <Option value='blue'>Blue</Option>
            </Select>
          )}

        </Form.Item>
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label='跳转链接'
          required={false}
        >
          {getFieldDecorator(`names[${k}].name3`)(<Input placeholder='passenger name' style={{ width: '60%', marginRight: 8 }} />)}

        </Form.Item>
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label='图片'
          required={false}
        >
          {getFieldDecorator(`names[${k}].name4`)(
            <Upload name='logo' action='/upload.do' listType='picture'>
              <Button>
                <Icon type='upload' /> Click to upload
              </Button>
            </Upload>
          )}

        </Form.Item>
        <Form.Item
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label='不投放连锁'
          required={false}
        >
          {getFieldDecorator(`names[${k}].name4`)(
            <Select mode='multiple' placeholder='Please select favourite colors'>
              <Option value='red'>Red</Option>
              <Option value='green'>Green</Option>
              <Option value='blue'>Blue</Option>
            </Select>
          )}

        </Form.Item>
        {keys.length > 1 ? (
          <Icon
            className='dynamic-delete-button'
            type='minus-circle-o'
            onClick={() => this.remove(k)}
          />
        ) : null}
      </div>
    ))
    return (
      <Form onSubmit={this.handleSubmit}>
        {formItems}
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type='dashed' onClick={this.handleAdd} style={{ width: '60%' }}>
            <Icon type='plus' /> 增加功能
          </Button>
        </Form.Item>
        <Form.Item {...formItemLayoutWithOutLabel}>
          <Button type='primary' htmlType='submit'>
            保存
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const WrappedDynamicFieldSet = Form.create({ name: 'dynamic_form_item' })(DynamicFieldSet)
export default WrappedDynamicFieldSet
