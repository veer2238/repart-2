import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const Splace = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Splace2')

        },2000)

    },[])
  return (
    <View style={{backgroundColor:"yellow",width:"100%", height:"100%"}}>
      <Text style={styles.container}>Online Clothing Store</Text>
    </View>
  )
}

export default Splace


const styles = StyleSheet.create({
  container: {
   textAlign:"center",
   fontSize:25,
   marginTop:"50%"
  },

});