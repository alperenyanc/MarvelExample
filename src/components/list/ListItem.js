import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ListItem = (props) => {
    console.log('props',props)
    return (
        <View style={styles.container} >
          <View style={styles.image_box} >
              <Text> photo</Text>
          </View>
 
          <View>
              <Text> ad</Text>
          </View>

        </View>
    )
}

export default ListItem
 

const styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal:10
   },
   image_box:{
       height:40,
       width:40,
       backgroundColor:'#ccc'
   }
})
