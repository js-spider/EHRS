import React from 'react';
import Components from "../../components";
import EHRTargetBar from '../TargetBar'

import styles from './index.less';

const { EHRCarousel } = Components;


export default class AnnualTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { width, height,style } = this.props;
    const styleProps = { width, height, ...style }
    return (
      <div className={styles.AnnualTarget} style={styleProps}>
        <EHRCarousel >
          <div>
            <EHRTargetBar.Group>
              <EHRTargetBar preset={40} target={60} presetColor={'#FFE2A9'} targetColor={'#FDA702'} mess={'目标1'}></EHRTargetBar>
              <EHRTargetBar preset={40} target={60} presetColor={'#B6CEFF'} targetColor={'#5588F2'} mess={'目标2'}></EHRTargetBar>
              <EHRTargetBar preset={40} target={60} mess={'目标3'}></EHRTargetBar>
              <EHRTargetBar preset={40} target={60} mess={'目标4'}></EHRTargetBar>
            </EHRTargetBar.Group>
          </div>
        </EHRCarousel>
      </div>
    )
  }
}
