import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SampleForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {}; 
    }

    render () {
        
        return (
          <div className="sampleForm">
            <div className="formElement">
                <label>First Name</label>
                <input id="firstName" type="text" 
                    value={ this.state.firstname }
                    onChange={(e) => this.stateChange(e) }  />
            </div>
            <div className="formElement">
                <label>Last Name</label>
                <input id="lastName" type="text" 
                    value={ this.state.lastname }
                    onChange={(e) => this.stateChange(e) }  />
            </div>
            <div className="formElement">
                <label>E-mail</label>
                <input id="emailAddress" type="text" 
                    value={ this.state.emailaddress }
                    onChange={(e) => this.stateChange(e) }  />
            </div>
            <div className="formElement">
                <label>Password</label>
                <input id="password" type="password" 
                    value={ this.state.password }
                    onChange={(e) => this.stateChange(e) }  />
            </div>
            <input type="button" value="Click me" onClick={ (e) => this.buttonClicked(e) }/>
          </div>  
        );
    }

    stateChange (e) {
        this.setState ({
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    }

    buttonClicked (e) {
        this.props.buttonClicked();
    }

}

function mapStateToProps(state) { 
return {
        "firstname":    "", 
        "lastname":     "", 
        "emailaddress": "",
        "password":     ""
    }
}

export default connect(mapStateToProps)(SampleForm);
//export default SampleForm;