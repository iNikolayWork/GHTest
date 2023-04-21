import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/root-navigation';
import {store} from './src/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.appWrapper}>
        <StatusBar backgroundColor={'#24292F'} barStyle={'light-content'} />
        <RootNavigation />
        <Toast />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
  },
});

export default App;
