import React, { useEffect } from 'react';
import AppNavigator from './src/app/AppNavigator';
import RNBootSplash from 'react-native-bootsplash';

const App: React.FC = () => {

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return <AppNavigator />;
};

export default App;