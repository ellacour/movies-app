import React, { Component } from "react"
import { timingSafeEqual } from "crypto";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      placeHolder: "Rechechez un film...",
      lockedSearch: false,
      interval: 1000,
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto input-group">
          <input type="text" className="form-control input-lg" onKeyUp={this.handleChange.bind(this)} placeholder={this.state.placeHolder} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleSearchText.bind(this)}>Go</button>
          </span>
        </div>
      </div>
    )
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
    if (!this.state.onClickListItem){
      this.setState({lockedSearch: true})
      setTimeout(function(){ this.search()}.bind(this), this.state.interval)
    }
  }
  
  handleSearchText(event) {
    this.search();
  }
  
  search() {
    this.setState({lockedSearch: false});
    this.props.callback(this.state.searchValue);
  }

};

export default SearchBar;
