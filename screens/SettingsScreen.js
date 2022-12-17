import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton, Checkbox } from 'react-native-paper'
import axios from 'axios'
import Checker from './Checker'
import { useSelector } from 'react-redux'



const SettingsScreen = (props) => {
    const [difficulty, setDifficulty] = useState("")
    const [radiobtnStatus, setRadioBtnStatus] = useState(difficulty)
    const [checkedColor, setCheckedColor] = useState("")
    const [categories, setCategories] = useState([])
    const [pickedCategories,setPickedCategories] = useState([])
    const radioBtnStyle = {
        opacity: 0.5,
        backgroundColor: 'blue'
    }
    const cat = useSelector((state) => state.editPickedCategories.value)


    useEffect(()=> {
        const fetchData = async () => {
            const url = 'https://opentdb.com/api_category.php'
            axios.get(url, {method: 'GET'})
            .then((res) => {
                setCategories(res.data)
            })
            .catch((err) => {
                console.log(`Error\n${err}`);
            }) 
        }

        fetchData()
        
        
    },[])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Please select the settings for your game:</Text>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate("Question")}
        style={{ paddingLeft: 5,width: '35%', height: '15%', backgroundColor: '#bb1a3b', borderRadius: 50
                                 , justifyContent: 'center', alignItems: 'center'
                                 , alignSelf : 'center'}}>
                <Text>Once you are ready, press here to start playing.</Text>

            </TouchableOpacity>
        <View>
            <Text style={styles.text}>Select the difficulty: </Text>
            <RadioButton.Group onValueChange={(e) => setDifficulty(e)}>
            <RadioButton.Item 
            style={ difficulty == "Easy" ? radioBtnStyle : "" }
            mode='android'
            label='Easy questions'
            value='Easy'
            
            />
            <RadioButton.Item 
            style={ difficulty == "Medium" ? radioBtnStyle : "" }
            mode='android'
            label='Medium questions'
            value='Medium'
            
            />
            <RadioButton.Item
            style={ difficulty == "Hard" ? radioBtnStyle : "" }
            mode='android'
            label='Hard questions'
            value='Hard'
            
            />
            </RadioButton.Group>
        </View>
        <Text></Text>
        <View> 
            <Text style={styles.text}>Select the categories:</Text>
            <Text style={styles.text}>Note: you will get random amount of each category</Text>
            

            <FlatList
            keyExtractor={(item) => item.id}
            data={categories.trivia_categories}
            renderItem={(itemRow) => {
                
                    return (<Checker data = {itemRow.item} />)
                      
                     

            }}
            />
            
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#42B4EC'
    },
    text: {
        fontSize: 20,
        
        fontWeight :'bold',
        color: '#bb1a3b'
    },
    difficultyList: {
        flexDirection: 'row'
    }
})

export default SettingsScreen