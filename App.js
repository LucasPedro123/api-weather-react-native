import Search from "./src/type-weather/pages/search";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Dash from "./src/type-weather/pages/dash";
import { WeatherContextProvider } from "./src/Context/WeatherContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WeatherContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="dash" component={Dash} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherContextProvider>
  );
}
