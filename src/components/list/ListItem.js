import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { width, textStyles } from '../../assets/style/main'
import { colorsComponent } from '../../assets/style/color'
import { shadow } from '../../assets/style/ShadowStyle'
 
 

const ListItem = (props) => {    
    let {item,navigation}=props;  
    return (
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={()=>navigation.navigate('CharactersDetail',{
            item:item
        })}
        style={styles.container} >
        <View style={[styles.box,shadow.shadowList]} >
            <View style={styles.image_box} >
                <Image
                style={styles.image}
                resizeMode="stretch"
                source={{uri:`${item.thumbnail.path}.${item.thumbnail.extension}`}}
                />
            </View>
            <View style={styles.title_box} >
            <Text 
            numberOfLines={2}
            style={[textStyles.bold,{fontSize:14}]} >{item.name}</Text>
                </View>
        
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width/2,
        justifyContent: 'center',        
        alignItems: 'center',
        height: width/1.7,        
    },
    box:{
        width:'90%',
        height: '90%',              
        alignItems: 'center',        
        borderRadius: 5,
        padding:10,
        backgroundColor:colorsComponent.defaultBackgroundColor
    },
    image_box:{
        width:'100%',
        height: '80%',
        backgroundColor:colorsComponent.lazyImageBackgroundColor,
        borderRadius: 5,
    },
    title_box:{
        width:'100%',
        height: '20%',        
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height: '100%',
        borderRadius: 5,
    }
})
export default ListItem
