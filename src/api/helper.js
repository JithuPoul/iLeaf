import {apiCallHandler} from './index';

export const fetchDetails = async () => {
  return apiCallHandler(
    'GET',
    'https://jsonplaceholder.typicode.com/posts',
    'application/json',
  )
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
};

export const fetchDetailsbyUser = async (id) => {
    return apiCallHandler(
      'GET',
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      'application/json',
    )
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
  };
