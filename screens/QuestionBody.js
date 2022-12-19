import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
const QuestionBody = (props) => {
    
  const qIndex = props.questionIndex;
  const score = props.score;
  const questions = props.questions
  const currentQuestion = questions[qIndex]
  const questionAnswers = props.questionAnswers
  const answer = props.answer


  const radioBtnStyle = {
    opacity: 0.5,
    backgroundColor: 'blue'
}

  return (
    
    <RadioButton.Group 
    onValueChange={(val) =>  props.setterAnswer(val)}>
    {
      currentQuestion ?  <Text style={[styles.text, {color: currentQuestion.difficulty == 'hard' ? '#8e052f' :
        currentQuestion.difficulty == 'medium' ? '#aa7305' : '#0bb808'}]}>{currentQuestion.difficulty.toUpperCase()} Question</Text> :
        <Text></Text>
    }
 

<Text
style={[styles.text, {color: '#0c3271'}]}

>{questions.length != 0 ? questions[qIndex].question : "Loading..."}</Text> 
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
    
  )
}

export default QuestionBody

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