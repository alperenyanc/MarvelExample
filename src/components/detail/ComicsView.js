import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ComicsListItem from './ComicsListItem';
import moment from 'moment';

const ComicsView = (props) => {
  const {comics} = props;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        data={comics.reverse().slice(0, 10)}
        renderItem={({item}) => <ComicsListItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ComicsView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
