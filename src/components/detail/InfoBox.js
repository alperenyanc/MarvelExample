import React from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import ComicsView from './ComicsView';
import { textStyles } from '../../assets/style/main';

const InfoBox = (props) => {
    const {item,comics}=props;    
    return (
        <ScrollView style={styles.container} >
           <View style={styles.title} >
           <Text style={[textStyles.bold,{fontSize:20}]} >{item.name}</Text>
           </View>
           <View style={styles.title}>
          {
              item.description 
              ?<Text style={[textStyles.boldSemi,{fontSize:14}]} >{item.description}</Text>
              : <Text>description not found</Text>
          }
           </View>
           <View style={styles.title}>
               <Text style={[textStyles.bold,{fontSize:18}]} >From 2005 to today comics</Text>
           </View>
           {
               comics ?
               <ComicsView comics={comics} />
               :null
           }
               
         

        </ScrollView>
    )
}

export default InfoBox;

const styles = StyleSheet.create({
    container:{        
        padding:15,        
    },
    title:{
        width:'100%',
        marginBottom:10
    }
})
