import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale, wScale } from '../../utils/resolutions';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Info } from './components';

const FindBook = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <Layout>
      <View style={styles.header}>
        <Button
          style={styles.btnBack}
          onPress={goBack}
        >
          <FontAwesome
            size={26}
            name="angle-left"
            color={colors.black}
          />
        </Button>
        <Text bold style={styles.headerTitle}>
          {`Find book`}
        </Text>
        <View style={styles.headerRight}>
          <FontAwesome
            size={20}
            name="bookmark"
            color={colors.lightRed}
          />
          <Entypo
            size={20}
            name="share"
            color={colors.black}
            style={styles.iconShare}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.info}>
            <Image
              source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._AC_SX184_.jpg' }}
              style={styles.thumb}
            />
            <Text bold style={styles.title}>
              {`Dog Man: Mothering Heights: From the Creator of Captain Underpants`}
            </Text>
            <Text style={styles.author}>
              {`Dav Pilkey`}
            </Text>
          </View>
          <View style={styles.bookInfo}>
            <Info
              value="488"
              label="PAGES"
            />
            <Info
              value="7-9"
              label="HOURS TO READ"
            />
            <Info
              value="5.0"
              label="RATING"
            />
          </View>
          <Button style={styles.btnReading}>
            <Text bold style={styles.txtReading}>
              {`READING`}
            </Text>
          </Button>
          <View style={styles.aboutContainer}>
            <Text bold style={styles.headerTitle}>
              {`About book`}
            </Text>
            <Text style={styles.about}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            </Text>
            <Text style={styles.about}>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Layout>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: fontSize.large,
  },
  btnBack: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconShare: {
    paddingLeft: scale(10),
    paddingRight: scale(15),
  },
  info: {
    alignItems: 'center',
  },
  thumb: {
    borderRadius: 8,
    width: wScale(140),
    aspectRatio: 0.676,
  },
  content: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(15),
  },
  title: {
    textAlign: 'center',
    fontSize: fontSize.fontSize20,
    marginTop: scale(8),
    marginHorizontal: scale(15),
  },
  author: {
    color: colors.systemGray3,
    textDecorationLine: "underline",
  },
  bookInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(13),
  },
  btnReading: {
    backgroundColor: colors.lightRed,
    borderRadius: 6,
    paddingVertical: scale(10),
    alignItems: 'center',
  },
  txtReading: {
    color: colors.white,
    fontSize: fontSize.fontSize16,
  },
  aboutContainer: {
    marginVertical: scale(20),
  },
  about: {
    marginTop: scale(5),
  },
});

export default FindBook;