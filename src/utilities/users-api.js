import sendRequest from './send-request';
import { getToken} from './users-service';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function updateUserPassword(userData, id){
  console.log(userData,id)
  return sendRequest(`${BASE_URL}/${id}`, 'PUT, userData')
}

export function deleteUser(id){
  sendRequest(`${BASE_URL}/deleteUser/${id}`, 'DELETE')
}


export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
} 