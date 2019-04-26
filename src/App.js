import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from "history";
import store from './store';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
// import { Provider } from 'react-redux';
import PageLoading from './common/pageLoading';
import './static/less/index.less';

const history = createBrowserHistory();
const Login = lazy(() => import('./container/login/login'));
const HomePage = lazy(() => import('./container/homePage'));
const CommomHeader = lazy(() => import('./common/commonHeader'));
const CommonSidebar = lazy(() => import('./common/commonSidebar'));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<PageLoading />}>
        <Router history={history}>
          {
            sessionStorage.getItem("token") === 'true' ? (
              <div className="routeLay">
                <CommomHeader />
                <Route exact  path="/homepage" component={HomePage} />
                <Route exact path="/sideBar" component={CommonSidebar} />
              </div>
            ) : (
              <Route exact path="/" component={Login} />
            )
          }
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
