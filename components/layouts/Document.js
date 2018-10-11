import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { version, repository } from '../../package.json';
import { initGA, logPageView } from '../../lib/analytics';

if (global.document) {
  const info = [
    `Version: ${version}`,
    `You can find the code here: https://github.com/${repository}`,
    'Thanks for stopping by 🤙',
  ];
  // eslint-disable-next-line no-console
  info.forEach(message => console.log(message));
}

class Document extends Component {
  componentDidMount = () => {
    this.analytics();
    this.serviceWorker();
  };

  componentDidUpdate = () => this.analytics();

  serviceWorker = () => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(() => {
            console.log('SW registered: ');
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
  };

  analytics = () => {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Navigation />
        {children}
        <Footer />
      </Fragment>
    );
  }
}

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;
