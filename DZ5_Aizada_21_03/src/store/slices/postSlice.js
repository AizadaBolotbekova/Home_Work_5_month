import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = 'post'
const initialState = {
    post: '[]',
    status: '',
    error: ''
}

export const postFetch = createAsyncThunk(
    `${name}/postFetch`,
    async (params) => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos', {params: {_limit: 10}})
        return data
    }
)

export const postFetchV2 = createAsyncThunk(
    `${name}/postFetchV2`,
    async (_, { extra: api }) => {
        const data = await api.get('/posts')
        return data
    }
)

export const postSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state, action) => {
            state.post = 'HELLO WORLD'
        },
        decrement: (state, action) => {
            state.post = 'NOT HELLO'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(postFetch.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = [...state.post, ...action.payload.data]
            state.status = 'success'
        })
        builder.addCase(postFetch.rejected, (state, action) => {
            console.log(action.payload)
            state.error = 'ERROR'
            state.error = 'rejected'
        })

        builder.addCase(postFetchV2.fulfilled, (state, action) => {
            console.log(action.payload)
            state.post = action.payload
            state.status = 'success'
        })
    }
})

export const { reducer: postReducer } = postSlice
export const { actions: postActions } = postSlice