import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetZip from './components/GetZipCodes.jsx';
import Transport from './components/TransportType.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recommended_transport: '',
    };
  }

  componentDidMount() {

  }

  getRecommendedTransportation(distance, origin, destination) {
    const prefixText = "The recommended mode of transportation between";
    if (distance <= 4) {
      this.setState({
        recommended_transport: `Walking is recommended from ${origin} to ${destination}. Walking is good for your health! Average walking time is around ${(distance*12).toFixed(0)} minutes.`
      });
    } else if (distance > 4 && distance <= 50) {
      this.setState({
        recommended_transport: `${prefixText} ${origin} and ${destination} is pubic transport. Average travel time is ${(distance*0.92).toFixed(0)} minutes.`
      });
    } else if (distance > 50 && distance <= 500) {
      this.setState({
        recommended_transport: `${prefixText} ${origin} and ${destination} is Driving. Average driving time is about ${((distance*0.92)/60).toFixed(2)} hours.`
      });
    } else {
      this.setState({
        recommended_transport: `${prefixText} ${origin} and ${destination} is Flying! Average flight time is ${((distance*0.15)/60).toFixed(2)} hours.`
      });
    };
  }

  sendZipCode(origin, destination) {
    let url = 'http://localhost:4600/distance';
    var request = $.ajax({
      url: url,
      method: 'POST',
      dataType: "json",
      data: JSON.stringify({
        origin: origin,
        destination: destination
      }),
      contentType: "application/json",
      success: function (result) {
        //console.log('result: ', result)
        if(result.error_code) {
          this.setState({
            recommended_transport: `Please enter valid zip codes`
          });
        } else {
          this.getRecommendedTransportation(result.distance, origin, destination);
        }
      }.bind(this),
      error: function(error) {
        this.setState({
          recommended_transport: `Please enter valid zip codes`
        });
      }.bind(this)

    });
    console.log(`${origin} and ${destination} were submitted`);

  }
  render() {
    if (this.state.recommended_transport === '') {
      return (<div style={{color: "#6200FF", padding: "25px", fontWeight:"bold", background: "#81C784", height: "100vh"}}>
        <div style={{ margin: "auto", width: "50%", padding: "10px"}}>
        <h2 style={{color: "black"}}>Recommend Transportation</h2>
        <GetZip onSendZipCode={this.sendZipCode.bind(this)} />
        </div>
      </div>)
    } else {
      return (
        <div style={{color: "#6200FF", padding: "25px", fontWeight:"bold", background: "#81C784", height: "100vh", backgroundImage:"background"}}>
           <div style={{ margin: "auto", width: "50%", padding: "10px"}}>
          <h2 style={{color: "black"}}>Recommended Transportation</h2>
          {/* <GetZip onSendZipCode={this.sendZipCode.bind(this)} /> */}
          <Transport  recommended_transport={this.state.recommended_transport} />
          </div>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));