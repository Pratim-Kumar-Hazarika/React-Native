/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const data = [
  {
    id:"1",
    comments:"hello 1",
    nextId:"2"
  },
  {
    id:"2",
    comments:"hello 2",
    nextId:"3"
  },
  {
    id:"3",
    comments:"hello 3",
    nextId:"4" 
  },
  {
    id:"4",
    comments:"hello 4",
  }
]

function CommentScreen({navigation,route}) {
  console.log("here",route.params)
  const obj = data.find((item)=>item.id === route.params?.id)
  console.log({obj})
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{obj?.comments}</Text>
      <Button
        title="Inside Comment"
        onPress={() => navigation.push('Comments',{id:obj?.nextId})}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hey I am A Tweet ( Goodnight)</Text>
      <Button
        title="Click on tweet"
        onPress={() => navigation.navigate('Comments',{id:"1"})}
      />
    </View>
  );
}

function NotificationOfUsers({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications will be shown</Text>
      {/* <Button
        title="Click to go to type of notification screen"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Comments" component={CommentScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function NotificationScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Notification" component={NotificationOfUsers} />
      <SettingsStack.Screen name="Comments" component={CommentScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Feed" component={HomeStackScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}