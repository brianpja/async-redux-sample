import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectSubreddit } from './actions';

class Search extends Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    this.props.selectSubreddit(e.target.searchTerm.value)
                }}>
                    <input name="searchTerm" />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSubreddit}, dispatch)
}

export default connect(null, mapDispatchToProps)(Search);
