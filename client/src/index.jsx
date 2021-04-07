import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import GetZip from './components/GetZipCodes.jsx';
import Transport from './components/TransportType.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Recommended_Transport: ''
    };
  }



  getDistance(origin, destination) {
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
      success: function(){
        console.log('success');
      }
    });

      console.log(`${origin} and ${destination} were submitted`);

  }

  render() {

      return (
      <div>
        <h1>Suggest A Transportation</h1>
        <GetZip onGetDistance={this.getDistance.bind(this)} />
        <Transport onSearch={this.state.Recommended_Transport} />

      </div>
      )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));