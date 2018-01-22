import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DisplayForm extends Component {
    render () {
        return (
            <span> Form results would go here </span>
        )
    }
}


function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(DisplayForm);