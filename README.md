# react-pagination-page-element

> This plugin will help to make a pagination element 

[![NPM](https://img.shields.io/npm/v/react-pagination-page-element.svg)](https://www.npmjs.com/package/react-pagination-page-element) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Pagination](https://user-images.githubusercontent.com/25843631/74607121-160caa00-5100-11ea-9b76-7e7e4a070e80.JPG)

## Install

```bash
npm install --save react-pagination-page-element
```

## Usage

```jsx
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


```

## License

MIT © [pritomkucse](https://github.com/pritomkucse)
