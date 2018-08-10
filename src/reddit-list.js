import React, { Component } from 'react';
import { connect } from 'react-redux';

class RedditList extends Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
        }

        render() {
            const subreddit = this.props.selectedSubreddit;

            // if (!this.props.postsBySubreddit) return (
            //     <div>Loading...</div>
            // )

            // if (!this.myRef || !this.myRef.current) {
            //     return <div>Loading...</div>
            // }
            // return (
            //     <div>
            //         <input ref={this.myRef}></input>
            //         <span>Hello {this.myRef.current.value}</span>
            //     </div>
            // )
            return this.props.postsBySubreddit[subreddit].items.map((item, i) => {
                return <div key={i}>{i} {item.selftext}</div>;
            })
        }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(RedditList);
