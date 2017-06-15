    var React = require('react');

    var AptList = React.createClass( {
    
        handleDelete: function(){
            this.props.onDelete(this.props.whichItem)
        },
        render: function (){
            return (
                <li className="pet-item media">
                    <div className="media-left">
                        <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
                            <span className="glyphicon glyphicon-remove"></span></button>
                        </div>
                    <div className="pet-info media-body">
                        <div className="pet-head">
                            <span className="pat-name"><span className="label-item">Patient Name: </span>
                                {this.props.singleItem.patName}</span>
                            <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
                        </div>
                        <div className="dr-name"><span className="label-item">Doctor Name: </span>
                            {this.props.singleItem.drName}</div>
                        <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
                    </div>
                </li>
            ) //return
        }
    });
    module.exports=AptList;
    