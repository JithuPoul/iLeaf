import axios from 'axios';
import {resetNavigation, goBack} from '../navigation/root';
import {Alert} from 'react-native';

// The request will be aborted after waiting for 10 seconds.
const apiTimeOut = 10000;

export async function apiCallHandler(
  method,
  url,
  contentType,
) {

  const normalHeader = {
    Accept: 'application/json',
    'Content-Type': contentType,
    Connection: 'close',
  };
  if (method === 'GET') {
    return axios({
      url: url,
      method: method,
      headers: normalHeader,
      timeout: apiTimeOut,
    })
      .then(function (response) {
        return response.data;
      })
      .catch(async error => {
        if (error.response && error.response.status === 401) {
          Alert.alert(
            'Message',
            'Your session has expired, Please login again',
          );
        } else {
          return error;
        }
      });
  }
}
