import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origion: '',
      destination: '',
      distance: ''
    };
  }

  onChange (e) {
    this.setState({
      distance: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.distance);
  }

  render() {
    return (<div>
      <h4>Enter ZiP Codes Below</h4>
      Origion zip code: <input value={this.state.origion} />  Destination zip code < input value={this.state.destination} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Suggest A Transportation </button>
    </div>)

  }
}

export default Search;