import { connect } from "react-redux";
import { updatePostAction, fetchPost } from "../features/post/post-action";
import PostForm from "../components/PostForm";

const mapStateToProps = (state) => ({
    post: state.post,
});

const mapDispatchToProps = (dispatch) => ({
    updatePostSync: (postInfo) => dispatch(updatePostAction(postInfo)),
    updatePostAsync: (postNum) => dispatch(fetchPost(postNum)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);
