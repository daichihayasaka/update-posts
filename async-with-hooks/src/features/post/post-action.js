export const updatePostAction = (postInfo) => ({
    type: 'post/update',
    payload: {
      title: postInfo.title,
      body: postInfo.body,
    },
});

export const fetchPost = (postNum) => {
  // 関数を `return` してる
  return async (dispatch) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts/'
    const id = postNum;
    const response = await fetch(`${baseUrl}${id}`).then(res => res.json()).catch((e) => console.log(e));
    const title = response.title;
    const body = response.body;
    dispatch(updatePostAction({
      title: title,
      body: body,
    }));
  }
};