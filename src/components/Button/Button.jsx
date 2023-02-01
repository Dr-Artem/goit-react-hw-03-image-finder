import { Component } from 'react';

export class Button extends Component {
    handleLearnMore = () => {
        this.props.learnMorePage(this.props.curPage + 1);
    };

    render() {
        return <button onClick={this.handleLearnMore}>Load more</button>;
    }
}
