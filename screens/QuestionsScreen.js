import React, { useEffect, useState } from 'react'
import { View, 
  Text, 
  Image,
  TouchableOpacity, 
} from 'react-native'
import { useSelector } from 'react-redux'


import AntDesign from 'react-native-vector-icons/AntDesign'

import QuestionBody from './QuestionBody'
import Timer from './Timer'

import styles from './styles.js'

const QuestionsScreen = (props) => {

  
 
  const questions = useSelector((state) => state.questionsGetter.value)

  const [answer, setAnswer] = useState("")
  const [outOfTime, setOutOfTime] = useState(false)
  const qIndex = props.route.params.questionIndex;
  const score = props.route.params.score;
  
  if(!questions){
    props.navigation.navigate("Settings", {invalid: true})
  }
  
 const currentQuestion = questions[qIndex]
  let questionAnswers = []
  try {
      
    questionAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]

    } catch (error) {
      
    }
  useEffect(() => {
  
    
    setOutOfTime(false)
    setAnswer("")

  
  },[qIndex])

if(outOfTime){
  
  console.log("Out of time");
    props.navigation.navigate("Question", {questionIndex: qIndex+1, 
      score: answer == currentQuestion.correct_answer ? score + 1 : score,
      correctlyAnsweredQuestions: [...props.route.params.correctlyAnsweredQuestions, answer == currentQuestion.correct_answer ? currentQuestion : {}],
          incorrectlyAnsweredQuestions: [...props.route.params.incorrectlyAnsweredQuestions, answer != currentQuestion.correct_answer ? currentQuestion : {}] 
      ,outOfTime: outOfTime })
  }
 

  console.log(props.route.params);
  return (
    <View style={styles.QuestionScreencontainer}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>{`Question ${qIndex == 20 ? 20 : qIndex + 1} out of 20`}</Text>

        {
          qIndex < 20 && answer != "" ?
          <TouchableOpacity 
        style={{marginBottom: 17}}
        onPress={() => {
          
          props.navigation.navigate("Question", {questionIndex: qIndex+1, 
            score: answer == currentQuestion.correct_answer ? score + 1 : score,
            invalid: false,
          correctlyAnsweredQuestions: [...props.route.params.correctlyAnsweredQuestions, answer == currentQuestion.correct_answer ? currentQuestion : {}],
          incorrectlyAnsweredQuestions: [...props.route.params.incorrectlyAnsweredQuestions, answer != currentQuestion.correct_answer ? currentQuestion : {}]})
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

      <View style={[styles.questionScreenQuestionBodyStyle, qIndex == 20 ? {backgroundColor: 'transparent'} : {}]}>
      {
        props.route.params.questionIndex == 20 && props.route.params.score < 15 ? 
        <Image 
        style={[styles.finalScreenImage,]}
        source={require('./../assets/failed_character.png')}
        resizeMode='stretch'  />
        
        :
         props.route.params.questionIndex == 20 && props.route.params.score >= 15 ?
         <Image 
         style={[styles.finalScreenImage, ]}
         source={require('./../assets/success_character.png')}
         resizeMode='stretch'/>
         :  
         <QuestionBody 
         setterAnswer = {setAnswer}
         answer = {answer}
         questionIndex = {qIndex}
         questions={questions}
         questionAnswers = {questionAnswers}
         />
      }
      
     
      </View>

      {/* Timer */}
      {/* <Timer 
      outOfTimeSetter = {setOutOfTime}
      qIndex={qIndex} styles={styles}
      answer={answer}/> */}
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
            <Text style={[{fontSize: 20, fontWeight: 'bold', color: 'white'}, {color: 'red'}]}>Atleast 15 points are needed to win, you recieved {score}. Press here to exit.</Text>
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


