export const updatePostAction = (postInfo) => ({
    type: 'post/update',
    payload: {
      title: postInfo.title,
      body: postInfo.body,
    },
});