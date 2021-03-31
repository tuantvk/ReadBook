import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../../../components';
import { colors, fontSize } from '../../../constants';

const Info = ({ value, label }) => {
  return (
    <View style={styles.info}>
      <Text bold style={styles.value}>
        {value}
      </Text>
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
  },
  value: {
    color: colors.lightRed,
    fontSize: fontSize.bigger,
  },
  label: {
    fontSize: fontSize.fontSize11,
  },
});

export default Info;