import React from 'react';
import { Progress } from 'antd';
import Group from './group';

import styles from './index.less';

export default class EHRProgressPer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getFormat= (main,sub,symbol) => {
    if(symbol === true) symbol = '/';
    return () => {
      return symbol ? (
        <span>
          <span className={styles.symbolMain}>
            {main}
          </span>
          <span className={styles.symbolSub}>
            {symbol}{sub}
          </span>
        </span>
      ): (
        <ul>
          <li className={styles.main}>
            {main}
          </li>
          <li className={styles.sub}>
            {sub}
          </li>
        </ul>
      );
  }
  }
  render(){
    const {percent,main,sub,symbol,mess,...other} = this.props;
    let newPercent =  percent ? percent : ( Math.floor(100* (main/sub)) );
    const format = this.getFormat(main,sub,symbol);
    return (
      <div className={styles.EHRProgressPer}>
        <Progress type={'circle'} percent={newPercent} format={format} {...other} />
        <div className={styles.perMess}>{mess}</div>
      </div>
    )
  }
}

EHRProgressPer.Group = Group;
