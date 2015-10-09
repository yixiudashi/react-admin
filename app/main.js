import React from 'react/addons';
import $ from 'jquery';
import 'noty';
import './main.scss'
import ReactRouter from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import InjectTapEventPlugin from 'react-tap-event-plugin';
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var Router = ReactRouter; // 由于是html直接引用的库，所以 ReactRouter 是以全局变量的形式挂在 window 上
var Route = ReactRouter.Route; 
var RouteHandler = ReactRouter.RouteHandler;
var Link = ReactRouter.Link;
var StateMixin = ReactRouter.State;

InjectTapEventPlugin();

import Meaus from './components/menu/index.jsx';
import Member from './components/member/member.jsx';


var Welcome = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	render: function() {
		return (
			<div>
				<div id="header">
					<span className='logo'></span>
				</div>
				<div id="menu">
					<Meaus/>
				</div>
				<section id="content">
					<RouteHandler/>
				</section>
			</div>
		);
	}
});

var MemberBox = React.createClass({
	render: function() {
		return (
			<div className="member">
				<RouteHandler/>
			</div>
		);
	}
});


// 定义页面上的路由
var routes = (
		<Route handler={Welcome}>
			<Route name='member'  handler={MemberBox}>
				<Route name='member_list' handler={Member.Member_list}></Route>
				<Route name='member_level_set' handler={Member.Member_level_set}></Route>
				<Route name='member_add' handler={Member.Member_add}></Route>
				<Route name='member_score_set' handler={Member.Member_score_set}></Route>
				<Route name='member_back_cash' handler={Member.Member_back_cash}></Route>
				<Route name='member_back_cash_list' handler={Member.Member_back_cash_list}></Route>
				<Route name='member_withdraw' handler={Member.Member_withdraw}></Route>
			</Route>
		</Route>
);


// 将匹配的路由渲染到 DOM 中
Router.run(routes, Router.HashLocation, function(Root){
  React.render(React.createElement(Root, null), document.body);
});