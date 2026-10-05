export type Category = 'Base' | 'Listas' | 'Entrada' | 'Interacción' | 'Respuesta' | 'Plataforma';
export type ComponentInfo = { name: string; category: Category; description: string; snippet: string; note: string };
// Datos del catálogo separados de la pantalla y de las demostraciones.
export const categories: Category[] = ['Base', 'Listas', 'Entrada', 'Interacción', 'Respuesta', 'Plataforma'];
export const components: ComponentInfo[] = [
  {
    "name": "View",
    "category": "Base",
    "description": "Agrupa componentes y organiza el espacio con Flexbox.",
    "snippet": "<View style={{ padding: 16 }}><Text>Contenido</Text></View>",
    "note": ""
  },
  {
    "name": "Text",
    "category": "Base",
    "description": "Muestra palabras, títulos y textos con distintos estilos.",
    "snippet": "<Text style={{ fontSize: 24 }}>Hola mundo</Text>",
    "note": ""
  },
  {
    "name": "Image",
    "category": "Base",
    "description": "Muestra una imagen local o remota. El ejemplo usa un archivo local.",
    "snippet": "<Image source={require(\"./imagen.png\")} style={{ width: 64, height: 64 }} />",
    "note": ""
  },
  {
    "name": "ImageBackground",
    "category": "Base",
    "description": "Coloca contenido encima de una imagen de fondo.",
    "snippet": "<ImageBackground source={imagen}><Text>Título</Text></ImageBackground>",
    "note": "Marcado como obsoleto en la documentación actual. Se puede reemplazar por Image y un View superpuesto."
  },
  {
    "name": "ScrollView",
    "category": "Listas",
    "description": "Desplaza un conjunto pequeño de elementos; monta todos sus hijos.",
    "snippet": "<ScrollView horizontal>{elementos}</ScrollView>",
    "note": ""
  },
  {
    "name": "FlatList",
    "category": "Listas",
    "description": "Muestra listas de datos con renderizado por ventanas; ideal para muchas filas.",
    "snippet": "<FlatList data={datos} renderItem={({ item }) => <Text>{item}</Text>} />",
    "note": ""
  },
  {
    "name": "SectionList",
    "category": "Listas",
    "description": "Muestra listas divididas en secciones, con encabezados por grupo.",
    "snippet": "<SectionList sections={secciones} renderItem={({ item }) => <Text>{item}</Text>} />",
    "note": ""
  },
  {
    "name": "VirtualizedList",
    "category": "Listas",
    "description": "Base de FlatList y SectionList. Permite definir cómo acceder a una colección.",
    "snippet": "<VirtualizedList data={datos} getItem={getItem} getItemCount={getCount} renderItem={renderItem} />",
    "note": "Normalmente conviene usar FlatList o SectionList."
  },
  {
    "name": "RefreshControl",
    "category": "Listas",
    "description": "Agrega el gesto de arrastrar hacia abajo para actualizar una lista.",
    "snippet": "<ScrollView refreshControl={<RefreshControl refreshing={cargando} onRefresh={actualizar} />} />",
    "note": "El gesto se prueba en Android o iOS. El catálogo tiene su propio RefreshControl."
  },
  {
    "name": "TextInput",
    "category": "Entrada",
    "description": "Permite ingresar texto. Su valor se puede guardar con useState.",
    "snippet": "<TextInput value={nombre} onChangeText={setNombre} placeholder=\"Nombre\" />",
    "note": ""
  },
  {
    "name": "Switch",
    "category": "Entrada",
    "description": "Activa o desactiva un valor booleano.",
    "snippet": "<Switch value={activo} onValueChange={setActivo} />",
    "note": ""
  },
  {
    "name": "KeyboardAvoidingView",
    "category": "Entrada",
    "description": "Ajusta la posición o altura del contenido cuando aparece el teclado.",
    "snippet": "<KeyboardAvoidingView behavior=\"padding\"><TextInput /></KeyboardAvoidingView>",
    "note": "El catálogo lo usa como contenedor. Probalo con el teclado del celular."
  },
  {
    "name": "Button",
    "category": "Interacción",
    "description": "Botón sencillo con apariencia nativa y evento onPress.",
    "snippet": "<Button title=\"Saludar\" onPress={saludar} />",
    "note": ""
  },
  {
    "name": "Pressable",
    "category": "Interacción",
    "description": "Detecta pulsación, pulsación larga y estados de interacción.",
    "snippet": "<Pressable onPress={sumar} onLongPress={reiniciar}><Text>Tocar</Text></Pressable>",
    "note": ""
  },
  {
    "name": "TouchableOpacity",
    "category": "Interacción",
    "description": "Reduce la opacidad del contenido al tocarlo.",
    "snippet": "<TouchableOpacity onPress={sumar}><Text>Tocar</Text></TouchableOpacity>",
    "note": "Para interfaces nuevas se suele preferir Pressable."
  },
  {
    "name": "TouchableHighlight",
    "category": "Interacción",
    "description": "Destaca el fondo del contenido al tocarlo. Requiere un solo hijo.",
    "snippet": "<TouchableHighlight underlayColor=\"#ddd\" onPress={sumar}><Text>Tocar</Text></TouchableHighlight>",
    "note": ""
  },
  {
    "name": "TouchableWithoutFeedback",
    "category": "Interacción",
    "description": "Detecta una pulsación sin cambiar su apariencia.",
    "snippet": "<TouchableWithoutFeedback onPress={ocultarTeclado}><View /></TouchableWithoutFeedback>",
    "note": "Ofrecé una señal visible del resultado para evitar confusión."
  },
  {
    "name": "Modal",
    "category": "Respuesta",
    "description": "Muestra contenido por encima de la pantalla actual.",
    "snippet": "<Modal visible={abierto} onRequestClose={cerrar}>{contenido}</Modal>",
    "note": ""
  },
  {
    "name": "ActivityIndicator",
    "category": "Respuesta",
    "description": "Muestra un indicador circular durante una tarea en curso.",
    "snippet": "<ActivityIndicator size=\"large\" color=\"#6554e8\" />",
    "note": ""
  },
  {
    "name": "StatusBar",
    "category": "Respuesta",
    "description": "Configura el estilo de la barra de estado del dispositivo.",
    "snippet": "<StatusBar barStyle=\"dark-content\" />",
    "note": "No es un elemento dentro de la tarjeta. En Android con edge-to-edge no todos los ajustes de fondo tienen efecto."
  },
  {
    "name": "DrawerLayoutAndroid",
    "category": "Plataforma",
    "description": "Panel lateral nativo que se puede abrir desde el borde.",
    "snippet": "<DrawerLayoutAndroid renderNavigationView={() => <Text>Menú</Text>}>{contenido}</DrawerLayoutAndroid>",
    "note": "Solo Android. Marcado como obsoleto; para apps nuevas usar navegación con drawer."
  },
  {
    "name": "TouchableNativeFeedback",
    "category": "Plataforma",
    "description": "Agrega la respuesta visual nativa de Android al tocar un elemento.",
    "snippet": "<TouchableNativeFeedback onPress={sumar}><View><Text>Tocar</Text></View></TouchableNativeFeedback>",
    "note": "Solo Android. Se muestra una explicación en las demás plataformas."
  },
  {
    "name": "InputAccessoryView",
    "category": "Plataforma",
    "description": "Muestra una barra de acciones encima del teclado de iOS.",
    "snippet": "<TextInput inputAccessoryViewID=\"acciones\" /><InputAccessoryView nativeID=\"acciones\">{barra}</InputAccessoryView>",
    "note": "Solo iOS. Tocá el campo para ver la barra."
  },
  {
    "name": "SafeAreaView",
    "category": "Plataforma",
    "description": "Componente histórico de React Native para los bordes seguros de iOS.",
    "snippet": "import { SafeAreaView } from \"react-native\";",
    "note": "Obsoleto. Estas apps usan SafeAreaView de react-native-safe-area-context, compatible con Android e iOS."
  }
];
