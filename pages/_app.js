import PropTypes from 'prop-types';

import '@/styles/app-base.css';
import '@/styles/app-components.css';
import '@/styles/app-utilities.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
