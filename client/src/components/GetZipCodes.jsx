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
    this.setState({
      origin: '',
      destination: ''
    })
  }

  render() {
    return (
      <div>
      <h4 style={{color: "black", padding: "3px"}}>Please enter origion and destination ZiP Codes below.</h4>
        <div style={{color: "black", float: "left", padding: "3px"}}>
          <label>Origion Zip Code:</label>
          <input size="8" value={this.state.origin} onChange={this.onOriginChange.bind(this)}/>
        </div>
        <div style={{color: "black", float: "center", padding: "3px"}}>
        <label>Destination Zip Code:</label>
          <input size="8" value={this.state.destination} onChange={this.onDestinationChange.bind(this)}/>
        </div>
        <div>
        <button onClick={this.getZip.bind(this)} style={{color: "navy", padding: "5px", fontWeight:"bold"}}> Recommend A Transport </button>
        </div>
    </div>

    )

  }
}

export default GetZip;