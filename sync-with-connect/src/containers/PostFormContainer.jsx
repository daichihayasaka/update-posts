import { connect } from "react-redux";
import { getPostAction } from "../features/post/post-action";
import PostForm from "../components/PostForm";

const mapStateToProps = (state) => ({
  PostReducer: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getPostSync: (postInfo) => dispatch(getPostAction(postInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
