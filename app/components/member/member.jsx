import React from 'react/addons';
import MemberList from './member_list.jsx';

var Member={};

Member.Member_list = React.createClass({
	render: function() {
		return (
			<div className="member_list">
				<MemberList/>
			</div>
		);
	}
});
Member.Member_level_set = React.createClass({
	render: function() {
		return (
			<div className="member_level_set">
				会员级别设置
			</div>
		);
	}
});
Member.Member_add = React.createClass({
	render: function() {
		return (
			<div className="member_add">
				添加会员
			</div>
		);
	}
});
Member.Member_score_set = React.createClass({
	render: function() {
		return (
			<div className="member_score_set">
				积分配置信息设置
			</div>
		);
	}
});
Member.Member_back_cash = React.createClass({
	render: function() {
		return (
			<div className="member_back_cash">
				返现设置
			</div>
		);
	}
});
Member.Member_back_cash_list = React.createClass({
	render: function() {
		return (
			<div className="member_back_cash_list">
				返现列表
			</div>
		);
	}
});
Member.Member_withdraw = React.createClass({
	render: function() {
		return (
			<div className="member_withdraw">
				提现管理
			</div>
		);
	}
});

module.exports = Member;