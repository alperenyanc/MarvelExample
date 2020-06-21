import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { MainHeader } from '../../components/HeadersButtons/MainHeaders';

export default class Contact extends Component {
    constructor(props) {
        super(props);
         
      }
    render() {
        const{navigation}=this.props;
        return (
            <View style={styles.container} >
                <MainHeader navigation={navigation} title="Contact Us"/>
                
                <Text style={{alignSelf:'center'}} > Contact us </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
