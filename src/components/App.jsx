import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
    state = {
        input: '',
        page: 1,
        loadMore: false,
    };

    handleFormSubmit = input => {
        this.setState({
            input,
            page: 1,
        });
    };
    handleLearnMorePage = page => {
        this.setState({ page });
    };

    handleTotalPages = length => {
        this.state.page >= length
            ? this.setState({ loadMore: false })
            : this.setState({ loadMore: true });
    };
    render() {
        return (
            <>
                <SearchBar onSubmit={this.handleFormSubmit} />
                <ImageGallery
                    name={this.state.input}
                    page={this.state.page}
                    total={this.handleTotalPages}
                />
                {this.state.loadMore && (
                    <Button
                        curPage={this.state.page}
                        learnMorePage={this.handleLearnMorePage}
                        isFalse={this.state.loadMore}
                    />
                )}
            </>
        );
    }
}
