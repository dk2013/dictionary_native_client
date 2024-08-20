import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from './Components/Dictionary/Dashboard/DashboardScreen';
import AddWord from './Components/Dictionary/AddWord/AddWordScreen';
import BringToMind from './Components/Dictionary/BringToMind/BringToMindScreen';
import Dictionary from '@components/Dictionary/Dictionary';

// const linking = {
// //   prefixes: ['http://localhost:8082/'], // Adjust to your local server or production domain
//   config: {
//     screens: {
//       Dashboard: '',
//       AddWord: 'add-word',
//       BringToMind: 'bring-to-mind',
//       CheckYourself: 'check-yourself',
//     },
//   },
// };

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Dictionary />
  );
}
