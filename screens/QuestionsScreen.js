import React, { useEffect, useState } from 'react'
import { View, 
  Text, 
  Button, 
  SafeAreaView, 
  StyleSheet, 
  Image,
  FlatList, 
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {pickedCategoryEdit } from './../global/categories'
import {addQuestions} from './../global/questions'
import {questionsGetter} from './../global/questions'
import axios from 'axios'
const QuestionsScreen = (props) => {

  const categories = useSelector((state) => state.editPickedCategories.value)
  const [questions,setQuestions] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(categories);
    const fetch = async (catId, amount) => {
              axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${catId}`)
              .then((result) => {
                setQuestions([...questions, result.data.results])
                  //console.log(result.data.results);
                  //state.value.push(result.data.results)
              })
              .catch((err) => console.log(`Error\n ${err}`))

          }

          if(20 % categories.length == 0){
              const questionsAmount = 20 / categories.length
              for(let i = 0; i < categories.length; i++){
                  fetch(categories[i].id, questionsAmount)
                  
              }
              //console.log(state.value);
          }
          //console.log(state.value);
      
  },[])


  
  dispatch(addQuestions(questions))
  //console.log(questions);
  const questionList = useSelector((state) => state.questionsGetter.value)
  console.log(questionList);

  return (
    <View style={styles.container}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Questions 1 / 20</Text>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>

      {/* Questions Part */}
      <View style={{marginTop: 20, marginLeft: 20}}>
        <Text onPress={()=> 
          {
            props.navigation.navigate("Home")
            dispatch(pickedCategoryEdit({data: "", action: 'CLEAR'}))
          }}
          >LEVEL : HARD, if you want to quit press here</Text>
      </View>
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