import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'


const HomeScreen = (props) => {


  
  
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/splash_logo.png')}
      />
      <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('Settings')}}>
        <Text style={styles.btn_text}>Let's Play</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42B4EC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
      paddingVertical: 14,
      alignItems: 'center',
      width: '80%',
      height: '8%',
      backgroundColor: '#ffff',
      borderRadius: 15,
      marginTop: 56,
      marginLeft: '2%',
    },
    btn_text: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#454545',
    },
});