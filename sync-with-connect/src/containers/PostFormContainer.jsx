import { connect } from "react-redux";
import { updatePostAction } from "../features/post/post-action";
import PostForm from "../components/PostForm";

const mapStateToProps = (state) => ({
  PostReducer: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updatePostSync: (postInfo) => dispatch(updatePostAction(postInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
