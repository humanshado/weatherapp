import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getWeatherData(this.state.searchTerm);
        this.setState({ searchTerm: ''});
    }

    render(){
        return(
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control"
                        autoFocus
                        placeholder="Enter a city to see 5 days weather forecast"
                        value={this.state.searchTerm}
                        onChange={(e) => this.handleInputChange(e)}/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary">Search</button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getWeatherData }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);