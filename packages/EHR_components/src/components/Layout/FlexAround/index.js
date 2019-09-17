import React from 'react';
import styles from '../index.less';

export default class FlexAround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const {style,height,width,children} = this.props;
    const styleProps = {height,width,...style};
    return (
      <div className={`${styles.FlexAround} ${styles.flexGroup}`} style={styleProps}>
        {children}
      </div>
    )
  }
}
