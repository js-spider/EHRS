import React from 'react';
import Components from '../../components';
import Group from './group'
import styles from './index.less';

const { EHRProgressVBar } = Components;
export default class TargetBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { preset, target ,mess, remaining=false, presetColor='#A4E9D6',targetColor='#42C6A2', ...other } = this.props;
    return (
      <div className={styles.TargetBar} >
        <div className={styles.barWrapper}>
          <div className={styles.process}>
            <EHRProgressVBar percent={preset} strokeColor={presetColor} remaining={remaining} {...other}></EHRProgressVBar>
            <EHRProgressVBar percent={target} strokeColor={targetColor} remaining={remaining} {...other}></EHRProgressVBar>
          </div>
          <div className={styles.mess}>
            <span>{mess}</span>
          </div>
        </div>
      </div>
    )
  }
}
TargetBar.Group = Group;
