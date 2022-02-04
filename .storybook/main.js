const path = require('path');

module.exports = {
  stories: ['../components/', '../pages/'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, '../styles/'),
      '@atoms': path.resolve(__dirname, '../components/atoms/'),
      '@molecules': path.resolve(__dirname, '../components/molecules/'),
      '@organisms': path.resolve(__dirname, '../components/organisms/'),
      '@templates': path.resolve(__dirname, '../components/templates/'),
      '@hooks': path.resolve(__dirname, '../hooks/'),
      '@lib': path.resolve(__dirname, '../lib/'),
    };
    return config;
  },
  framework: '@storybook/react',
};
