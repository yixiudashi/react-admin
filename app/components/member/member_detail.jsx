let React = require('react/addons');
let request = require('superagent');
let {
	TextField
} = require('material-ui');

export default React.createClass({
	mixins:[React.addons.LinkedStateMixin],
	getInitialState: function() {
		var data = {}
		for (var i = 0; i < this.props.data.length; i++) {
			data['data_'+i] = this.props.data[i]
		};
		return data;
	},
	render: function() {
		let form_node = this.props.data_head.map(function(head,index) {
			return(
				<TextField
					style={{marginRight:'20px'}}
					key={index}
					disabled={!this.props.detail_state}
					hintText={head}
					floatingLabelText={head}
					valueLink={this.linkState('data_'+index)} />
			)
		}.bind(this))
		return(
			<form>
				{form_node}
			</form>
		)
	}
})