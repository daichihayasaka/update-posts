import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPost = createAsyncThunk(
  'post/fetch',
  async (postNum) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/';
    const id = postNum;
    const response = await fetch(`${baseUrl}${id}`).then(res => res.json()).catch((e) => console.log(e));
    return ({
      title: response.title,
      body: response.body,
    });
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState: { title: '', body: '' },
  reducers: {
    updated: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => ({
      ...state.post,
      ...action.payload,
    }))
  },
});