import React from 'react';
import styles from './index.less';

export default class EHRProgressPerGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={styles.EHRProgressPerGroup}>
        {this.props.children}
      </div>
    )
  }
}
