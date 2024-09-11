import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const API_URL = 'https://moneyfulpublicpolicy.co.kr';
const LOCAL_API_URL = 'https://melodious-crimson-pea.glitch.me';

async function getPosts() {
  const res = await axios.get(API_URL);
  return res.data;
}

export const useGetPostsQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getPosts
  });
};

async function getTestResult() {
  const response = await axios.get(LOCAL_API_URL);
  console.log(response);
  return response.data;
}

export const useGetResultQuery = () => {
  return useQuery({
    queryKey: ['result'],
    queryFn: getTestResult
  });
};

async function getTestMyResult(token) {
  const response = await axios.get(`${API_URL}/user`, token);
  return response.data;
}

export const useGetMyQuery = (res) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getTestMyResult(res)
  });
};

const logins = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const useLoginMutation = () => {
  const { login } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: logins,
    onSuccess: (res) => {
      alert('로그인 성공');
      login(res.accessToken);
      navigate('/');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error.response.data.message);
    }
  });
};

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const useJoinMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      alert('회원가입 성공');
      navigate('/');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {
      alert(error.response.data.message);
    }
  });
};

const updateProfile = async ({ formData, userData }) => {
  const response = await axios.patch(`${API_URL}/profile`, formData, userData);
  return response.data;
};

export const useUpdateMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProfile,
    onSuccess: (res) => {
      console.log(res);
      alert('수정 완료~');
      queryClient.invalidateQueries({});
    },
    onError: (error) => {}
  });
};
