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
    if (distance <= 500) {
      this.setState({
        recommended_transport: `The recommended transportation between ${origin} and ${destination} is Driving`
      });
    } else if (distance > 500) {
      this.setState({
        recommended_transport: `The recommended transportation between ${origin} and ${destination} is Flying`
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
        console.log('result: ', result)
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
      return (<div>
        <h1>Recommend Transportation</h1>
        <GetZip onSendZipCode={this.sendZipCode.bind(this)} />
      </div>)
    } else {
      return (
        <div>
          <h1>Recommend Transportation</h1>
          <GetZip onSendZipCode={this.sendZipCode.bind(this)} />
          <Transport recommended_transport={this.state.recommended_transport} />
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));