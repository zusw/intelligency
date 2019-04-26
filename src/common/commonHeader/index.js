import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import { navChange } from './store/actionCreators';
import Logo from '../../static/images/logos.jpg';

const MenuItem = Menu.Item;

class CommonHeader extends Component {
  navChange=(val) => {
    const { getChangedNav } = this.props;
    getChangedNav(val)
  }
  render() {
    const { currentNav } = this.props;
    console.log(currentNav, 8898)
    const personIntelligency = (
      <Menu>
        <MenuItem>弱AI</MenuItem>
        <MenuItem>强AI</MenuItem>
      </Menu>
    );
    const marchin = (
      <Menu>
        <MenuItem>生活家务</MenuItem>
        <MenuItem>儿童玩伴</MenuItem>
        <MenuItem>工作学习</MenuItem>
      </Menu>
    );

    return(
      <div className="commonHeader">
        <img src={Logo} alt="logo" className="logoImg" />
        <ul className="headerNav">
          <li onClick={() => { this.navChange(1); }} className={`${currentNav === 1 ? 'navActive' : ''}`}>首页</li>
          <li onClick={() => { this.navChange(2); }} id="personIntelligency" className={`${currentNav === 2 ? 'navActive' : ''}`}>
            <Dropdown getPopupContainer={() => document.getElementById('personIntelligency')} overlay={personIntelligency} placement="bottomCenter">
              <div>人工智能</div>
            </Dropdown>
          </li>
          <li onClick={() => { this.navChange(3); }} id="marchin" className={`${currentNav === 3 ? 'navActive' : ''}`}>
            <Dropdown getPopupContainer={() => document.getElementById('marchin')} overlay={marchin} placement="bottomCenter">
              <div>机器人</div>
            </Dropdown>
          </li>
          <li onClick={() => { this.navChange(4); }} className={`${currentNav === 4 ? 'navActive' : ''}`}>无人机</li>
          <li onClick={() => { this.navChange(5); }} className={`${currentNav === 5 ? 'navActive' : ''}`}>机器人展示</li>
        </ul>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    currentNav: state.getIn(['headerNav', 'currentNav'])
  }
}
const mapDispatch = (dispatch) => ({
  getChangedNav(val) {
    dispatch(navChange(val))
  }
})

export default connect(mapState, mapDispatch)(CommonHeader);
