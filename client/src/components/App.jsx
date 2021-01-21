import React from 'react';
import ReviewList from './List';
import ReviewSnapShot from './ReviewSnapShot';
import FormModal from './FormModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <ReviewSnapShot />
        </div>
        <ReviewList />
      </div>
    );
  }
}

export default App;
