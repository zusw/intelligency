import React, { Component, Suspense } from 'react';
import { gotoPath } from '../../utils/history';

export default class HomePage extends Component {
  render() {
    return(
      <div className="homeContainer" onClick={() => { gotoPath('/sideBar')}}>
        HomePage
      </div>
    )
  }
}