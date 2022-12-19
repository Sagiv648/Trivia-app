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
import { RadioButton } from 'react-native-paper'
const QuestionsScreen = (props) => {

  
  let time = 0
  if(qIndex <= 10){
    time = 20
  }
  else if(qIndex <= 15){
    time = 15

  }
  else {
    time = 10
  }
  
 
  const questions = useSelector((state) => state.questionsGetter.value)
  const radioBtnStyle = {
    opacity: 0.5,
    backgroundColor: 'blue'
}
  //console.log(questions);
  const [answer, setAnswer] = useState("")
 
  const qIndex = props.route.params.questionIndex;
  const score = props.route.params.score;
  
  if(!questions){
    props.navigation.navigate("Settings", {invalid: true})
  }
  
 const currentQuestion = questions[qIndex]
  let questionAnswers = []
  try {
      
    questionAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]


      //console.log(currentQuestion.correct_answer);
    //console.log(currentQuestion.incorrect_answers);
    } catch (error) {
      
    }
  useEffect(() => {
  
    
    
    setAnswer("")

  
  },[qIndex])

 
  //console.log(currentQuestion);
 
  //console.log(questionAnswers);
  
  return (
    <View style={styles.container}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>{`Question ${qIndex == 20 ? 20 : qIndex + 1} out of 20`}</Text>

        {
          qIndex < 20 && answer != "" ?
          <TouchableOpacity 
        style={{marginBottom: 17}}
        onPress={() => {
          //clearInterval(timer)
          props.navigation.navigate("Question", {questionIndex: qIndex+1, 
            score: answer == currentQuestion.correct_answer ? score + 1 : score })
        }}>
          <AntDesign name='forward' size={30} color='white'/>
          </TouchableOpacity> :
          <Text></Text>
        }
        
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>


      <View style={{width: '100%', height: '50%', backgroundColor: '#1d70a3', marginBottom: 10, borderBottomLeftRadius: 40, borderBottomRightRadius: 40}}>
      {
        props.route.params.questionIndex == 20 && props.route.params.score < 15 ? 
        <Image 
        style={[styles.finalScreenImage, qIndex == 20 ? {backgroundColor: 'white'} : {}]}
        source={require('./../assets/failed_character.png')}
        resizeMode='stretch'  />
        
        :
         props.route.params.questionIndex == 20 && props.route.params.score >= 15 ?
         <Image 
         style={[styles.finalScreenImage, qIndex == 20 ? {backgroundColor: 'white'} : {}]}
         source={require('./../assets/success_character.png')}
         resizeMode='stretch'/>
         :  
         <RadioButton.Group 
            onValueChange={(val) =>  setAnswer(val)}>
            {
              currentQuestion ?  <Text style={[styles.text, {color: currentQuestion.difficulty == 'hard' ? '#8e052f' :
                currentQuestion.difficulty == 'medium' ? '#aa7305' : '#0bb808'}]}>{currentQuestion.difficulty.toUpperCase()} Question</Text> :
                <Text></Text>
            }
         

        <Text
        style={[styles.text, {color: '#0c3271'}]}
        
        >{questions.length != 0 ? questions[props.route.params.questionIndex].question : "Loading..."}</Text> 
      <FlatList 
      data={ qIndex < 10 ? questionAnswers.sort((a,b) => a == b ? 0 : a < b ? -1 : 1) : questionAnswers}
      keyExtractor={(item,index) => index}
      renderItem={({item}) => {
        return( <RadioButton.Item 
          style={answer == item ? radioBtnStyle : ""}
          label={item}
          labelStyle={[styles.text, {color: '#091e5a'}]} 
          value={item}/>)
      }}/>


      </RadioButton.Group> 
      }
      
     
      </View>

      {/* Timer */}
      <View
      style={{width: '100%', height: '20%', backgroundColor: 'purple', borderRadius: 40, justifyContent: 'center'}}>
        <Text style={[styles.text, {alignSelf: 'center', color: 'green'}]}>TIME TO FINISH</Text>
      </View>
      {/*  Question body */}




      

      {/* Forefit part */}
     
        <TouchableOpacity 
        
        style={{marginTop: 50,justifyContent: 'center' , alignItems: 'center', width: '100%', height: '10%', borderRadius: 40, backgroundColor: '#125881'}}
        onPress={() => {
          //clearInterval(timer)
          props.navigation.navigate("Home")}} >
          {
            qIndex < 20 ?
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}} >You can exit any time, press here.</Text> :
            score > 15 ? <Text style={[{fontSize: 20, fontWeight: 'bold', color: 'white'}, {color: 'green'}]}>You win with {score} points. Press here to exit.</Text> :
            <Text style={[{fontSize: 20, fontWeight: 'bold', color: 'white'}, {color: 'red'}]}>Atleast 15 points are needed to win, you lost. Press here to exit.</Text>
          }
        
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
  finalScreenImage: {
    width: '50%',
    height: '100%',
    alignSelf: 'center',
    
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
  text: {
      fontSize: 20,
      
      fontWeight :'bold',
      color: '#bb1a3b'
  },
});

