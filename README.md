This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Environment Configuration

Before running your application, make sure to create a .env file at the root of your project with the following attribute:

```bash
BASE_URL=https://your-api-url.com
```

This .env file is used to store environment-specific configurations, such as API URLs, that your application may need. Make sure to replace https://your-api-url.com with the actual base URL of your API.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Testing

```bash
# using npm
npm run test

# OR using Yarn
yarn test
```

## Build

### For Android

```bash
# using npm
npm run build:android

# OR using Yarn
yarn build:android
```

### For iOS

```bash
# using npm
npm run build:ios

# OR using Yarn
yarn build:ios
```
