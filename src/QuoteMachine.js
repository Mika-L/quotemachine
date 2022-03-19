import React from 'react';

const quotes = [
    { quote: "Mangez des pommes", author: "J.Chirac" },
    { quote: "Nous sommes en guerre", author: "E.Macron" },
    { quote: "Jeanne au secours !", author: "JM.Lepen" },
    { quote: "Au revoir", author: "V.Giscard d’Estaing" },
];

class QuoteMachine extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            indice: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleTweet = this.handleTweet.bind(this);
    }

    handleClick() {
        this.setState(
            {
                indice: Math.floor(Math.random() * quotes.length)
            });

        console.log(this.state.indice);
    }


    handleTweet() {
    }

    render() {
        return <div id="quote-box">
            <div id="text">
                {quotes[this.state.indice].quote}
            </div>
            <div id="author">
                {quotes[this.state.indice].author}
            </div>
            <button id="new-quote" onClick={this.handleClick}>Get new quote</button>
            <a id="tweet-quote" onClick={this.handleTweet} href={"twitter.com/intent/tweet?text=" + quotes[this.state.indice].quote}>tweet it</a>
        </div>;
    }
}

export default QuoteMachine;