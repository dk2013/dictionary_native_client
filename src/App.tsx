import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './Components/Dictionary/Dashboard/DashboardScreen';
import AddWord from './Components/Dictionary/AddWord/AddWordScreen';
import BringToMind from './Components/Dictionary/BringToMind/BringToMindScreen';
import CheckYourself from './Components/Dictionary/CheckYourself/CheckYourselfScreen';

const linking = {
//   prefixes: ['http://localhost:8082/'], // Adjust to your local server or production domain
  config: {
    screens: {
      Dashboard: '',
      AddWord: 'add-word',
      BringToMind: 'bring-to-mind',
      CheckYourself: 'check-yourself',
    },
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddWord" component={AddWord} />
        <Stack.Screen name="BringToMind" component={BringToMind} />
        <Stack.Screen name="CheckYourself" component={CheckYourself} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
