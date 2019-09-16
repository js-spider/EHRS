import React from 'react';
import { Icon } from 'antd';

import styles from './index.less';

export default class EHRCarousel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentChild : 0
    }
  }
  prev = () => {
    const { currentChild } = this.state;
    if(currentChild > 0){
      this.setState({
        currentChild:currentChild-1
      })
      this.translate();
    }
  }

  next = () => {
    const { currentChild } = this.state;
    if(currentChild < this.props.children.length-1){
      this.setState({
        currentChild:currentChild + 1
      })
      this.translate('-');
    }
  }
  translate = (symbol='') => {
    const ulNode = document.getElementById('carousel-ul');
    const childrenLength = this.props.children.length;
    const { currentChild } = this.state;
    const ulNodeWidth = ulNode.clientWidth;
    ulNode.style.transform = `translatex(${symbol}${ulNodeWidth/childrenLength}px)`;
    ulNode.style.transition = '0.6s';
    ulNode.style.left = `${-(currentChild*100)}%`;
  }
  render() {
    const length = this.props.children.length;
    const Childrens = React.Children.map(this.props.children, function(item){
      return <li style={{width:length>0 ? `${100/length}%`: '100%'}}>{item}</li>
    })
    return (
      <div className={styles.EHRCarousel} >
        <div className={styles.arrowWrapper}><Icon type="left" onClick={this.prev} /></div>
        <div className={styles.content} >
          <ul id={'carousel-ul'} style={{width:`${100 * length}%`}}>
            {Childrens}
          </ul>
        </div>
        <div className={styles.arrowWrapper}><Icon type="right" onClick={this.next}/></div>
      </div>
    )
  }
}
