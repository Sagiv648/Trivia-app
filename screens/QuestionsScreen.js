import React, { useEffect, useState } from 'react'
import { View, 
  Text, 
  Button, 
  SafeAreaView, 
  StyleSheet, 
  Image,
  FlatList,
  TouchableOpacity, 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {pickedCategoryEdit } from './../global/categories'
import { fetchQuestions } from './../global/questions'
import { nextQuestion } from './../global/questions'

import AntDesign from 'react-native-vector-icons/AntDesign'
import axios from 'axios'
import QuestionBody from './QuestionBody'
const QuestionsScreen = (props) => {
  const questions = useSelector((state) => state.questionsGetter.value)
  


  //console.log(questions);

  switch (props.route.params.questionIndex) {
    case 10:
      
      break;
    case 15:
      
      break;
    case 20:
      
      break;
    default:
      break;
  }
  if(!questions){
    props.navigation.navigate("Settings", {invalid: true})
  }
 
  



  return (
    <View style={styles.container}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>{`Question ${props.route.params.questionIndex + 1} out of 20`}</Text>
        <TouchableOpacity 
        style={{marginBottom: 17}}
        onPress={() => {
          props.navigation.navigate("Question", {questionIndex: props.route.params.questionIndex+1, score: props.route.params.score+ 1})
        }}>
          <AntDesign name='forward' size={30} color='white'/>
          </TouchableOpacity>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>



      {
        props.route.params.questionIndex+1 == 20 && props.route.params.score < 15 ? 
        <Image 
        style={styles.image}
        source={require('./../assets/failed_character.png')}/> :
         props.route.params.questionIndex+1 == 20 && props.route.params.score >= 15 ?
         <Image 
         style={styles.image}
         source={require('./../assets/success_character.png')}/>
         : <Text>{questions.length != 0 ? questions[props.route.params.questionIndex].question : "Loading..."}</Text> 
      }
      
      
      {/*  Question body */}




      

      {/* Forefit part */}
     
        <TouchableOpacity 
        
        style={{marginTop: 590,justifyContent: 'center' , alignItems: 'center', width: '100%', height: '10%', borderRadius: 40, backgroundColor: '#125881'}}
        onPress={() => {props.navigation.navigate("Home")}} >

        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}} >If you would like to forefit, press here.</Text>
        </TouchableOpacity>
    </View>
  )
}




export const screenOptions = (navData) => {
  return {
    headerShown: false
  }
}


export default QuestionsScreen

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#ffff',
  },
  image: {
    height: 60, 
    width: 60, 
    marginRight: 10,
    marginBottom: 5,
  },
  header: {
    width: '100%', 
    height: '12%', 
    backgroundColor: '#42B4EC', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end'
  },
  text_header: {
    fontWeight:'300%', 
    fontSize:23, 
    marginBottom: 15, 
    marginLeft: 15, 
    fontWeight: 'bold', 
    fontSize: 28, 
    color: '#ffff',
  },
});