import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ''
    };
  }

  render() {

      return (
      <div>
        <h1>Suggest A Transportation</h1>
        <Search onSearch={this.search} />

      </div>
      )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));