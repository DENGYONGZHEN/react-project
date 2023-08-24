import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/** antd-mobile */
import { ConfigProvider } from 'antd-mobile';
import zhCN from 'antd-mobile/es/locales/zh-CN';
import store from './store';
import { Provider } from 'react-redux';
/**REM */
import 'lib-flexible';
/**样式 */
import './index.less';

/**处理最大宽度 */

(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      deviceW = html.clientWidth,
      root = document.getElementById('root');

    root.style.maxWidth = '750px';
    if (deviceW >= 750) {
      html.style.fontSize = '75px';
    }
  };
  handleMax();
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
