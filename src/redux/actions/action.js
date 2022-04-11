import {SAVE_DATA} from '../types';

export function saveData(data) {
  return {
    type: SAVE_DATA,
    payload: data,
  };
}
