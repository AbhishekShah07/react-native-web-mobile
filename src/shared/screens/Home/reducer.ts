import {INCREMENT, DECREMENT} from './actionTypes';

const initialData = {
  value: 0,
};

export default function reducer(state = initialData, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        value: state.value - 1,
      };
    default:
      return state;
  }
}
