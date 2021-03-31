import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Text } from '../../../components';
import { fontSize } from '../../../constants';
import { scale } from '../../../utils/resolutions';
import BOOKS from './data_books';
import CardBook from './CardBook';
import routes from '../../../routes';
import { useNavigation } from '@react-navigation/native';

const Books = () => {
  const navigation = useNavigation();

  const gotoFindBook = () => {
    navigation.navigate(routes.FIND_BOOK);
  }

  const _renderItem = ({ item }) => (
    <CardBook
      {...item}
      onPress={gotoFindBook}
    />
  );

  const _keyExtractor = item => String(item.id);

  return (
    <View style={styles.container}>
      <Text bold style={styles.title}>
        {`Books for you`}
      </Text>
      <FlatList
        horizontal
        data={BOOKS}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: scale(15),
  },
  title: {
    fontSize: fontSize.larger,
    marginBottom: scale(8),
  },
});

export default Books;