import { store } from "../index";

const PostForm = (props) => {
  console.log(store.getState());
  return (
    <>
      <div className="input-wrapper">
        <button
          className="btn-sync"
          onClick={() => props.updatePostSync({title: 'タイトル', body: '同期的に更新した本文。同期的に更新した本文。'})}
        >
          更新 (同期)
        </button>

        <button
          className="btn-reset"
          onClick={() => props.updatePostSync({ title: '', body: '' })}
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