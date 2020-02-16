import React, { Component } from 'react'

import ReactPagination from 'react-pagination-page-element'

export default class App extends Component {
  state = {
    currentPage: 1
  }

  paginationEvent(page) {
    this.setState({currentPage: page});
    console.log("Now on page=" + page);
  }

  render () {
    return (
      <div>
        <ReactPagination 
          totalEntries={133} 
          currentPage={this.state.currentPage}
          limitPerPage={10}
          maxButtons={3}
          paginationEvent={(e, page) => this.paginationEvent(page)}/>
      </div>
    )
  }
}
