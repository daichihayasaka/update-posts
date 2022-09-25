import React from 'react';
import PostForm from './components/PostForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updater: false,
    };
  }

  handleUpdater = () => {
    this.setState({
      updater: !this.state.updater,
    })
  };

  render() {
    return (
      <PostForm handleUpdater={this.handleUpdater} />
    );
  }
}

export default App;
