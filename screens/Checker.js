import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { pickedCategoryEdit } from '../global/categories'
const Checker = (props) => {
    //const name = props.data.name
    const [checked, setChecked] = useState(false)
    //props.setter({...props.getter, name : false})
    //const pickedItems = props.getter
    const dispatch = useDispatch()

  return (
    <View>
      <Checkbox.Item 
                     position='trailing'
                     label={props.data.name}
                     status={checked ? 'checked' : 'unchecked' }
                     onPress={() => {

                        dispatch(pickedCategoryEdit(
                            {data:{name: props.data.name, id: props.data.id}, action: checked ? "REMOVE" : 'ADD'}
                       ))
                        setChecked(!checked)
                        
                        

                    //     if(checked)
                    //     dispatch(pickedCategoryEdit(
                    //         props.data.name, "Categories/pickedCategoryEdit"
                    //    ))
                    //    else{
                    //     dispatch(pickedCategoryEdit(
                    //         {data:props.data.name, status: checked}, "Categories/pickedCategoryEdit"
                    //    ))
                    //    }
                        
                        
                        }}
                     />
                      
    </View>
  )
}

export default Checker