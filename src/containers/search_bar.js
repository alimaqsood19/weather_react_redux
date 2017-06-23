import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        //Whenever a function is passed as a callback, need to bind the context of 'this'
        //this.setState() will refer to the global execution context not the local context it is currently in
        //therefore need to bind 'this' to the function
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault(); //tells browser to not submit form
        this.props.fetchWeather(this.state.term); //passes the state.term to the action fetchWeather 
        this.setState({term: ''}); //whenever user hits submit it'll reset the search box
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a five-day forecast in any city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
        //this causes the action creator fetchWeather, whenever it gets called to bind this action with dispatch,
        //which flows through the middleware and our reducers
        //container components can dispatch actions, attachs fetchWeather to props to be used by this component
        
}

export default connect(null, mapDispatchToProps)(SearchBar);
            //passing null as the first argument means we do not care about state just to connect 
            //maps action creator to SearchBar container allowing us to call that action creator
            //creates a container that has the action creators and the component
            //adds the action to this.props for the newly created container