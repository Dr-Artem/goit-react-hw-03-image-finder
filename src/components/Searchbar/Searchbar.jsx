import { Component } from 'react';

export class SearchBar extends Component {
    state = {
        inputValue: '',
    };

    handleInputChange = event => {
        const inValue = event.currentTarget.value.toLowerCase();
        this.setState({
            inputValue: inValue,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.inputValue.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.inputValue);
    };

    render() {
        return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        );
    }
}
