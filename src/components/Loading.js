import React, { memo } from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div style={{ padding: '40px 0', textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

export default memo(Loading);
