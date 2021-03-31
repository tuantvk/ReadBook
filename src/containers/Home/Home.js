import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale } from '../../utils/resolutions';
import { Books } from './components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import routes from '../../routes';

const Home = ({ navigation }) => {

  const gotoRoute = route => {
    navigation.navigate(route);
  }

  return (
    <Layout>
      <View style={styles.header}>
        <Text bold style={styles.headerTitle}>
          {`ReadBook`}
        </Text>
        <View style={styles.search}>
          <Button style={[styles.icon, styles.iconSearch]}>
            <Ionicons
              size={17}
              name="md-search-outline"
              color={colors.systemGray3}
            />
          </Button>
          <TextInput
            placeholder="Search..."
            style={styles.inputSearch}
          />
          <Button
            style={[styles.icon, styles.iconScan]}
            onPress={() => gotoRoute(routes.SCANNER)}
          >
            <Ionicons
              size={20}
              name="md-scan-outline"
            />
          </Button>
        </View>
      </View>
      <View style={styles.content}>
        <Books />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  header: {
    marginVertical: scale(10),
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: fontSize.large,
  },
  search: {
    marginHorizontal: scale(15),
    marginTop: scale(7),
  },
  inputSearch: {
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 0.96,
    paddingHorizontal: scale(33),
    borderColor: colors.systemGray3,
    backgroundColor: colors.white,
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    top: 0,
    zIndex: 999,
  },
  iconSearch: {
    left: 0,
    paddingLeft: scale(10),
  },
  iconScan: {
    right: 0,
    paddingRight: scale(13),
  },
  content: {
    paddingVertical: scale(6),
  },
});

export default Home;