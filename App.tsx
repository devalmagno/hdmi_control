import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { AuthProvider } from './src/contexts/AuthContext';

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter400': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter500': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter600': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Poppins400': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins500': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins600': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded)
      await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Tela Inicial" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}