import React from 'react';
import { Skeleton } from 'antd-mobile';

/**
 *
 * 对 antd-mobile 中的 Skeleton 进行封装
 */
const SkeletonScreen = function SkeletonScreen() {
  return (
    <div className="skeleton-screen-box">
      <Skeleton.Title animated />
      <Skeleton.Paragraph lineCount={5} animated />
    </div>
  );
};

export default SkeletonScreen;
