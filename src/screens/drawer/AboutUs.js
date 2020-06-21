import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { MainHeader } from '../../components/HeadersButtons/MainHeaders';

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
         
      }
    render() {
        const{navigation}=this.props;
        return (
            <View style={styles.container} >
                <MainHeader navigation={navigation} title="About Us"/>
                
                <Text style={{alignSelf:'center'}} > About Us  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
