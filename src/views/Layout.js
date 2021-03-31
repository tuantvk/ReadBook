import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { colors } from '../constants';

const Layout = ({ children }) => {
  return (
    <View style={styles.layout}>
      <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colors.white}
      />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Layout;