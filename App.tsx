import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';

import { AuthContextProvider } from '@contexts/AuthContext';

import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
        <AuthContextProvider>
          {fontLoaded ? <Routes /> : <Loading />}
        </AuthContextProvider>
    </NativeBaseProvider>
  );
}
  