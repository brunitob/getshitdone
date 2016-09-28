import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import HeaderMenu from './menu';
import TaskNew from './task_new';
import TaskShow from './task_show';
import FooterMenu from './footer';




export default class App extends Component {
  render() {
    return (
       
     <div className="wrapper">
      <HeaderMenu />
      {this.props.children}
      <TaskShow />
     <FooterMenu />
      </div>
       

    );
  }
}
