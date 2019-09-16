import React from 'react';

import styles from './index.less';

export default class EHRProgressVBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { percent=0,strokeColor,strokeWidth,status,remaining=true } = this.props;
    const allStyles = {width:strokeWidth,borderRadius:strokeWidth/2};
    const activeStyles = {backgroundColor:strokeColor,borderRadius:strokeWidth/2,height:`${percent}%`};
    if(!remaining) allStyles.backgroundColor = 'transparent';
    return (
      <div className={styles.EHRProgressVBar} >
        <div className={styles.all} style={allStyles}>
          <div className={styles.active} style={activeStyles}>
            { status==='active' && <div className={styles.isActive}></div>}
          </div>
        </div>
      </div>
    )
  }
}
