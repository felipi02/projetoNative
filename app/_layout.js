import { Stack } from "expo-router";


//export default function RootLayout() {
  //return (
    //<Stack>
     // <Stack.Screen name="index" />
 //  </Stack>
 // );
//}

export default function RootLayout() {
  return (
   
    <Stack
    
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "RS" }} />
      <Stack.Screen name="products" options={{ title: "Menu" }} />
      <Stack.Screen name="about2.js" options={{ title: "Menu" }} />
      <Stack.Screen name="flex.js" options={{ title: "bandas" }} />
    </Stack>
   
  );
}

