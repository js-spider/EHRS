import React from 'react';
import styles from './index.less';

export default class TargetBarGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={`${styles.TargetBarGroup} ${styles.flexGroup}` }>
        {this.props.children}
      </div>
    )
  }
}
