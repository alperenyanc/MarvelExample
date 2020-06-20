import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { DetailHeader } from '../../components/HeadersButtons/MainHeaders';

export default class CharactersDetail extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const{navigation}=this.props;
    return (
      <View>        
         <DetailHeader
              navigation={navigation}
              leftIcon="back"
              title={'title'}
              background={'red'}
            />
        <Text> CharactersDetail </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
