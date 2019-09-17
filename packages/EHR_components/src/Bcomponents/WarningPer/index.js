import React from 'react';
import Components from '../../components';

import styles from './index.less';

const { EHRPer } = Components;
const GroupPer = EHRPer.Group;

export default class WarningPer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { itemWidth=80 } = this.props;
    return (
      <div className={styles.WarningPer}>
        <GroupPer>
          <EHRPer main={6} sub={12} width={itemWidth} symbol strokeColor={'BE52BD'} mess={'未处理'}></EHRPer>
          <EHRPer main={3} sub={12} width={itemWidth} symbol strokeColor={'5588F2'} mess={'整改中'}></EHRPer>
          <EHRPer main={9} sub={12} width={itemWidth} symbol strokeColor={'01C8E6'} mess={'已提交'}></EHRPer>
          <EHRPer main={4} sub={12} width={itemWidth} symbol strokeColor={'42C6A2'} mess={'已完成'}></EHRPer>
          <EHRPer main={1} sub={12} width={itemWidth} symbol strokeColor={'FDCA00'} mess={'被驳回'}></EHRPer>
        </GroupPer>
      </div>
    )
  }
}
