import { Stack } from "expo-router";

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
      <Stack.Screen name="index" options={{ title: "Record Store" }} />
      <Stack.Screen name="products" options={{ title: "bandas" }} />
      <Stack.Screen name="about2" options={{ title: "Sobre nos" }} />
      <Stack.Screen name="flex" options={{ title: "festivais" }} />
      <Stack.Screen name="about3" options={{ title: "musicas" }} />
      <Stack.Screen name="cadastro" options={{ title: "cadastre-se aqui" }} />
    </Stack>
   
  );
}

