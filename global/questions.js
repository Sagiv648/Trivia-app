import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import axios from "axios";


const BASE_URL = `https://opentdb.com/api.php?`

export const fetchQuestions = createAsyncThunk("questions/fetchQuestions",
async (options, thunkAPI) => {
    try{

        
        const x = `${BASE_URL}amount=20&category=${options.category.id}&difficulty=${options.difficulty}`
        
        const data = await axios.get(`${BASE_URL}amount=20&category=${options.category.id}&difficulty=${options.difficulty}`)
        return data.data.results
    }
    catch(err){
        return err.message
    }
})


const initialState = []

const questionsSlice = createSlice({
    name: 'questions',
    initialState: {value: initialState},
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state,action) => {
            //console.log(action.payload);

            
            state.value = action.payload
        })
    }
})

export const { nextQuestion} = questionsSlice.actions;
export default questionsSlice.reducer;