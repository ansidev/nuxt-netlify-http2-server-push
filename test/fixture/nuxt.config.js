const { resolve } = require('path');

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    [
      '@@',
      {
        resources: [
          { path: '**/*.js', as: 'script' },
          { path: 'images/*.jpg', as: 'image' }
        ]
      }
    ]
  ]
};
