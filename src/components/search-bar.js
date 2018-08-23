import React, { Component } from "react"
import { timingSafeEqual } from "crypto";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      placeHolder: "Tapez votre film..."
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
    // console.log("changed");
    // console.log(event.target.value)
    this.setState({ searchValue: event.target.value })
    // console.log(searchValue)
  }

  handleSearchText(event) {
    this.props.callback(this.state.searchValue);
  }


};

export default SearchBar;
