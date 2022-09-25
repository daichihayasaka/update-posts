import { store } from "../index";
import { getPostAction } from "../features/post/post-action";

const PostForm = (props) => {
  return (
    <>
      <div className="input-wrapper">
        <button
          className="btn-sync"
          onClick={() => store.dispatch(getPostAction({title: 'タイトル', body: '同期的に更新した本文。同期的に更新した本文。'}))}
        >
          更新 (同期)
        </button>

        <button
          className="btn-reset"
          onClick={() => store.dispatch(getPostAction({}))}
        >
          リセット
        </button>

        <button
          className="btn-re-rendering"
          onClick={props.handleUpdater}
        >
          再レンダリング
        </button>
      </div>
      
      <div className="posts-wrapper">
        <h1>{store.getState().title}</h1>
        <p>{store.getState().body}</p>
      </div>
    </>
  );
};

export default PostForm;