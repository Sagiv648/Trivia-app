import { View, Text, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'

const Timer = (props) => {

    // const [seconds, setSeconds] = useState(props.qIndex <= 10 ? 30 : 
    //     props.qIndex > 10 && props.qIndex <= 15 ? 15 : 10)
    //     console.log(`qIndex is ${props.qIndex}`);

    const [seconds, setSeconds] = useState(props.qIndex <= 10 ? 30 : 
        props.qIndex > 10 && props.qIndex <= 15 ? 15 : 10)
   let timer;


        if(seconds == 0){
            clearInterval(timer)
            setSeconds(props.qIndex <= 10 ? 30 : 
                     props.qIndex > 10 && props.qIndex <= 15 ? 15 : 10)
            props.outOfTimeSetter(true)
        }
        else if(seconds > 0 && props.answer){
            clearInterval(timer)
            setSeconds(props.qIndex <= 10 ? 30 : 
                     props.qIndex > 10 && props.qIndex <= 15 ? 15 : 10)
            props.outOfTimeSetter(false)
        }

   useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds-1)

        }, 1000)

    return () => clearInterval(timer)
   })
    if(seconds == 0){
        console.log("TIME'S UP");
    }
  return (
    <View
      style={{width: '20%', height: '10%', 
      borderStyle: 'solid', borderWidth: 10, borderColor: '#42B4EC',
      backgroundColor: 'transparent', borderRadius: 40, justifyContent: 'center', alignSelf: 'center'}}>
        <Text style={[props.styles.text, {alignSelf: 'center', color: '#42B4EC', fontSize: 30}]}>{seconds}</Text>
      </View>
  )
}

export default Timer