import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper'
import axios from 'axios'

const CategoryGroup = (props) => {

    const [categories, setCategories] = useState([])
    
    const radioBtnStyle = {
      opacity: 0.5,
      backgroundColor: 'blue'
  }

    useEffect(() => {
        const fetch = async () => {
            const data = await axios('https://opentdb.com/api_category.php')
            setCategories(data.data.trivia_categories)
        }

        fetch()
    },[])
    
  return (
    <RadioButton.Group onValueChange={(e) => props.pickCategory(e)}>
        <FlatList data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
           return (<RadioButton.Item 
            style={props.getterPickedCategory == item ? radioBtnStyle : ""}
            label={item.name} value={item}/>)
        }}/>



    </RadioButton.Group>
  )
}

export default CategoryGroup