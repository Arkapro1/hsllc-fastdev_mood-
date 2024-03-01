import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Body from './Body';
import validator from 'validator';
import API from 'api';
import { toast } from 'react-toastify';

const Index = () => {
  const navigate = useNavigate();
  const [user_email, setUser_email] = useState('');
  const [password, set_password] = useState('');
  const [otp, setOtp] = useState('');
  const [validationMessage, setValidationMessage] = useState('Enter Email');
  const [forgotPasswordData, setForgotPasswordData] = useState(null);
  const [isFetching_forgotPasswordData, setIsFetching_forgotPasswordData] = useState(false);
  const [verifyOTPData, setVerifyOTPData] = useState('');
  const [isVerifying_OTP, setIsVerifying_OTP] = useState(false);
  const handleEmailChange = (data) => {
    setUser_email(data);
  };
  const handleOtpChange = (data) => {
    setOtp(data);
  };
  const handleValidation = () => {
    if (!user_email) {
      return 'Please Fill Email';
    }
    if (!validator.isEmail(user_email)) {
      return 'Please Fill Valid Email';
    }
    if (forgotPasswordData !== null) {
      if (otp || otp.length < 6) {
        return 'Please Fill Valid OTP';
      }
    }
    return '';
  };

  const handleSendOTP = () => {
    setIsFetching_forgotPasswordData(true);
    const valid = handleValidation();
    if (valid == '') {
      API.auth.sendOTP({ user_email: user_email }).then((response) => {
        setForgotPasswordData(response);
        setIsFetching_forgotPasswordData(false);
      });
    } else {
      toast.error(valid);
    }
  };

  const handleVerifyOTP = () => {
    setIsVerifying_OTP(true);
    API.auth.verifyOTP({ email: user_email, otp: otp, password: password }).then((response) => {
      if (response) {
        toast.success('Password changed successfully.');
        navigate('/');
      }
      setIsVerifying_OTP(false);
    });
  };
  return (
    <>
      <Body
        _this={{
          user_email,
          handleEmailChange,
          otp,
          handleOtpChange,
          validationMessage,
          handleValidation,
          handleVerifyOTP,
          handleSendOTP,
          forgotPasswordData,
          setForgotPasswordData,
          isFetching_forgotPasswordData,
          setIsFetching_forgotPasswordData,
          verifyOTPData,
          setIsVerifying_OTP,
          setVerifyOTPData,
          isVerifying_OTP,
          password,
          set_password
        }}
      />
    </>
  );
};
export default Index;
