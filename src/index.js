import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ReactPagination extends Component {
  static propTypes = {
    totalEntries: PropTypes.number.isRequired,
    limitPerPage: PropTypes.number,
    currentPage: PropTypes.number,
    maxButtons: PropTypes.number,
    paginationEvent: PropTypes.func.isRequired
  }

  static defaultProps = {
    limitPerPage: 10,
    currentPage: 1,
    maxButtons: 3
  }

  createList (start, end) {
    let li = []

    const {
      currentPage, paginationEvent
    } = this.props

    for (let i = start; i <= end; i++) {
      let class2 = (currentPage === i) ? 'styles_active__3G4VH' : ''
      li.push(<span key={i} onClick={(e) => paginationEvent(e, i)} className={class2}>{i}</span>)
    }

    return li
  }

  render () {
    const {
      totalEntries, limitPerPage, currentPage, maxButtons, paginationEvent
    } = this.props

    if (totalEntries < 0) {
      throw ('Total number of entries must be positive number')
    }

    if (limitPerPage <= 0) {
      throw ('Limit per page must be positive number')
    }

    if (currentPage <= 0) {
      throw ('Current page must be positive number')
    }

    if (maxButtons <= 0) {
      throw ('Number of buttons must be positive number')
    }

    let newMaxButtons = Math.ceil(maxButtons / 2)

    let last = Math.ceil(totalEntries / limitPerPage)
    let start = ((currentPage - newMaxButtons) > 0) ? currentPage - newMaxButtons : 1
    let end = ((currentPage + newMaxButtons) < last) ? currentPage + newMaxButtons : last

    return (
      <div className={styles.react_pagination_page_element__ul}>
        {currentPage > 1 ? (<span onClick={(e) => paginationEvent(e, currentPage - 1)}>&laquo;</span>) : ''}

        {start > 1 ? (<span onClick={(e) => paginationEvent(e, 1)}>1</span>) : ''}
        {start > 1 ? (<span className='disabled'>..</span>) : ''}

        {this.createList(start, end)}

        {end < last ? (<span className='disabled'>..</span>) : ''}
        {end < last ? (<span onClick={(e) => paginationEvent(e, last)}>{last}</span>) : ''}

        {currentPage !== last ? (<span onClick={(e) => paginationEvent(e, currentPage + 1)}>&raquo;</span>) : ''}
      </div>
    )
  }
}
