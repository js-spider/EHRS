import React from 'react';
import { Components, BComponents} from "../../index";

import styles from './index.less';

const { EHRTargetBar } = BComponents;
const { EHRCarousel } = Components;

export default class AnnualTarget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={styles.AnnualTarget}>
        <EHRCarousel>
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
