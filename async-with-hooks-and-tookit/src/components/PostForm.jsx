import { store } from "../index";

const PostForm = (props) => {
  console.log(store.getState());
  return (
    <>
      <div className="input-wrapper">
        <input type="number" value={props.postNum} onChange={props.updatePostNum} min={1} />

        <button
          className="btn-async"
          onClick={() => props.updatePostAsync(props.postNum)}
        >
          更新 (非同期)
        </button>

        <button
          className="btn-reset"
          onClick={() => props.updatePostSync({ title: '', body: '' })}
        >
          リセット
        </button>
      </div>
      
      <div className="posts-wrapper">
        <h1>{props.post.title}</h1>
        <p>{props.post.body}</p>
      </div>
    </>
  );
};

export default PostForm;