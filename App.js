import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors, fontSize } from './src/constants';
import { scale } from './src/utils/resolutions';
import routes from './src/routes';

import Home from './src/containers/Home';
import MyBookshelf from './src/containers/MyBookshelf';
import Profile from './src/containers/Profile';
import Save from './src/containers/Save';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={routes.HOME}
        tabBarOptions={{
          activeTintColor: colors.lightRed,
          labelStyle: styles.labelStyle,
        }}
      >
        <Tab.Screen
          name={routes.HOME}
          component={Home}
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
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
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