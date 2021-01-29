/**
 * Head
 * @description Site Head modifications
 * @author dtro-devuk @github:dtro-devuk.io
 */
import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title, description }) => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1 shrink-to-fit=no, user-scalable=0"
      />
    </NextHead>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
