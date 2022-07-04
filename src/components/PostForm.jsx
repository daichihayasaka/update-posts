const PostForm = (props) => {
  console.log(props);
  return (
    <>
      <div className="input-wrapper">
        <input type="number" value={props.postNum} onChange={props.updatePostNum} />
        <button
          className="btn-sync"
          onClick={() => props.getPostSync({title: 'タイトル', body: '同期的に更新した本文。同期的に更新した本文。'})}
        >
          更新 (同期)
        </button>
        <button
          className="btn-async"
          onClick={() => props.getPostAsync(props.postNum)}
        >
          更新 (非同期)
        </button>
      </div>
      <div className="posts-wrapper">
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
      </div>
    </>
  )
}

export default PostForm;