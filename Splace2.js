import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

const Splace2 = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')

        },2000)

    },[])
  return (
    <View style={{backgroundColor:"green",width:"100%", height:"100%"}}>
      <Text style={styles.container}>Welcome To Our Site</Text>
 
    </View>
  )
}

export default Splace2

const styles = StyleSheet.create({
  container: {
    textAlign:"center",
    fontSize:25,
    marginTop:"50%"
  },
})