import React from 'react/addons';
import './index.scss';
import request from 'superagent';
import {RaisedButton} from 'material-ui';
import {List} from 'material-ui';
import {ListItem} from 'material-ui';
// import {LeftNav} from 'material-ui';
// var Menu = require('material-ui/lib/menus/menu');
// var MenuItem = require('material-ui/lib/menus/menu-item');
// var ArrowDropRight = require('material-ui/lib/')
// import ContentSend from 'material-ui/lib/svg-icons/content/send.js';
// import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts.js';
// import ContentInbox from 'material-ui/lib/svg-icons/content/inbox.js';
// import ActionGrade from 'material-ui/lib/svg-icons/action/grade.js';
// import ReactRouter from 'react-router';
// import styles from 'material-ui/lib/styles';
// import FlatButton from 'material-ui/lib/flat-button.js';
// import FontIcon from 'material-ui/lib/font-icon.js';

// var Router = ReactRouter; // 由于是html直接引用的库，所以 ReactRouter 是以全局变量的形式挂在 window 上
// var Route = ReactRouter.Route; 
// var RouteHandler = ReactRouter.RouteHandler;
// var Link = ReactRouter.Link;
// var StateMixin = ReactRouter.State;


export default React.createClass({
	getInitialState: function() {
		return {
			data: [],
			nav_toggle: ''
		};
	},
	componentDidMount: function() {
		request
			.get('./data_json/jurisdiction.json')
			.set('Content-Type', 'application/json')
			.end(function(err, res) {
				// console.log(res)
				this.setState({
					data: eval("(" + res.text + ")").data
				});
			}.bind(this));
	},
	render: function() {
		return (
			<MenuBox className = "MyComponent-wrapper" data={this.state.data} />

		)
	}
});

var MenuBox = React.createClass({
	getInitialState: function() {
		return {
			is_activate : []
		};
	},

	render: function() {
		var MenuNodes = this.props.data.map(function(oneMenu) {
			var Menu_child = oneMenu.catalogue.map(function(child) {
				return ( 
					<ListItem 
						className={this.state.is_activate[child.name]+' '+"second_menu"}
						primaryText={child.name_show}
						onClick = {function(event){
							var next_activate = []
							next_activate[child.name] = 'is_activate'
							console.log(child.name)
							location.href='#/member/'+child.name
							this.setState({
								is_activate: next_activate
							})
						}.bind(this)}
						key={child.id}/>
					)
			}.bind(this));
			return ( 
				<ListItem
			    	primaryText={oneMenu.name_show}
			    	key={oneMenu.id}
			    	// leftIcon={<ContentInbox />}
			    	nestedItems={Menu_child}
			    	initiallyOpen={false}/>
			);
		}.bind(this));
		return ( 
			 	<List>
			  		{MenuNodes}
			  	</List>
		);
	}
});