import React from 'react';

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "Mangez des pommes"
        };
    }
    render() {
        return <div id="quote-box">
            <div id="text">
                {this.state.quote}
            </div>
            <div id="author">

            </div>
            <button id="new-quote">Get new quote</button>
            <a id="tweet-quote" />
        </div>;
    }
}

export default QuoteMachine;