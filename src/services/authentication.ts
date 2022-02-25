import api from './api';
import { useLocation, useHistory, Redirect } from "react-router-dom";

export async function login(phone: number) {
  return await api.post('/sessions', { email: "***", password: "****" })
    .then(function (response) {
      setToken(response.data.token)
      return true
    })
    .catch(function (error) {
      return false
    });
}

export function Logout(res: string) {
  deleteToken();
  // const history = useHistory();
  // history.push('/auth')
}


export function setToken(res: string) {
  return localStorage.setItem('accessToken', res)
}

export function getToken() {
  return localStorage.getItem('accessToken')
}

export function deleteToken() {
  return localStorage.removeItem('accessToken')
}
