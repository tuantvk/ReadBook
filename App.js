import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, fontSize } from './src/constants';
import { scale } from './src/utils/resolutions';
import routes from './src/routes';

import Home from './src/containers/Home';
import MyBookshelf from './src/containers/MyBookshelf';
import Profile from './src/containers/Profile';
import Save from './src/containers/Save';
import Scanner from './src/containers/Scanner';
import FindBook from './src/containers/FindBook';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={routes.HOME}
      headerMode="none"
    >
      <HomeStack.Screen name={routes.HOME} component={Home} />
      <HomeStack.Screen name={routes.FIND_BOOK} component={FindBook} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME}
      tabBarOptions={{
        activeTintColor: colors.lightRed,
        labelStyle: styles.labelStyle,
      }}
    >
      <Tab.Screen
        name={routes.HOME}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.MY_BOOKS_SHELF}
        component={MyBookshelf}
        options={{
          tabBarLabel: 'My bookshelf',
          tabBarIcon: ({ color }) => (
            <AntDesign name="book" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.SAVE}
        component={Save}
        options={{
          tabBarLabel: 'Save',
          tabBarIcon: ({ color }) => (
            <AntDesign name="tagso" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.HOME}
        headerMode="none"
      >
        <Stack.Screen name={routes.HOME} component={HomeTabs} />
        <Stack.Screen name={routes.SCANNER} component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: fontSize.smallest,
    paddingBottom: scale(3),
  },
});

export default App;