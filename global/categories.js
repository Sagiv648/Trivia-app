import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const pickedCategoriesSlice = createSlice({
    name: 'Categories',
    initialState: {value : initialState},
    
    reducers: {
        pickedCategoryEdit: (state, {payload}) => {
            //console.log(payload);
            switch(payload.action){
                case 'ADD':
                    state.value.push(payload.data)
                    break;
                case 'REMOVE':
                    state.value = state.value.filter(x => x !== payload.data)
                    break;
                case 'CLEAR':
                    state.value = initialState;
                    break;
                default:
                    break;
            }

            
        }
    }
})

export const {pickedCategoryEdit} = pickedCategoriesSlice.actions;

export default pickedCategoriesSlice.reducer;