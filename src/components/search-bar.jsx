import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }



  onSubmit(e) {
    e.preventDefault();
    this.props.fetchPhotos(this.state.text)
  }

  handleChange(e) {
    this.setState({text: e.target.value});
    this.props.fetchPhotos(e.target.value)
  }
  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input onChange={this.handleChange.bind(this)} type="text" placeholder="Search Flickr"/>
          <input type="submit" value="search"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchPhotos })(SearchBar);
