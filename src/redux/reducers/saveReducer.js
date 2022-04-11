import {SAVE_DATA} from '../types';

const intialData = {Data: null};

const saveReducer = (state = intialData, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default saveReducer;
