import React from 'react';
import LoginImage from 'assets/images/login.png';
import LogoImage from 'assets/images/logo.png';
import { Button, Form, Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import OtpInput from 'react-otp-input';
import infoImage from 'assets/images/info.png';
import BgImage from 'assets/images/bg.jpg';

const Section = ({ _this }) => {
  return (
    // <div className="sm:flex min-h-screen min-w-full bg-background-gray">
    <div
      className="sm:flex min-h-screen min-w-full pt-9 bg-fixed flex-col"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%'
      }}
    >
      {/* // <div className="flex flex-1 justify-center items-center">
      //   <img
      //     src={LoginImage}
      //     alt="health service llc login"
      //     className="sm:w-auto w-[300px] h-[300px] sm:h-[700px]"
      //   /> */}
      {/* // </div>
      // <div className="flex sm:w-[450px] w-full flex-col bg-white justify-center items-center p-6">
      //   <img src={LogoImage} alt="health service llc logo" className="w-2/4 h-auto" />
      //   <h1 className="m-7 text-2xl font-medium">Forgot Password</h1>
      //   <Form layout="vertical" className="w-full">
      //     <Form.Item className="uppercase font-medium text-form-label-gray" label="Email">
      //       <Input
      //         className="rounded-lg py-2"
      //         name="email"
      //         placeholder="Enter your email."
      //         type="text"
      //         value={_this.user_email}
      //         onChange={(e) => _this.handleEmailChange(e.target.value)}
      //       />
      //     </Form.Item>
      //     {_this.forgotPasswordData === null ? (
      //       <Form.Item className="form-group ">
      //         <Button
      //           onClick={_this.handleSendOTP}
      //           className="rounded-lg"
      //           type="primary"
      //           block
      //           disabled={_this.isFetching_forgotPasswordData}
      //         >
      //           {' '}
      //           {_this.isFetching_forgotPasswordData ? 'Sending Code' : 'Send Code'}
      //         </Button>
      //       </Form.Item>
      //     ) : null}

      //     {_this.forgotPasswordData && _this.forgotPasswordData.status === 0 ? (
      //       <div className="text-red-600 mb-2">{_this.forgotPasswordData.message}</div>
      //     ) : (
      //       ''
      //     )}
      //     {_this.verifyOTPData && _this.verifyOTPData.status === 0 ? (
      //       <div className="text-red-600 mb-2">{_this.verifyOTPData.message}</div>
      //     ) : (
      //       ''
      //     )}
      //     {_this.forgotPasswordData?.status === 1 && _this.forgotPasswordData?.userEmail ? (
      //       <div className="text-lime-600 mb-2">{_this.forgotPasswordData.message}</div>
      //     ) : (
      //       ''
      //     )}

      //     {_this.forgotPasswordData?.status === 1 && (
      //       <>
      //         <Form.Item className="uppercase font-medium text-form-label-gray" label="OTP">
      //           <OtpInput
      //             value={_this.otp}
      //             onChange={(e) => {
      //               _this.handleOtpChange(e);
      //             }}
      //             numInputs={6}
      //             containerStyle="flex flex-row w-full justify-around"
      //             inputStyle="ant-input rounded-lg py-2 px-2 text-black otp-input"
      //             disabled={!_this.forgotPasswordData || _this.forgotPasswordData.status === 0}
      //           />
      //         </Form.Item>
      //         <Form.Item
      //           className="uppercase font-medium text-form-label-gray"
      //           label="New Password"
      //         >
      //           <Input
      //             className="rounded-lg py-2"
      //             name="password"
      //             placeholder="Enter a new password."
      //             type="password"
      //             value={_this.password}
      //             onChange={(e) => _this.set_password(e.target.value)}
      //           />
      //         </Form.Item>
      //       </>
      //     )}

      //     <div className="form-group ">
      //       {_this.forgotPasswordData !== null ? (
      //         <>
      //           <Button
      //             className="rounded-lg"
      //             type="primary"
      //             block
      //             onClick={_this.handleVerifyOTP}
      //             disabled={_this.isVerifying_OTP}
      //           >
      //             {' '}
      //             {_this.isVerifying_OTP ? 'Verifying OTP' : 'Verify OTP'}
      //           </Button>
      //         </>
      //       ) : null}
      //     </div>
      //     <div className="flex justify-between mt-2 mb-4 text-primary font-medium">
      //       <Link to="/">Back To Login</Link>
      //     </div>
      //     <div></div>
      //   </Form>
      // </div> */}
      <div className="sm:w-[420px] md:w-[700px] lg:w-[900px] h-full py-10 mx-auto mt-0 mb-5 flex items-center flex-col bg-[#ffffff1a] rounded-lg">
        <img className="sm:w-[200px] md:w-[300px]" src={LogoImage} alt="logo" />
        <span className="text-white text-2xl mt-2 font-extralight">Forgot Password</span>
        <br />
        <div className="sm:w-[400px] lg:w-[600px]">
          <label for="email" className="block mb-2 text-sm font-medium text-white">
            Email:
          </label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email"
            className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={_this.user_email}
            onChange={(e) => _this.handleEmailChange(e.target.value)}
          />
          <br />
          <div className="w-full flex flex-row justify-between">
            <div className="flex flex-col h-[100px] justify-between">
              {_this.forgotPasswordData?.status !== 1 && <Link className="text-cyan-500 font-normal " to="/">
                Back To Login
                </Link>
              }
            </div>
            <div className="flex flex-col h-[100px] justify-between">
              {_this.forgotPasswordData === null ? (
                <Form.Item className="form-group ">
                  <Button
                    onClick={_this.handleSendOTP}
                    className="rounded-lg"
                    type="primary"
                    block
                    disabled={_this.isFetching_forgotPasswordData}
                  >
                    {' '}
                    {_this.isFetching_forgotPasswordData ? 'Sending Code' : 'Send Code'}
                  </Button>
                </Form.Item>
              ) : null}
              {_this.forgotPasswordData && _this.forgotPasswordData.status === 0 ? (
                <div className="text-red-600 mb-2">{_this.forgotPasswordData.message}</div>
              ) : (
                ''
              )}
              {_this.verifyOTPData && _this.verifyOTPData.status === 0 ? (
                <div className="text-red-600 mb-2">{_this.verifyOTPData.message}</div>
              ) : (
                ''
              )}
              {_this.forgotPasswordData?.status === 1 && _this.forgotPasswordData?.userEmail ? (
                <div className="text-lime-600 mb-2">{_this.forgotPasswordData.message}</div>
              ) : (
                ''
              )}

              {_this.forgotPasswordData?.status === 1 && (
                <div className='h-[300px]'>
                  <div className="uppercase font-medium text-white">
                    <p className='text-white font-small'>OTP</p>
                    <br />
                    <OtpInput
                      value={_this.otp}
                      onChange={(e) => {
                        _this.handleOtpChange(e);
                      }}
                      numInputs={6}
                      containerStyle="flex flex-row w-full justify-around bg-transparent"
                      inputStyle="ant-input rounded-lg py-2 px-2 text-white otp-input bg-transparent"
                      disabled={!_this.forgotPasswordData || _this.forgotPasswordData.status === 0}
                    />
                  </div>
                  <br />
                  <div className="uppercase font-medium text-white">
                    <p className="uppercase font-small text-white">New Password</p>
                    <br />
                    <input
                      className="bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="password"
                      placeholder="Enter a new password."
                      type="password"
                      value={_this.password}
                      onChange={(e) => _this.set_password(e.target.value)}
                    />
                  </div>
                </div>
              )}
              <br />
              <div className="form-group ">
                {_this.forgotPasswordData !== null && _this.forgotPasswordData?.status === 1 ? (
                  <div>
                    <Button
                      className="rounded-lg"
                      type="primary"
                      block
                      onClick={_this.handleVerifyOTP}
                      disabled={_this.isVerifying_OTP}
                    >
                      {' '}
                      {_this.isVerifying_OTP ? 'Verifying OTP' : 'Verify OTP'}
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[410px] md:w-[750px] lg:w-[950px] mx-auto mb-7">
        <img className="w-full h-auto" src={infoImage} alt="details" />
      </div>
    </div>
  );
};

export default Section;
