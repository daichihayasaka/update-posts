const initialState = { title: '', body: '' };

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'post/update':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
};