import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import SettingsScreen from './screens/SettingsScreen';
import { screenOptions as questionOptions } from './screens/QuestionsScreen';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import pickedCatReducer from './global/categories.js'
import questionReducer from './global/questions.js'
const Stack = createNativeStackNavigator();
const store = configureStore({
  reducer: {
    editPickedCategories: pickedCatReducer,
    questionsGetter: questionReducer
  }
})


export default function App() {
  return (
    <Provider store={store}>


    
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen}/>
        <Stack.Screen options={questionOptions} name="Question" component={QuestionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
