import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colorsComponent} from '../../assets/style/color';
import moment from 'moment';
import {textStyles} from '../../assets/style/main';

const ComicsListItem = (props) => {
  const {item} = props;
  return (
    <>
      {moment(item.dates[0].date).format('YYYY') >= 2005 ? (
        <View style={styles.container}>
          <View style={styles.image_box}>
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={{
                uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
              }}
            />
          </View>
          <View style={styles.title}>
            <Text
              numberOfLines={1}
              style={[textStyles.BoldSemi, {fontSize: 12}]}>
              {item.title}
            </Text>
            {item.prices.length > 0 ? (
              <Text
                style={[textStyles.BoldSemi, {fontSize: 12}]}
                numberOfLines={1}>
                price: {item.prices[0].price}
              </Text>
            ) : null}
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ComicsListItem;

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 150,
    marginRight: 10,
  },
  image_box: {
    height: 120,
    width: '100%',
    backgroundColor: colorsComponent.lazyImageBackgroundColor,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
  title: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
