import React from 'react';
import PostForm from './components/PostForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updater: false,
    };
  }

  stateUpdater = () => {
    this.setState({
      updater: !this.state.updater,
    })
  };

  render() {
    return (
      <PostForm stateUpdater={this.stateUpdater} />
    );
  }
}

export default App;
