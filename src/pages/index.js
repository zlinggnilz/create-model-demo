import React, { memo } from 'react';
import { ContentTable, TablePage } from 'ant-design-kit';
import { Button, Card } from 'antd';
import { connect } from 'dva';

TablePage.config({
  size: 10,
});

const Demo = ({ pageList, loading, dispatch }) => {
  const extra = (
    <>
      <Button type="primary" className="mr-3">
        button
      </Button>
    </>
  );

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
  ];

  return (
    <Card>
      <ContentTable
        extra={extra}
        type="demo/list"
        // payload={}
        dataSource={pageList.list}
        pageData={pageList.pager}
        loading={loading}
        columns={columns}
        rowKey="id"
        dispatch={dispatch}
      />
    </Card>
  );
};

export default connect(({ demo, loading }) => ({
  pageList: demo.list,
  loading: loading.effects['demo/list'],
}))(memo(Demo));
