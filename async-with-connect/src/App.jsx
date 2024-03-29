import React from 'react';
import PostFormContainer from './containers/PostFormContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postNum: 1,
    };
  }

  updatePostNum = (e) => {
    this.setState({
      postNum: e.target.value,
    });
  };

  render() {
    return (
      <PostFormContainer
        postNum={this.state.postNum}
        updatePostNum={this.updatePostNum}
      />
    );
  }
}

export default App;
