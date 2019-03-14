import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      maxChars: 140
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        <p>{this.state.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
