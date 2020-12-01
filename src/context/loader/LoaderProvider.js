import { useReducer } from 'react';
import PropTypes from 'prop-types';
import LoaderContext from './loaderContext';
import loaderReducer from './loaderReducer';
import { showLoading, hideLoading } from '../actions';

const LoaderProvider = ({ children }) => {
  const [{ loading }, dispatch] = useReducer(loaderReducer, { loading: false });

  const showLoader = () => dispatch(showLoading());
  const hideLoader = () => dispatch(hideLoading());

  return <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>{children}</LoaderContext.Provider>;
};
LoaderProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
LoaderProvider.defaultProps = {
  children: {},
};

export default LoaderProvider;
