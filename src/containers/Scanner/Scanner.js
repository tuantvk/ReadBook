import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout } from '../../views';
import { Text, Button } from '../../components';
import { colors, fontSize } from '../../constants';
import { scale, wScale } from '../../utils/resolutions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { RNCamera } from 'react-native-camera';

const Scanner = ({ navigation }) => {

  const goBack = () => {
    navigation.goBack();
  }

  const _onBarCodeRead = ({ rawData }) => {
    if (rawData) {

    }
  }

  return (
    <Layout bgColor="transparent">
      <RNCamera
        style={styles.camera}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        onBarCodeRead={_onBarCodeRead}
      >
        <View style={styles.header}>
          <Button
            style={styles.btnBack}
            onPress={goBack}
          >
            <FontAwesome
              size={26}
              name="angle-left"
              color={colors.white}
            />
          </Button>
        </View>
        <View style={styles.scanContainer}>
          <View style={styles.scanFrame}>
            <Text bold style={styles.scanTxt}>
              {`Scanning...`}
            </Text>
          </View>
        </View>
      </RNCamera>
    </Layout>
  )
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  btnBack: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(15),
  },
  scanContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    borderWidth: 2,
    borderColor: colors.white,
    width: wScale(170),
    height: wScale(230),
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanTxt: {
    color: colors.white,
    fontSize: fontSize.larger,
    letterSpacing: 1.1,
  },
});

export default Scanner;