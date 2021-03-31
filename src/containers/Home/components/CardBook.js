import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { fontSize, colors } from '../../../constants';
import { scale, wScale } from '../../../utils/resolutions';
import { limitedString } from '../../../utils/helpers';
import { Button, Text } from '../../../components';

const CardBook = ({
  image,
  title,
  author,
  onPress,
}) => {
  return (
    <Button style={styles.card} {...{ onPress }}>
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text bold style={styles.title}>
        {limitedString(title)}
      </Text>
      <Text style={styles.author}>
        {author}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  card: {
    marginRight: scale(8),
  },
  image: {
    width: wScale(90),
    height: wScale(135),
    borderRadius: 8,
    marginBottom: scale(3),
  },
  title: {
    fontSize: fontSize.smaller,
  },
  author: {
    fontSize: fontSize.smallest,
    color: colors.systemGray3,
  },
});

export default CardBook;