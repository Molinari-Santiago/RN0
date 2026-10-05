import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// La navegación principal contiene las dos pestañas.
export default function RootLayout() {
  return <SafeAreaProvider><Stack screenOptions={{ headerShown: false }} /></SafeAreaProvider>;
}
