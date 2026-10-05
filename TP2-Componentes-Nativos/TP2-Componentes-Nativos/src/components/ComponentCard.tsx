import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { ComponentInfo } from '../data/components';
import Demo from './Demo';
export default function ComponentCard({ item, index }: { item: ComponentInfo; index: number }) {
 const [code, setCode] = useState(false);
 return <View style={s.card}>
  <View style={s.top}><Text style={s.number}>{String(index + 1).padStart(2, '0')}</Text><Text style={s.category}>{item.category}</Text></View>
  <Text accessibilityRole="header" style={s.title}>{item.name}</Text>
  <Text style={s.description}>{item.description}</Text>
  {item.note ? <Text style={s.note}>{item.note}</Text> : null}
  <View style={s.demo}><Demo name={item.name} /></View>
  <Pressable accessibilityRole="button" accessibilityState={{ expanded: code }} onPress={() => setCode(!code)} style={s.toggle}><Text style={s.toggleText}>{code ? '− Ocultar ejemplo de código' : '+ Ver ejemplo de código'}</Text></Pressable>
  {code && <Text selectable style={s.code}>{item.snippet}</Text>}
 </View>;
}
const s = StyleSheet.create({
 card: { backgroundColor: '#fff', padding: 22, borderRadius: 24, marginBottom: 16, borderColor: '#e3e7f1', borderWidth: 1 }, top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, number: { color: '#8c95aa', fontWeight: '700', fontSize: 13 }, category: { backgroundColor: '#eeeaff', color: '#6554e8', fontSize: 11, fontWeight: '800', borderRadius: 8, paddingHorizontal: 9, paddingVertical: 5 }, title: { color: '#20243c', fontSize: 23, fontWeight: '800', marginTop: 12 }, description: { color: '#526078', fontSize: 15, lineHeight: 23, marginTop: 8 }, note: { color: '#856120', backgroundColor: '#fff5df', padding: 12, borderRadius: 10, fontSize: 12, lineHeight: 19, marginTop: 12 }, demo: { marginTop: 18, paddingVertical: 16, borderTopColor: '#edf0f6', borderTopWidth: 1 }, toggle: { paddingVertical: 8 }, toggleText: { color: '#6554e8', fontSize: 13, fontWeight: '700' }, code: { fontFamily: 'monospace', backgroundColor: '#172338', color: '#d0e5ff', padding: 14, borderRadius: 12, fontSize: 12, lineHeight: 20, marginTop: 8 },
});
