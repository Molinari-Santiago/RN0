# TP2-Componentes-Nativos
Trabajo práctico de Santiago Molinari — 7° 4°.

## Ejecutar
1. Instalar Node.js 22.13 o superior (preferentemente LTS) y Expo Go en el celular.
2. Abrir esta carpeta en VS Code y ejecutar `npm install` en la terminal.
3. Ejecutar `npm start`.
4. Con la PC y el celular conectados a la misma red Wi-Fi, escanear el QR con Expo Go (Android) o la cámara (iOS).
5. Para navegador: ejecutar `npm run web`. Para emulador Android: `npm run android`, con Android Studio y un emulador iniciado.

El proyecto usa Expo SDK 57. Expo Go debe ser compatible con ese SDK. Si hay un problema de conexión, revisar la red y el firewall; se puede intentar `npx expo start --tunnel` (puede solicitar instalar un complemento).

## Comprobar código
`npm run typecheck` comprueba TypeScript. `npx expo export --platform web` genera una compilación web. `npx expo export --platform android` comprueba el bundle de Android sin crear un APK.

## Estructura
- `app/`: pantallas y navegación de Expo Router.
- `assets/`: imágenes locales.
- `src/`: catálogo, tarjetas y demostraciones (solo TP2).
- `app.json`: configuración de Expo.
- `package.json`: dependencias y comandos.
- `tsconfig.json`: TypeScript en modo estricto.

## Consigna
Catálogo de los 24 componentes documentados en la barra lateral oficial de React Native, con descripción, código y ejemplos. Buscador, seis filtros y actualización local por gesto. Los componentes exclusivos se prueban en su plataforma; los obsoletos se identifican. SafeAreaView se demuestra con su reemplazo recomendado. KeyboardAvoidingView y RefreshControl están integrados en la pantalla. Las listas internas son horizontales para evitar anidar listas verticales. No incluye todos los paquetes externos ni todas las APIs, porque no son componentes del núcleo.

Los estados se mantienen mientras la app está abierta; no requieren base de datos.

## Fuentes
- https://reactnative.dev/docs/components-and-apis
- https://docs.expo.dev/get-started/create-a-project/
- https://docs.expo.dev/versions/latest/
