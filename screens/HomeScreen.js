import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestions } from '../global/questions'
import { useEffect, useState } from 'react'
import axios from 'axios'
const HomeScreen = (props) => {
  const [categories, setCategories] = useState([])



//   useEffect(()=> {
//     const fetchData = async () => {
//         const url = 'https://opentdb.com/api_category.php'
//         axios.get(url, {method: 'GET'})
//         .then((res) => {
//             setCategories(res.data)
//         })
//         .catch((err) => {
//             console.log(`Error\n${err}`);
//         }) 
//     }

//     fetchData()
    
    
// },[])


  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/splash_logo.png')}
      />
      <TouchableOpacity style={styles.btn} onPress={() => {props.navigation.navigate('Settings', {categories: categories.trivia_categories})}}>
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