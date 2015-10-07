let React = require('react/addons');
let request = require('superagent');
let {
	Table,
	TableHeader,
	TableRow,
	TableHeaderColumn,
	TableBody,
	TableRowColumn,
	RaisedButton,
	TextField,
	FlatButton,
	Dialog
} = require('material-ui');
let {
	Button
} = require('react-bootstrap');


export default React.createClass({
	getInitialState: function() {
		return {
			data_head:[],
			data_body: [],
			selectRows: [],
			detail_state: false,
			who_detail: {},
			detail_button_no: '关闭',
			detail_button_yes: '编辑',
		};
	},
	componentDidMount: function() {
		request
			.get('./data_json/member_list.json')
			.set('Content-Type', 'application/json')
			.end(function(err, res) {
				var data = (eval("(" + res.text + ")").data);
				this.setState({
					data_head: data.shift(),
					data_body: data,
				});
			}.bind(this));
	},
	hand_select: function(){
		console.log(this.refs.table.state.selectedRows)
	},
	hand_click_cell:function(rowNumber, columnId){
		this.setState({
			who_detail:this.state.data_body[rowNumber]
		});
		return
	},
	show_detail:function(rowNumber){
		this.refs.member_detail.show();
	},
	cancel_detail:function(){
		this.refs.member_detail.dismiss();
		this.setState({
			detail_state: false,
			detail_button_no: '关闭',
			detail_button_yes: '编辑',
		})
	},
	confirm_alter:function(){

	},
	change_detail_state:function(){
		if(!this.state.detail_state){
			this.setState({
				detail_state: true,
				detail_button_no: '取消编辑/关闭',
				detail_button_yes: '提交',
			})
		}else{
			this.refs.confirm_alter.show();
		}
	},
	confirm_button_no:function(){
		this.refs.confirm_alter.dismiss();
	},
	confirm_button_yes:function(){
		this.refs.confirm_alter.dismiss();
		this.refs.member_detail.dismiss();
		this.refs.tip_result.show();
	},
	render: function() {
		let detailActions = [
	      <FlatButton
	        key={1}
	        label={this.state.detail_button_no}
	        secondary={true}
	        onTouchTap={this.cancel_detail}/>,
	      <FlatButton
	        key={2}
	        label={this.state.detail_button_yes}
	        primary={true}
	        onTouchTap={this.change_detail_state}/>
	    ];
	    let confirmActions = [
	      <FlatButton
	        key={1}
	        label="取消"
	        secondary={true}
	        onTouchTap={this.confirm_button_no} />,
	      <FlatButton
	        key={2}
	        label="确定"
	        primary={true}
	        onTouchTap={this.confirm_button_yes} />
	    ];
		var data_body = this.state.data_body;
		var data_head = this.state.data_head;
		var tablerows =  data_body.map(function(member) {
			return (
					<TableRow>
				      	<TableRowColumn>{member[0]}</TableRowColumn>
				      	<TableRowColumn>{member[1]}</TableRowColumn>
				      	<TableRowColumn>{member[2]}</TableRowColumn>
				      	<TableRowColumn>{member[5]}</TableRowColumn>
				      	<TableRowColumn>{member[4]}</TableRowColumn>
				      	<TableRowColumn>{member[3]}</TableRowColumn>
				      	<TableRowColumn>{member[6]}</TableRowColumn>
				      	<TableRowColumn tooltip=''><TextField hintText="Hint Text" /></TableRowColumn>
				      	<TableRowColumn style={{'width':'120px'}}>
				      		<Button 
				      		bsStyle="link" 
				      		onClick={this.show_detail}
				      		style={{'font-size':'12px'}}>查看详情/编辑</Button>
				      	</TableRowColumn>
				    </TableRow>
				);
		}.bind(this))
		return (
			<div>
				<Table
				  onCellClick={this.hand_click_cell}
				  ref='table'
				  fixedHeader={true}
				  selectable={true}
				  multiSelectable={true}
				  onRowSelection={this._onRowSelection}>
				  <TableHeader enableSelectAll={true}>
				    <TableRow>
				      <TableHeaderColumn colSpan="9" style={{textAlign: 'center'}}>
				        <h3 style={{'font-weight':'bold'}}>会员列表</h3>
				      </TableHeaderColumn>
				    </TableRow>
				    <TableRow>
				      <TableHeaderColumn tooltip=''>{data_head[0]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[1]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[2]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[5]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[4]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[3]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>{data_head[6]}</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>输入</TableHeaderColumn>
				      <TableHeaderColumn tooltip=''>按钮</TableHeaderColumn>
				    </TableRow>
				  </TableHeader>
				  <TableBody
				  	ref='tablebody'
				    deselectOnClickaway={false}
				    showRowHover={true}
				    stripedRows={true}>
				  	{tablerows}
				  </TableBody>
				</Table>
				<Dialog
		            ref="member_detail"
		            title={
		            	<h3 style={{'padding-top':'20px'}}>
			            	<span style={{'color':'#ff4081'}}>
				            	{this.state.who_detail[1] +" "}
			            	</span>
			            	<span style={{'font-size':'15px'}}>
				            	会员详情
			            	</span> 
		            	</h3>
		            }
		            actions={detailActions}
		            modal={this.state.detail_state}
		            autoDetectWindowHeight={true}
		            autoScrollBodyContent={true}>
		            <div style={{height: '1000px'}}>
		              Really long content
		            </div>
		        </Dialog>
		        <Dialog
		        	contentStyle={{'width':'500px'}}
		        	bodyStyle={{'height':'0px','padding':'0'}}
		            ref="confirm_alter"
		            title="确定提交当前的修改"
		            actions={confirmActions}
		            modal={true}>
		        </Dialog>
		        <Dialog
		        	contentStyle={{'width':'300px'}}
		        	bodyStyle={{'height':'0px','padding':'0'}}
		            ref="tip_result"
		            modal={false}>
		            <p style={{'padding-top':'10px','color':'#00bcd4'}}>修改成功</p>
		        </Dialog>
			</div>

		)
	}
});

