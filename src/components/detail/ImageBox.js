import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {width} from '../../assets/style/main';
import {colorsComponent} from '../../assets/style/color';
const ImageBox = (props) => {
  const {path, extension} = props.item;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={{uri: `${path}.${extension}`}}
      />
    </View>
  );
};

export default ImageBox;
const styles = StyleSheet.create({
  container: {
    width: width,
    height: width * 0.8,
    backgroundColor: colorsComponent.lazyImageBackgroundColor,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
