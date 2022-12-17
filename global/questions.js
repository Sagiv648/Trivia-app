import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";


const initialState = []

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {value: initialState},
    reducers: {

        addQuestions: (state, {payload}) => {
            state.value = payload
        }

        
    }
})

export const {addQuestions} = questionsSlice.actions;
export default questionsSlice.reducer;