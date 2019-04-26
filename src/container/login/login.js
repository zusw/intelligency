import React, { Component, Suspense } from 'react';
import { Input, Button, Form } from 'antd';
import { gotoPath } from '../../utils/history';

class Login extends Component {

  onSubmit = () => {
    const { form: { validateFieldsAndScroll } } = this.props;
    validateFieldsAndScroll((err, values) => {
      if(!err) {
        sessionStorage.setItem("token", 'true')
        gotoPath('/homepage')
      }
    }) 
  }

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return(
      <Suspense>
        <div
          className="login"
        >
          <div className="loginForm">
            <Form.Item label="用户名">
              {
                getFieldDecorator('userName', {
                  rules: [
                    {required: true, message: '用户名不能为空'},
                    {pattern: /^[q](\D+)?1$/, message: '您输的用户名不符合规则'}
                  ]
                })(
                  <Input placeholder="请输入用户名"/>
                )
              }
            </Form.Item>
            <Form.Item label="密码">
              {
                getFieldDecorator('password', {
                  rules: [
                    {required: true, message: '请输入密码'},
                    {pattern: /^5(\d+)?5$/, message: '您输的密码不符合规则'}
                  ]
                })(
                  <Input placeholder="请输入密码" />
                )
              }
            </Form.Item>
            <div className="btns">
              <Button onClick={this.onSubmit} type="primary">登录</Button>
            </div>
          </div>
          
        </div>
      </Suspense>
    )
  }
}
export default Form.create()(Login);
