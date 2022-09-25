import { connect } from "react-redux";
import { getPostAction, fetchPost } from "../features/post/post-action";
import PostForm from "../components/PostForm";

const mapStateToProps = (state) => ({
    post: state.post,
});

const mapDispatchToProps = (dispatch) => ({
    getPostSync: (postInfo) => dispatch(getPostAction(postInfo)),
    getPostAsync: (postNum) => dispatch(fetchPost(postNum)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);
