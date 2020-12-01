import { HIDE_LOADER, SHOW_LOADER } from '../types';

export default function LoaderReducer(state = { loading: false }, { type }) {
  switch (type) {
    case SHOW_LOADER:
      return { loading: true };

    case HIDE_LOADER:
      return { loading: false };

    default:
      return state;
  }
}
