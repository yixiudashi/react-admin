let React = require('react');
let Router = require('react-router');
let {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
  TextField,
  Toggle,
} = require('material-ui');



class TablePage extends React.Component {

  constructor(props) {
    super(props);

    this._onToggle = this._onToggle.bind(this);
    this.onChange = this._onChange.bind(this);
    this._onRowSelection = this._onRowSelection.bind(this);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',
    };
  }

  render() {





    let propContainerStyle = {
      width: '200px',
      overflow: 'hidden',
      margin: '20px auto 0 auto'
    };

    return (

          <div className='table-examples'>
            <Table
              height={this.state.height}
              fixedHeader={this.state.fixedHeader}
              fixedFooter={this.state.fixedFooter}
              selectable={this.state.selectable}
              multiSelectable={this.state.multiSelectable}
              onRowSelection={this._onRowSelection}>
              <TableHeader enableSelectAll={this.state.enableSelectAll}>
                <TableRow>
                  <TableHeaderColumn colSpan="3" tooltip='Super Header' style={{textAlign: 'center'}}>
                    Super Header
                  </TableHeaderColumn>
                </TableRow>
                <TableRow>
                  <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                  <TableHeaderColumn tooltip='The Status'>Status</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                deselectOnClickaway={this.state.deselectOnClickaway}
                showRowHover={this.state.showRowHover}
                stripedRows={this.state.stripedRows}>
              <TableRow selected={true}>
                  <TableRowColumn>1</TableRowColumn>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>2</TableRowColumn>
                  <TableRowColumn>Randal White</TableRowColumn>
                  <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow selected={true}>
                  <TableRowColumn>3</TableRowColumn>
                  <TableRowColumn>Stephanie Sanders</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>4</TableRowColumn>
                  <TableRowColumn>Steve Brown</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>5</TableRowColumn>
                  <TableRowColumn>Joyce Whitten</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>6</TableRowColumn>
                  <TableRowColumn>Samuel Roberts</TableRowColumn>
                  <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn>7</TableRowColumn>
                  <TableRowColumn>Adam Moore</TableRowColumn>
                  <TableRowColumn>Employed</TableRowColumn>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableRowColumn>ID</TableRowColumn>
                  <TableRowColumn>Name</TableRowColumn>
                  <TableRowColumn>Status</TableRowColumn>
                </TableRow>
                <TableRow>
                  <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                    Super Footer
                  </TableRowColumn>
                </TableRow>
              </TableFooter>
            </Table>

            <div style={propContainerStyle}>
              <h3>Table Properties</h3>
              <TextField
                floatingLabelText='Table Body Height'
                defaultValue={this.state.height}
                onChange={this._onChange} />

              <Toggle
                name='fixedHeader'
                label='Fixed Header'
                onToggle={this._onToggle}
                defaultToggled={this.state.fixedHeader} />

              <Toggle
                name='fixedFooter'
                label='Fixed Footer'
                onToggle={this._onToggle}
                defaultToggled={this.state.fixedFooter} />

              <Toggle
                name='stripedRows'
                label='Stripe Rows'
                onToggle={this._onToggle}
                defaultToggled={this.state.stripedRows} />

              <Toggle
                name='showRowHover'
                label='Show Row Hover'
                onToggle={this._onToggle}
                defaultToggled={this.state.showRowHover} />

              <Toggle
                name='selectable'
                label='Selectable'
                onToggle={this._onToggle}
                defaultToggled={this.state.selectable} />

              <Toggle
                name='multiSelectable'
                label='Multi-Selectable'
                onToggle={this._onToggle}
                defaultToggled={this.state.multiSelectable} />

              <Toggle
                name='enableSelectAll'
                label='Enable Select All'
                onToggle={this._onToggle}
                defaultToggled={this.state.enableSelectAll} />

              <Toggle
                name='deselectOnClickaway'
                label='Deselect On Clickaway'
                onToggle={this._onToggle}
                defaultToggled={this.state.deselectOnClickaway} />

            </div>
          </div>

    );
  }

  _onChange(e) {
    this.setState({height: e.target.value});
  }

  _onToggle(e, toggled) {
    let state = {};
    state[e.target.name] = toggled;
    this.setState(state);
  }

  _onRowSelection(rows) {
    console.log(rows);
  }
}

module.exports = TablePage;