import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false,
    };
  }

  // Function to toggle the state
  toggleOnOff = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  render() {
    const { isOn } = this.state;

    return (
      <div>
        <p>The button is {isOn ? 'on' : 'off'}</p>
        <button onClick={this.toggleOnOff}>
          {isOn ? 'Turn Off' : 'Turn On'}
        </button>
      </div>
    );
  }
}
export default Button;