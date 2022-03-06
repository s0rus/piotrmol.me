import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';

const Works = () => {
  return (
    <div>
      <Helmet>
        <title>{Theme.titles.works}</title>
      </Helmet>
      <h1>Works</h1>
    </div>
  );
};

export default Works;
