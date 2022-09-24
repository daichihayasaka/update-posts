export const getPostAction = (postInfo) => ({
    type: 'post/update',
    payload: {
      title: postInfo.title,
      body: postInfo.body,
    },
});