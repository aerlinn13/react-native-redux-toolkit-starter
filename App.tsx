import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    </ApplicationProvider>
  );
}