import React from 'react';

class GetZip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: ''
    };
  }

  onOriginChange (e) {
    this.setState({
      origin: e.target.value
    })
  }

  onDestinationChange (e) {
    this.setState({
      destination: e.target.value
    })
  }

  getZip() {
    this.props.onSendZipCode(this.state.origin, this.state.destination);
  }

  render() {
    return (
      <div>
      <h4>Enter ZiP Codes Below</h4>
        <div className="box1">
          <label>Origion Zip Code</label>
          <input value={this.state.origin} onChange={this.onOriginChange.bind(this)}/>
        </div>
        <div className="box2">
        <label>Destination Zip Code</label>
          <input value={this.state.destination} onChange={this.onDestinationChange.bind(this)}/>
        </div>
        <div>
        <button onClick={this.getZip.bind(this)}> Recommend A Transport </button>
        </div>
    </div>

    )

  }
}

export default GetZip;