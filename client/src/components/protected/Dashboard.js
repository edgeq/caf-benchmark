import React, { Component } from 'react'
import SideBar from '../Sidebar'
import Content from '../Content'


export default class Dashboard extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <Content />
        </div>
      </div>
    )
  }
}
