import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ''
        }
    }

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ searchTerm: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form className="input-group" onSubmit={() => this.handleSubmit()}>
                    <input 
                        className="form-control"
                        autoFocus
                        placeholder="Enter a city to see the 5 days weather forecast"
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

export default SearchBar;