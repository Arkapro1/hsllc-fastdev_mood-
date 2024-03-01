import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadingStart, loadingStop, login, loadSessionFromLocal } from 'redux/action';
import API from 'api';
import Body from './Body';

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const userSession = localStorage.getItem('userSession')
      ? JSON.parse(localStorage.getItem('userSession'))
      : null;
    if (userSession) {
      navigate('/home');
    }
  }, []);

  const onLogin = () => {
    dispatch(loadingStart());
    API.auth
      .login(formData)
      .then((response) => {
        if (response) {
          response.token_expiry = new Date().getTime() + 23 * 60 * 60 * 1000;
          dispatch(login(response));
          navigate('/home');
        }
      })
      .finally(() => {
        dispatch(loadingStop());
      });
  };

  const onInputChange = ({ key, value }) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return (
    <>
      <Body _this={{ formData, onInputChange, onLogin }} />
    </>
  );
};

export default Index;
