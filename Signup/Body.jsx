import React from 'react';
import LoginImage from 'assets/images/login.png';
import LogoImage from 'assets/images/logo.png';
import { Button, Form, Input, InputNumber, Select, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
const { Option } = Select;
const Section = ({ _this }) => {
  return (
    <div className="sm:flex min-h-screen min-w-full bg-background-gray">
      <div className="flex flex-1 justify-center items-center">
        <img
          src={LoginImage}
          alt="health service llc login"
          className="sm:w-auto w-[300px] h-[300px] sm:h-[700px]"
        />
      </div>
      <div className="flex sm:w-[450px] w-full flex-col bg-white justify-center items-center p-6">
        <img src={LogoImage} alt="health service llc logo" className="w-2/4 h-auto" />
        <h1 className="m-7 text-2xl font-medium">Sign Up</h1>
        <Form layout="vertical" className="w-full">
          <Form.Item className="uppercase font-medium text-form-label-gray" label="Name">
            <Input
              className="rounded-lg py-2"
              name="name"
              placeholder="Enter your name."
              type="text"
              value={_this.formData?.empName}
              onChange={(e) => _this.onInputChange({ key: 'empName', value: e.target.value })}
            />
          </Form.Item>
          <Form.Item className="uppercase font-medium text-form-label-gray" label="Email">
            <Input
              className="rounded-lg py-2"
              name="email"
              placeholder="Enter your email."
              type="email"
              value={_this.formData?.empEmail}
              onChange={(e) => _this.onInputChange({ key: 'empEmail', value: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            className="uppercase font-medium text-form-label-gray"
            label={
              <Tooltip
                title="This is your Paycom 4 digit emp ID"
                placement="topLeft"
                color="blue"
                className="cursor-pointer"
              >
                Paycom 4 digit user ID
              </Tooltip>
            }
          >
            <Input
              className="rounded-lg py-2"
              name="payload-employee-id"
              type="text"
              placeholder="Enter 4 digit Paycom User ID."
              value={_this.formData?.empId}
              onChange={(e) => _this.onInputChange({ key: 'empId', value: e.target.value })}
            />
          </Form.Item>

          <Form.Item className="uppercase font-medium text-form-label-gray" label="Employee Type">
            <Select
              className="rounded-lg"
              showSearch
              placeholder="Select Emp Type."
              optionFilterProp="children"
              value={_this.formData?.empType}
              onChange={(e) => _this.onInputChange({ key: 'empType', value: e })}
              filterOption={(input, option) =>
                (option && option.children).toString().toLowerCase().includes(input.toLowerCase())
              }
            >
              <Option value="End User">Consultant</Option>
              <Option value="PCC">PCC</Option>
              <Option value="Front Desk">Home Office Employee</Option>
            </Select>
          </Form.Item>
          <Form.Item className="uppercase font-medium text-form-label-gray" label="Password">
            <Input
              className="rounded-lg py-2"
              name="password"
              placeholder="Enter Password."
              type="password"
              value={_this.formData?.empPassword}
              onChange={(e) => _this.onInputChange({ key: 'empPassword', value: e.target.value })}
            />
          </Form.Item>
          <Form.Item
            className="uppercase font-medium text-form-label-gray"
            label="Confirm Password"
          >
            <Input
              className="rounded-lg py-2"
              name="confirm-password"
              placeholder="Confirm Password."
              type="password"
              value={_this.formData?.empConfirmPassword}
              onChange={(e) =>
                _this.onInputChange({ key: 'empConfirmPassword', value: e.target.value })
              }
            />
          </Form.Item>
          <div className="flex justify-between mt-2 mb-4 text-primary font-medium">
            <Link to="/">Back To Login</Link>
          </div>
          <div>
            <Button onClick={_this.onSignup} className="rounded-lg" type="primary" block>
              SIGNUP
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Section;
