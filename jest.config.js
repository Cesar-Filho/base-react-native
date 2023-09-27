module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  setupFiles: ['<rootDir>/__mocks__/react-native-config.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation/.*)',
  ],
};
