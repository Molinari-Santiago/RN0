import { useEffect, useMemo, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Pressable, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { components, categories, type Category } from '../data/components';
import ComponentCard from '../components/ComponentCard';
// Filtra la colección sin modificar los datos originales.
export default function CatalogScreen() {
 const [query, setQuery] = useState('');
 const [category, setCategory] = useState<Category | 'Todos'>('Todos');
 const [refreshing, setRefreshing] = useState(false);
 const [updated, setUpdated] = useState('');
 const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
 useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
 const filtered = useMemo(() => components.filter(item => (category === 'Todos' || item.category === category) && `${item.name} ${item.description}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [category, query]);
 // La actualización es local: esta práctica no usa una API externa.
 const refresh = () => { setRefreshing(true); timer.current = setTimeout(() => { setUpdated(new Date().toLocaleTimeString('es-AR')); setRefreshing(false); }, 800); };
 return <SafeAreaView style={s.screen}>
  <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
   <FlatList data={filtered} keyExtractor={item => item.name} keyboardShouldPersistTaps="handled" contentContainerStyle={s.content} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresh} tintColor="#6554e8" colors={['#6554e8']} />}
    ListHeaderComponent={<View style={s.header}>
     <Text style={s.eyebrow}>REACT NATIVE / GUÍA INTERACTIVA</Text>
     <Text accessibilityRole="header" style={s.title}>Componentes{'\n'}en acción.</Text>
     <Text style={s.subtitle}>Qué hacen, cuándo usarlos y cómo se ven.</Text>
     <View style={s.stats}><Text style={s.statsText}>24 componentes · 6 categorías · TypeScript</Text></View>
     <TextInput accessibilityLabel="Buscar componentes" placeholder="Buscar por nombre o función…" placeholderTextColor="#68758a" style={s.search} value={query} onChangeText={setQuery} autoCorrect={false} />
     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={s.filters}>{(['Todos', ...categories] as const).map(c => <Pressable accessibilityRole="button" accessibilityState={{ selected: category === c }} key={c} onPress={() => setCategory(c)} style={[s.chip, category === c && s.activeChip]}><Text style={[s.chipText, category === c && s.activeText]}>{c}</Text></Pressable>)}</ScrollView>
     <Text accessibilityLiveRegion="polite" style={s.results}>{filtered.length} componentes{updated ? ` · Actualizado ${updated}` : ''}</Text>
    </View>}
    renderItem={({ item }) => <ComponentCard item={item} index={components.indexOf(item)} />}
    ListEmptyComponent={<View style={s.empty}><Text style={s.subtitle}>No hay coincidencias. Probá con otro nombre o categoría.</Text><Pressable accessibilityRole="button" onPress={() => { setQuery(''); setCategory('Todos'); }}><Text style={s.reset}>Restablecer filtros</Text></Pressable></View>}
    ListFooterComponent={<Text style={s.footer}>Componentes del núcleo de React Native. Las APIs como Alert, Animated y Linking son herramientas diferentes. Picker, Slider y WebView se distribuyen en paquetes externos. Los ejemplos de código son fragmentos: las demostraciones completas están en src/components/Demo.tsx.</Text>}
   />
  </KeyboardAvoidingView>
 </SafeAreaView>;
}
const s = StyleSheet.create({
 screen: { flex: 1, backgroundColor: '#f4f6fb' }, content: { padding: 20, paddingBottom: 32, width: '100%', maxWidth: 800, alignSelf: 'center' }, header: { gap: 16, marginBottom: 22, paddingTop: 14 }, eyebrow: { color: '#6554e8', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 }, title: { color: '#20243c', fontSize: 38, lineHeight: 44, fontWeight: '800' }, subtitle: { color: '#59667f', fontSize: 15, lineHeight: 23 }, stats: { backgroundColor: '#e7e3ff', padding: 14, borderRadius: 14 }, statsText: { color: '#4f41bc', fontSize: 12, fontWeight: '700' }, search: { backgroundColor: '#fff', borderColor: '#dce1ed', borderWidth: 1, borderRadius: 16, padding: 15, color: '#20243c', fontSize: 15 }, filters: { gap: 8 }, chip: { backgroundColor: '#e9edf5', paddingHorizontal: 16, paddingVertical: 11, borderRadius: 22 }, activeChip: { backgroundColor: '#6554e8' }, chipText: { color: '#59667f', fontWeight: '700', fontSize: 12 }, activeText: { color: '#fff' }, results: { color: '#68758a', fontSize: 12 }, empty: { gap: 18, padding: 22, backgroundColor: '#fff', borderRadius: 20 }, reset: { color: '#6554e8', fontWeight: '700' }, footer: { color: '#68758a', fontSize: 12, lineHeight: 20, paddingVertical: 18 },
});
