import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
// Esta pestaña cambia paleta, alineación y tipografía. El botón usa estado.
export default function StylesScreen() {
  const [touches, setTouches] = useState(0);
  return <SafeAreaView style={styles.screen}><StatusBar style="light" />
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.tag}>02 / EXPLORAR</Text>
      <Text style={styles.title}>El mismo mundo.{'\n'}Otro estilo.</Text>
      <Text style={styles.subtitle}>Fondo oscuro, acentos menta y una composición diferente.</Text>
      <View style={styles.card}>
        <Text style={styles.symbol}>✺</Text><Text style={styles.cardTitle}>Hola de nuevo</Text>
        <Text style={styles.body}>Los estilos se definen con StyleSheet. Un componente puede verse completamente distinto.</Text>
      </View>
      <Pressable accessibilityRole="button" onPress={() => setTouches(touches + 1)} style={({ pressed }) => [styles.button, pressed && { opacity: 0.7 }]}>
        <Text style={styles.buttonText}>Saludar · {touches}</Text>
      </Pressable>
      <Text accessibilityLiveRegion="polite" style={styles.footer}>{touches ? `Saludaste ${touches} ${touches === 1 ? 'vez' : 'veces'}.` : 'Tocá el botón para interactuar.'}</Text>
    </ScrollView>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
 screen: { flex: 1, backgroundColor: '#101d24' }, content: { padding: 26, gap: 24, flexGrow: 1, justifyContent: 'center' },
 tag: { color: '#a2edce', fontWeight: '700', letterSpacing: 3, fontSize: 12 },
 title: { color: '#fff', fontSize: 36, fontWeight: '800', lineHeight: 44 },
 subtitle: { color: '#b4c7cd', fontSize: 16, lineHeight: 25 },
 card: { backgroundColor: '#1b3039', borderRadius: 26, padding: 26, gap: 14 }, symbol: { color: '#a2edce', fontSize: 48 },
 cardTitle: { fontSize: 24, color: '#fff', fontWeight: '700' }, body: { color: '#c1d4da', lineHeight: 24, fontSize: 15 },
 button: { backgroundColor: '#a2edce', padding: 18, borderRadius: 16, alignItems: 'center' }, buttonText: { color: '#102b26', fontSize: 17, fontWeight: '800' },
 footer: { color: '#b4c7cd', textAlign: 'center', fontSize: 13 },
});
