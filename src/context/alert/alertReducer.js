import { HIDE_ALERT, SHOW_ALERT } from '../types';

export default function AlertReducer(state = { visible: false, title: null, type: null }, { type, payload }) {
  switch (type) {
    case HIDE_ALERT:
      return { ...{ visible: false, type: null, title: null } };

    case SHOW_ALERT:
      return { ...state, ...{ visible: true, title: payload.title, type: payload.type } };

    default:
      return state;
  }
}
