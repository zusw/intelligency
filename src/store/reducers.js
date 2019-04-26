// // 多个小的reducer的集合
// // export default combineReducers({
// // })
// // import * as constants from './constants'
// import { fromJS } from 'immutable'
// // import * as constants from './constants'
// // 使用 immutable 会让对象不可更改
// const defaultState = fromJS({
// });
// // 事件处理
// export default (state = defaultState, action) => {
//   console.log(action, '123action')
//   switch(action.type) {
//     default:
//       return state;
//   }
// }
import { combineReducers } from 'redux-immutable';
import commonHeaderNav from '../common/commonHeader/store/reducer';
// 多个小的reducer的集合
export default combineReducers({
  headerNav: commonHeaderNav
})