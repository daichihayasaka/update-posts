const initialState = { post: { title: '', body: '' } };

export const PostReducer = (state = initialState.post, action) => {
  switch (action.type) {
    case 'post/update':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}