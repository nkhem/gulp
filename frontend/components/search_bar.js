import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render(){
    console.log('inside search_bar.render:');
    console.log(this.props.onSearchTermChange);
    return (
      <div className='search-bar'>
        <input
          placeholder="bubble tea, wineries, Philz"
          value={this.state.term}
          onChange={ event => {
            this.onInputChange(event.target.value);
          }}
        />
      </div>
    );
  }

  onInputChange(term){
    console.log('inside search_bar.onInputChange:');
    console.log(this.props.onSearchTermChange);

    this.setState({term: term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
