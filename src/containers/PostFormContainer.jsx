import { connect } from "react-redux"
import { getPostAction, fetchPost } from "../features/post/post-action"
import PostForm from "../components/PostForm"

const mapStateToProps = (state) => ({
    post: state.post,
})

const mapDispatchToProps = (dispatch) => ({
    getPostSync: (postState) => dispatch(getPostAction(postState)),
    getPostAsync: (postNum) => dispatch(fetchPost(postNum)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);
