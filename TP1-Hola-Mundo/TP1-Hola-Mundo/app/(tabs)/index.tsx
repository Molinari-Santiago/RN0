import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// Primera pantalla: un saludo simple, centrado y con espacio libre.
export default function HomeScreen() {
  return <SafeAreaView style={styles.screen}><StatusBar style="dark" />
    <View style={styles.content}>
      <Text style={styles.tag}>MI PRIMERA APP · EXPO</Text>
      <View style={styles.icon}><Text style={styles.wave}>✦</Text></View>
      <Text accessibilityRole="header" style={styles.title}>Hola mundo</Text>
      <Text style={styles.subtitle}>Mi primera pantalla en React Native.</Text>
      <Text style={styles.tip}>Probá la pestaña «Otro estilo» ↓</Text>
    </View>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f6f7fc' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 28, gap: 18 },
  tag: { color: '#6554e8', fontWeight: '800', fontSize: 12, letterSpacing: 2, textAlign: 'center' },
  icon: { width: 96, height: 96, borderRadius: 30, backgroundColor: '#ebe7ff', alignItems: 'center', justifyContent: 'center' },
  wave: { fontSize: 50, color: '#6554e8' },
  title: { fontSize: 38, fontWeight: '800', color: '#20243c', textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#626b83', textAlign: 'center', lineHeight: 24 },
  tip: { fontSize: 13, color: '#626b83', marginTop: 40, textAlign: 'center' },
});
