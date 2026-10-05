import { Tabs } from 'expo-router';
import { Text } from 'react-native';
export default function TabLayout() {
  return <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#6554e8', tabBarInactiveTintColor: '#7b8191', tabBarStyle: { backgroundColor: '#ffffff' }, tabBarLabelStyle: { fontWeight: '700' } }}>
    <Tabs.Screen name="index" options={{ title: 'Inicio', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 22 }}>⌂</Text> }} />
    <Tabs.Screen name="estilos" options={{ title: 'Otro estilo', tabBarIcon: ({ color }) => <Text style={{ color, fontSize: 22 }}>✦</Text> }} />
  </Tabs>;
}
