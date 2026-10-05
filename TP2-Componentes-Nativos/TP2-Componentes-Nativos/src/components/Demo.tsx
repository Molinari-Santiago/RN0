import { useRef, useState, useEffect } from 'react';
import { ActivityIndicator, Button, DrawerLayoutAndroid, FlatList, Image, ImageBackground, InputAccessoryView, Keyboard, Modal, Platform, Pressable, ScrollView, SectionList, StatusBar, StyleSheet, Switch, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View, VirtualizedList } from 'react-native';
const image = require('../../assets/images/icon.png');
const items = ['React', 'Native', 'Expo', 'TypeScript'];
const pill = (value: string) => <View style={s.pill}><Text style={s.dark}>{value}</Text></View>;
// Cada tarjeta contiene su propio estado: tocar una no modifica las demás.
export default function Demo({ name }: { name: string }) {
 const [count, setCount] = useState(0);
 const [value, setValue] = useState('');
 const [enabled, setEnabled] = useState(false);
 const [open, setOpen] = useState(false);
 const [refreshing, setRefreshing] = useState(false);
 const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
 const drawer = useRef<DrawerLayoutAndroid>(null);
 useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
 const tap = () => setCount(c => c + 1);
 const counter = <Text accessibilityLiveRegion="polite" style={s.hint}>Pulsaciones: {count}</Text>;
 switch (name) {
  case 'View': return <View style={s.row}>{pill('Contenedor')}{pill('Hijo')}</View>;
  case 'Text': return <View><Text style={s.title}>Un título</Text><Text style={s.dark}>Un texto <Text style={{ fontWeight: '800', color: '#6554e8' }}>con énfasis.</Text></Text></View>;
  case 'Image': return <Image source={image} style={{ width: 70, height: 70, borderRadius: 18 }} accessibilityLabel="Icono local de Expo" />;
  case 'ImageBackground': return <ImageBackground source={image} style={s.background} imageStyle={{ opacity: 0.25, borderRadius: 14 }}><Text style={s.title}>Texto sobre imagen</Text></ImageBackground>;
  case 'ScrollView': return <ScrollView horizontal showsHorizontalScrollIndicator contentContainerStyle={s.row}>{items.map(i => <View key={i}>{pill(i)}</View>)}</ScrollView>;
  case 'FlatList': return <FlatList horizontal data={items} keyExtractor={i => i} renderItem={({ item }) => pill(item)} />;
  case 'SectionList': return <SectionList horizontal sections={[{ title: 'Lenguajes', data: ['TS', 'JS'] }, { title: 'Herramientas', data: ['Expo', 'Metro'] }]} keyExtractor={i => i} renderSectionHeader={({ section }) => <Text style={s.section}>{section.title}</Text>} renderItem={({ item }) => pill(item)} />;
  case 'VirtualizedList': return <VirtualizedList horizontal data={items} getItem={(data: string[], index) => data[index]} getItemCount={(data: string[]) => data.length} keyExtractor={item => item} renderItem={({ item }) => pill(item)} />;
  case 'RefreshControl': return <View style={{ gap: 8 }}><Button title="Simular actualización" color="#6554e8" disabled={refreshing} onPress={() => { setRefreshing(true); timer.current = setTimeout(() => { setRefreshing(false); tap(); }, 800); }} />{refreshing ? <ActivityIndicator color="#6554e8" /> : <Text style={s.hint}>Actualizaciones simuladas: {count}. Arrastrá el catálogo hacia abajo para probar el gesto real.</Text>}</View>;
  case 'TextInput': return <View><TextInput accessibilityLabel="Tu nombre" placeholder="Escribí tu nombre" placeholderTextColor="#68758a" style={s.input} value={value} onChangeText={setValue} /><Text style={s.hint}>{value ? `Hola, ${value}` : 'El saludo cambia mientras escribís.'}</Text></View>;
  case 'Switch': return <View style={s.row}><Switch accessibilityLabel="Activar ejemplo" value={enabled} onValueChange={setEnabled} trackColor={{ false: '#cdd4e5', true: '#6554e8' }} /><Text style={s.dark}>{enabled ? 'Activado' : 'Desactivado'}</Text></View>;
  case 'KeyboardAvoidingView': return <TextInput accessibilityLabel="Prueba de teclado" placeholder="Tocá para abrir el teclado" placeholderTextColor="#68758a" style={s.input} />;
  case 'Button': return <View><Button title="Probar botón nativo" color="#6554e8" onPress={tap} />{counter}</View>;
  case 'Pressable': return <View><Pressable accessibilityRole="button" accessibilityLabel="Sumar pulsación, mantener para reiniciar" onPress={tap} onLongPress={() => setCount(0)} style={({ pressed }) => [s.button, pressed && { backgroundColor: '#4236a7' }]}><Text style={s.white}>Tocar / mantener para reiniciar</Text></Pressable>{counter}</View>;
  case 'TouchableOpacity': return <View><TouchableOpacity accessibilityRole="button" activeOpacity={0.4} onPress={tap} style={s.button}><Text style={s.white}>Probá la opacidad</Text></TouchableOpacity>{counter}</View>;
  case 'TouchableHighlight': return <View><TouchableHighlight accessibilityRole="button" underlayColor="#4236a7" onPress={tap} style={s.button}><Text style={s.white}>Probá el fondo</Text></TouchableHighlight>{counter}</View>;
  case 'TouchableWithoutFeedback': return <View><TouchableWithoutFeedback accessibilityRole="button" onPress={() => { Keyboard.dismiss(); tap(); }}><View style={s.outline}><Text style={s.dark}>Tocar sin efecto visual</Text></View></TouchableWithoutFeedback>{counter}</View>;
  case 'Modal': return <View><Button title="Abrir ventana" color="#6554e8" onPress={() => setOpen(true)} /><Modal visible={open} transparent animationType="fade" onRequestClose={() => setOpen(false)}><View style={s.overlay}><View accessibilityViewIsModal style={s.modal}><Text style={s.title}>¡Esto es un Modal!</Text><Text style={s.dark}>Se muestra por encima de la pantalla.</Text><Button title="Cerrar" color="#6554e8" onPress={() => setOpen(false)} /></View></View></Modal></View>;
  case 'ActivityIndicator': return <View style={s.row}><ActivityIndicator size="small" color="#6554e8" /><ActivityIndicator size="large" color="#6554e8" /><Text style={s.dark}>Cargando…</Text></View>;
  case 'StatusBar': return <View><StatusBar barStyle={enabled ? 'light-content' : 'dark-content'} /><Button color="#6554e8" title="Cambiar texto de la barra de estado" onPress={() => setEnabled(!enabled)} /><Text style={s.hint}>Estilo: {enabled ? 'texto claro' : 'texto oscuro'}. Observá la barra superior del celular.</Text></View>;
  case 'DrawerLayoutAndroid': return Platform.OS === 'android' ? <DrawerLayoutAndroid ref={drawer} style={{ height: 150 }} drawerWidth={180} renderNavigationView={() => <View style={s.drawer}><Text style={s.title}>Menú lateral</Text><Button title="Cerrar" onPress={() => drawer.current?.closeDrawer()} /></View>}><View style={s.outline}><Button color="#6554e8" title="Abrir menú Android" onPress={() => drawer.current?.openDrawer()} /></View></DrawerLayoutAndroid> : <Text style={s.hint}>Abrí esta app en Android para probar el panel lateral.</Text>;
  case 'TouchableNativeFeedback': return Platform.OS === 'android' ? <View><TouchableNativeFeedback accessibilityRole="button" onPress={tap}><View style={s.button}><Text style={s.white}>Efecto nativo Android</Text></View></TouchableNativeFeedback>{counter}</View> : <Text style={s.hint}>Demostración disponible en Android.</Text>;
  case 'InputAccessoryView': return Platform.OS === 'ios' ? <View><TextInput accessibilityLabel="Campo con barra de acciones" style={s.input} placeholder="Abrí el teclado de iOS" inputAccessoryViewID="demo-accessory" /><InputAccessoryView nativeID="demo-accessory"><View style={s.accessory}><Button title="Listo" onPress={Keyboard.dismiss} /></View></InputAccessoryView></View> : <Text style={s.hint}>Demostración disponible en iOS.</Text>;
  case 'SafeAreaView': return <Text style={s.hint}>Observá los márgenes superior e inferior de la app: el contenedor respeta los bordes seguros usando react-native-safe-area-context.</Text>;
  default: return null;
 }
}
const s = StyleSheet.create({
 row: { flexDirection: 'row', alignItems: 'center', gap: 10, flexWrap: 'nowrap' }, pill: { backgroundColor: '#eeeaff', padding: 12, marginRight: 8, borderRadius: 12 }, dark: { color: '#27344c', fontSize: 14, lineHeight: 21 }, title: { color: '#20243c', fontSize: 20, fontWeight: '800', marginBottom: 6 }, hint: { color: '#5b6880', fontSize: 13, marginTop: 8, lineHeight: 20 }, input: { backgroundColor: '#f6f7fc', color: '#20243c', borderColor: '#ccd3e4', borderWidth: 1, borderRadius: 12, padding: 13, fontSize: 15 }, button: { backgroundColor: '#6554e8', borderRadius: 12, padding: 14, alignItems: 'center' }, white: { color: 'white', fontWeight: '700', textAlign: 'center' }, outline: { padding: 14, borderWidth: 1, borderColor: '#ccd3e4', borderRadius: 12 }, background: { minHeight: 100, justifyContent: 'center', alignItems: 'center' }, section: { color: '#6554e8', padding: 12, fontWeight: '700' }, overlay: { flex: 1, backgroundColor: '#10182caa', justifyContent: 'center', alignItems: 'center', padding: 24 }, modal: { width: '100%', maxWidth: 420, backgroundColor: 'white', borderRadius: 24, padding: 26, gap: 16 }, drawer: { flex: 1, backgroundColor: '#eeeaff', padding: 18 }, accessory: { backgroundColor: '#eeeaff', padding: 8, alignItems: 'flex-end' },
});
