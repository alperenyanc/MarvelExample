import React from 'react';

import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import {imagesHeader} from '../../assets/images';
import {textStyles} from '../../assets/style/main';

export const MainHeader = (props) => {
  const {navigation, title} = props;
  return (
    <View style={styles.headerBox}>
      <TouchableOpacity
        style={{position: 'absolute', width: '100%', left: 10}}
        onPress={() => navigation.openDrawer()}>
        <Image
          style={{height: 20, width: 20}}
          resizeMode="center"
          source={imagesHeader.hamburger}
        />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, textStyles.boldWhite]}>{title}</Text>
    </View>
  );
};

export const DetailHeader = (props) => {
  const {
    navigation,
    leftIcon,
    leftAction,
    title,
    rightIcon,
    background,
  } = props;

  return (
    <View
      style={[
        {
          height: 50,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          //	paddingHorizontal: 10,
          backgroundColor: background ? background : '#fff',
        },
      ]}>
      <View style={{flex: 1}}>
        {leftIcon ? (
          <TouchableOpacity
            style={{
              padding: 10,
              alignSelf: 'flex-start',
            }}
            onPress={() => (leftAction ? leftAction() : navigation.goBack())}>
            <Image
              style={{height: 20, width: 20}}
              source={
                background ? imagesHeader[leftIcon] : imagesHeader[leftIcon]
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'center',
        }}>
        {title ? (
          <Text numberOfLines={1} style={styles.textHeader}>
            {title}
          </Text>
        ) : (
          <Text>Başlık</Text>
        )}
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {rightIcon ? (
          <TouchableOpacity
            style={{padding: 10}}
            onPress={() => navigation.navigate('NewChat')}>
            <Image
              style={{height: 24, width: 24}}
              source={imagesChat[rightIcon]}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  headerBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
