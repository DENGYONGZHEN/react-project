import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from 'antd-mobile';

/**
 *
 * 对 antd-mobile 的NavBar组件进行二次封装
 */
const NavigateBar = function NavigateBar(props) {
  let { title } = props;
  const handleBack = () => {};

  return <NavBar onBack={handleBack}>{title}</NavBar>;
};

NavigateBar.defaultProps = {
  title: '个人中心',
};

NavigateBar.propTypes = {
  title: PropTypes.string,
};

export default NavigateBar;
