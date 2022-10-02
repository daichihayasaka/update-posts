import { useDispatch, useSelector } from 'react-redux';
import { updatePostAction, fetchPost } from "../features/post/post-action";
import PostForm from "../components/PostForm";

const EnhancedPostForm = (props) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <PostForm
      postNum={props.postNum}
      updatePostNum={props.updatePostNum}
      post={post}
      updatePostSync={(postInfo) => dispatch(updatePostAction(postInfo))}
      updatePostAsync={(postNum) => dispatch(fetchPost(postNum))}
    />
  )
}

export default EnhancedPostForm;