import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import { Ionicons } from "@expo/vector-icons";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Search from "./pages/Search";
import CharPerEpisode from "./components/CharPerEpisode";
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  shadow: {
    elevation: 16,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{ top: -6, justifyContent: "center", alignItems: "center" }}
    onPress={onPress}
  >
    <View
      style={{
        width: 65,
        height: 65,
        borderRadius: 50,
        backgroundColor: "#222",

        // ...styles.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Characters") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
          return <Ionicons name="person-sharp" size={size} color={color} />;
        } else if (route.name === "Episodes") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="film" size={24} color={color} />;
        } else if (route.name === "Home") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="home" size={24} color={color} />;
        } else if (route.name === "Favorites") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="star" size={24} color={color} />;
        } else if (route.name === "Search") {
          iconName = focused ? "ios-list-box" : "ios-list";
          return <Ionicons name="ios-search-sharp" size={24} color={color} />;
        }
      },
      tabBarActiveTintColor: "#6fbe6c",
      tabBarInactiveTintColor: "#304b2f",
      tabBarStyle: {
        backgroundColor: "#222",
        borderTopColor: "transparent",
      },
      tabBarShowLabel: ({ focused }) => {
        let label;
        if (route.name === "Search") {
          return (label = focused ? false : false);
        }
      },
      headerShown: false,
      headerTransparent: true,
      headerTitleAlign: "center",
      // headerTitle: () => <Header />,
    })}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={Home} options={{}} />
    <Tab.Screen name="Characters" component={Characters} />
    {/* <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarIcon: ({ focused }) => (
          <>
            <Ionicons
              name="ios-search-sharp"
              size={24}
              color={focused ? "#6fbe6c" : "#304b2f"}
            />
          </>
        ),
      }}
    /> */}
    <Tab.Screen name="Episodes" component={Episodes}></Tab.Screen>
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
            headerTitle: () => <Header />,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: {
              marginLeft: 20,
            },
          headerBackImage: () => (
           <></>
          ),
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Modal" component={CharPerEpisode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
