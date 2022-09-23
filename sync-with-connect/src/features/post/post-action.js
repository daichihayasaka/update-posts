export const getPostAction = (postInfo) => ({
    type: 'post/update',
    payload: {
      title: postInfo.title,
      body: postInfo.body,
    },
});

export const fetchPost = (postNum) => {
  return async (dispatch) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
    const id = postNum;
    const response = await fetch(`${baseUrl}${id}`).then(res => res.json()).catch((e) => console.log(e));
    const title = response.title;
    const body = response.body;
    dispatch(getPostAction({
      title: title,
      body: body,
    }));
  }
};