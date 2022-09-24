const PostForm = (props) => {
  return (
    <>
      <div className="input-wrapper">
        <button
          className="btn-sync"
          onClick={() => props.getPostSync({title: 'タイトル', body: '同期的に更新した本文。同期的に更新した本文。'})}
        >
          更新 (同期)
        </button>

        <button
          className="btn-reset"
          onClick={() => props.getPostSync({})}
        >
          リセット
        </button>
      </div>
      
      <div className="posts-wrapper">
        <h1>{props.PostReducer.title}</h1>
        <p>{props.PostReducer.body}</p>
      </div>
    </>
  );
};

export default PostForm;