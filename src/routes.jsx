import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";
import CharPerEpisode from "./components/CharPerEpisode";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tabs from "./stacks/Tabs";

const Stack = createStackNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: () => <Header />,
          headerBackTitleVisible: true,
         
          headerBackImage: () => <></>,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Modal" component={CharPerEpisode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

