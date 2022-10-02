import { useDispatch, useSelector, useStore } from 'react-redux';
import { postSlice, fetchPost } from "../features/post";
import PostForm from "../components/PostForm";

const EnhancedPostForm = (props) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  console.log(useStore().getState());

  return (
    <PostForm
      postNum={props.postNum}
      updatePostNum={props.updatePostNum}
      post={post}
      updatePostSync={(postInfo) => dispatch(postSlice.actions.updated(postInfo))}
      updatePostAsync={(postNum) => dispatch(fetchPost(postNum))}
    />
  )
}

export default EnhancedPostForm;