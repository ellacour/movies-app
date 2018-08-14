import React, { Component } from 'react'
import { timingSafeEqual } from 'crypto';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Tapez votre film..."
    }
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-8 mx-auto'>
          <input type='text' className='form-control input-lg' onChange={this.handleChange.bind(this)} placeholder={this.state.placeHolder} />
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

};

export default SearchBar;
