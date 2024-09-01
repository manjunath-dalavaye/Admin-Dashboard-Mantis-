import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Typography, Alert, Space } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss';

const { Title, Text } = Typography;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert message

  const handleFinish = (values: any) => {
    console.log('Form values:', values);
    
    // Retrieve user data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userData') || '{}');

    // Validate login
    const isValid = (
      values.email === storedData.email &&
      values.password === storedData.password
    );

    if (isValid) {
      setAlertMessage('Login successful! Welcome to the dashboard');
      setTimeout(() => {
        navigate('/DashboardLayout');   // Redirect to a different page
      }, 2000);    // Delay for alert to show
    } else {
      setAlertMessage('Invalid credentials');
      setTimeout(()=>{
        setAlertMessage('');
      },1000);
    }
  };

  return (
    <div className="container">
      {alertMessage && (
        <div className="alert-container">
          <Alert
            message={
              <Space>
                {alertMessage}
                <SmileOutlined />
              </Space>
            }
            type={alertMessage.includes('Invalid') ? 'error' : 'success'}
            showIcon
            className="alert-message"
          />
        </div>
      )}

      <Form
        layout="vertical"
        onFinish={handleFinish}
        className="login-form"
      >
        <Title level={2}>Login</Title>
        <Text>
          Don't have an account? <a href="/signup" className="link">Sign up</a>
        </Text>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email address' }]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item name="keepSignedIn" valuePropName="checked" noStyle>
          <Checkbox>
            Keep me signed in
          </Checkbox>
        </Form.Item>
        <a href="#" className="forgot-password">Forgot Password?</a>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn">
            Login
          </Button>
        </Form.Item>

        <div className="login-with">
          <p>Login with</p>
          <div className="social-login">
            <Button className="google-btn">
              <a href="https://www.google.co.in/">Google</a>
            </Button>
            <Button className="twitter-btn">
              <a href="https://www.twitter.com/login">Twitter</a>
            </Button>
            <Button className="facebook-btn">
              <a href="https://www.facebook.com/login">Facebook</a>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
