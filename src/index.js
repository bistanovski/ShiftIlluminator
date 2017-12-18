import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Illuminator'};
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>ShiftIlluminator</h1>
      </div>

    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));