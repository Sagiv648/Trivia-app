import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
const Timer = (props) => {

    // const [seconds, setSeconds] = useState(props.qIndex <= 10 ? 30 : 
    //     props.qIndex > 10 && props.qIndex <= 15 ? 15 : 10)
    //     console.log(`qIndex is ${props.qIndex}`);

    // const [seconds, setSeconds] = useState(props.qIndex < 10 ? 30 : 
    //     props.qIndex > 10 && props.qIndex < 15 ? 15 : 10)
    const [seconds, setSeconds] = useState(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)

   let timer;


   useEffect(() => {
    if(props.qIndex < 20){
      timer = setInterval(() => {
        setSeconds(seconds-1)
        if(seconds == 0){
          clearInterval(timer);
          props.outOfTimeSetter(true)
        }
        
    }, 1000)

    if(seconds == 0){
      clearInterval(timer)
      props.outOfTimeSetter(true)
      setSeconds(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)
    }
    else if(seconds != 0 && props.movedOnGetter){
      clearInterval(timer)
      setSeconds(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)
      
    }
    }
        
        
        
    return () => clearInterval(timer)
   })
    if(seconds == 0){
        console.log("TIME'S UP");
    }
  return (
    <View
      style={styles.timerViewContainer}>
        <Text style={[props.styles.text, {alignSelf: 'center', color: '#42B4EC', fontSize: 30}]}>{seconds}</Text>
      </View>
  )
}

export default Timer