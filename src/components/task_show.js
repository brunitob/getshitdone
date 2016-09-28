import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import TaskItem from './task_item' ;
import _ from "lodash";

class TaskShow extends Component{
	
	renderItem(todo) {
		const todoSortByComplete = _.sortBy(this.props.todos, 'complete')
		return todoSortByComplete.map((todo) => {
			const { actions } = this.props
			
			return <TaskItem key={todo.id} todo={todo} actions={actions} /> 
		})
	}
	
	render(){
		return ( <div> {this.renderItem()} </div> );
	}
}

function mapStateToProps({ todos }){
	return { todos }; // lo mismo { weather: weather }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps,
  mapDispatchToProps)(TaskShow);
