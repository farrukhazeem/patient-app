
var React = require('react');

var SearchAppointment = React.createClass({

handleSort: function(e) {
  this.props.onReOrder(e.target.id, this.props.orderDir);
}, //handleSort

handleOrder: function(e) {
  this.props.onReOrder(this.props.orderBy,e.target.id);
}, //handleOrder

handleSearch: function(e){
  this.props.onSearch(e.target.value);
}, //handleSearch

render: function() {
    return (
<div className ="row search-appointments">
  <div className="col-sm-offset-3 col-sm-6">
    <div className="input-group">
      <input id="SearchApts" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments"/>
      <div className="input-group-btn">
        <button type="button" className="btn btn-primary dropdown-toggle"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#" id="patName" onClick={this.handleSort}>Patient's' Name {(this.props.orderBy === 'patName')? <span style={{left: '10px'}} className="glyphicon glyphicon-ok"></span>: null }</a></li>
            <li><a href="#" id="aptDate"  onClick={this.handleSort}>Date</a></li>
            <li><a href="#" id="drName"  onClick={this.handleSort}>Doctor's Name</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#" id="asc"  onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc')? <span style={{left: '10px'}} className="glyphicon glyphicon-ok"></span>: null }</a></li>
            <li><a href="#" id="desc" onClick={this.handleOrder}>Desc {(this.props.orderDir === 'desc')? <span style={{left: '10px'}} className="glyphicon glyphicon-ok"></span>: null }</a></li>
          </ul>
      </div>
    </div>
  </div>
</div>

   ) //return
} //render
    
}); // SearchAppointment

module.exports = SearchAppointment;