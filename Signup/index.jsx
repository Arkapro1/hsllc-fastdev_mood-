import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadingStart, loadingStop, login, loadSessionFromLocal, signup } from 'redux/action';
import API from 'api';
import Body from './Body';

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const onSignup = () => {
    if (formData.empPassword != formData.empConfirmPassword) toast.error('Password did not match');
    else {
      dispatch(loadingStart());
      API.auth
        .signup(formData)
        .then((response) => {
          if (response.status) {
            //dispatch(signup(response.data));
            toast.success(response.message);
            navigate('/');
          } else {
            toast.error(response.message);
          }
        })
        .finally(() => {
          dispatch(loadingStop());
        });
    }
  };

  const onInputChange = ({ key, value }) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  return (
    <>
      <Body _this={{ formData, onInputChange, onSignup }} />
    </>
  );
};

export default Index;
