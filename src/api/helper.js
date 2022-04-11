import {apiCallHandler} from './index';

export const fetchDetails = async () => {
  return apiCallHandler(
    'GET',
    'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json',
    'application/json',
  )
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });
};

export const fetchImages = async () => {
    return apiCallHandler(
      'GET',
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json',
      'application/json',
    )
      .then(data => {
        return data;
      })
      .catch(error => {
        return error;
      });
  };
