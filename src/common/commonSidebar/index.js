import React, { Component, Suspense } from 'react';
import { gotoPath } from '../../utils/history';

export default class CommonSidebar extends Component {
  render() {
    return(
      <div onClick={() => { gotoPath('/homepage')}}>
        CommonSidebar
      </div>
    )
  }
}