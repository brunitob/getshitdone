import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';

class FooterMenu extends Component{
	
	render(){
		
	console.log('estamos',this.props.actions);
		return(
			<div className="footer">
				Greetings from <a href="http://brunobalzani.com">brunobalzani.com</a> / 
				<span >
					<Link className="deleted-complete" to="#" onClick={() => this.props.actions.clearCompleted()}> Delete completed task 
						<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
					</Link>
				</span>
			</div>
		);
	}
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(null,
  mapDispatchToProps)(FooterMenu);