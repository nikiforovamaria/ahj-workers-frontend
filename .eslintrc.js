/* eslint-disable import/no-extraneous-dependencies */
const standardRestrictedGlobals = require('eslint-restricted-globals');

const noRestrictedGlobals = ['error', 'isNaN', 'isFinite'].concat(
  standardRestrictedGlobals,
);
const noRestrictedGlobalsWorker = noRestrictedGlobals.filter((o) => o !== 'self');

module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    es2021: true,
    jest: true,
    worker: true,
    serviceworker: true,
  },
  rules: {
    'no-restricted-globals': noRestrictedGlobals,
  },
  overrides: [
    {
      files: ['*.worker.js'],
      rules: {
        'no-restricted-globals': noRestrictedGlobalsWorker,
      },
    },
  ],
};
