const { load: loadEnv } = require('figaro-js');

const DEFAULT_FILTER = (_, { mode }) => mode === 'development';

/**
 * @type {import('vite-plugin-figaro-js')}
 */
module.exports = function figarojs(filter = DEFAULT_FILTER) {
  return {
    name: 'vite-plugin-figaro-js',
    config(userConfig, env) {
      if (filter(userConfig, env)) {
        loadEnv();
      }
    }
  }
}
