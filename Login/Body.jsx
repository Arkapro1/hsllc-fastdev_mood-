import React from 'react';
import LoginImage from 'assets/images/login.png';
import LogoImage from 'assets/images/logo.png';
import infoImage from 'assets/images/info.png';
import BgImage from 'assets/images/bg.jpg';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import { Footer } from 'components';
import { StaticHeader } from 'components';

const Section = ({ _this }) => {
  return (
    <>
      {/* <StaticHeader /> */}
      <div
        className="sm:flex min-h-screen min-w-full pt-9 bg-fixed flex-col"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%'
        }}
      >
        {/* <h1>Hello2.0</h1> */}
        {/* <div className="flex flex-1 justify-center items-center">
          <img
            src={LoginImage}
            alt="health service llc login"
            className="sm:w-auto w-[300px] h-[300px] sm:h-[700px]"
          />
        </div>
        <div className="flex sm:w-[450px] w-full flex-col bg-white justify-center items-center p-6">
          <img src={LogoImage} alt="health service llc logo" className="w-2/4 h-auto" />
          <h1 className="m-7 text-2xl font-medium">Sign In To Your Account</h1>
          <Form layout="vertical" className="w-full">
            <Form.Item
              className="uppercase font-medium text-form-label-gray"
              label="Email Or Username"
            >
              <Input
                className="rounded-lg py-2"
                name="email"
                placeholder="Enter your email."
                type="email"
                value={_this.formData?.email}
                onChange={(e) => _this.onInputChange({ key: 'username', value: e.target.value })}
              />
            </Form.Item>
            <Form.Item className="uppercase font-medium text-form-label-gray" label="Password">
              <Input
                className="rounded-lg py-2"
                name="password"
                placeholder="Enter your password."
                type="password"
                value={_this.formData?.password}
                onPressEnter={() => _this.onLogin()}
                onChange={(e) => _this.onInputChange({ key: 'password', value: e.target.value })}
              />
            </Form.Item>
            <div className="flex justify-between mt-2 mb-4 text-primary font-medium">
              <Link to="/signup">Signup</Link>
              <Link to="/forgot-password">Forgot Password ?</Link>
            </div>
            <div>
              <Button onClick={_this.onLogin} className="rounded-lg" type="primary" block>
                LOGIN
              </Button>
            </div>
          </Form>
        </div> */}
        <div className="sm:w-[420px] md:w-[700px] lg:w-[900px] h-auto py-10 mx-auto mt-0 mb-5 flex justify-center items-center flex-col bg-[#ffffff1a] rounded-lg">
          <img className="sm:w-[200px] md:w-[300px]" src={LogoImage} alt="logo" />
          <span className="text-white text-2xl mt-2 font-extralight">Login to your account</span>
          <br />
          <div className="sm:w-[400px] lg:w-[600px]">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your E-mail:
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={_this.formData?.email}
              onChange={(e) => _this.onInputChange({ key: 'username', value: e.target.value })}
            />
            <br />
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Your Password:
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={_this.formData?.password}
              onPressEnter={() => _this.onLogin()}
              onChange={(e) => _this.onInputChange({ key: 'password', value: e.target.value })}
              required
            />
            <br />
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col h-[100px] justify-between">
                <div className="mt-4">
                  <input
                    id="rememberme"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-cyan-600 bg-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
                  />
                  <label htmlFor="rememberme" className="ms-4 text-m font-medium text-gray-400">
                    Remember Me
                  </label>
                </div>
                <Link className="text-cyan-500 font-normal " to="/signup">
                  Signup
                </Link>
              </div>
              <div className="flex flex-col h-[100px] justify-between">
                <button
                  type="button"
                  className="text-black bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-lg px-16 py-2.5 mb-2"
                  onClick={_this.onLogin}
                >
                  Login
                </button>
                <Link
                  className="text-cyan-500 justify-self-end text-right font-normal m-0"
                  to="/forgot-password"
                >
                  Forgot Password
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[410px] md:w-[750px] lg:w-[950px] mx-auto mb-7">
          <img className="w-full h-auto" src={infoImage} alt="details" />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Section;
