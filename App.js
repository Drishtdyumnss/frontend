import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import { theme } from "./styles/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import UserProfile from "./screens/UserProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("App", () => App);
