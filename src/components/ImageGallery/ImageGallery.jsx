import { Component } from 'react';
import { Api } from 'js/Api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
    state = {
        pictures: [],
        modalPicture: '',
        showModal: false,
    };

    async componentDidUpdate(prevProps) {
        const { name, page, total } = this.props;

        if (prevProps.name !== name || prevProps.page !== page) {
            const { data } = await Api(name, page);
            try {
                this.setState({
                    pictures: data.hits,
                });

                total(data.totalHits / 12);
            } catch (error) {
                console.log(error);
            }
        }
    }

    toggleModal = () => {
        // this.setState({ modalPicture: image });
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        return (
            <section className="section_gallery">
                <ul className="gallery">
                    <ImageGalleryItem
                        pictures={this.state.pictures}
                        onClose={this.toggleModal}
                    />
                </ul>
                {this.state.showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src={this.state.modalPicture} alt="" />
                        <button type="button" onClick={this.toggleModal}>
                            Close
                        </button>
                    </Modal>
                )}
            </section>
        );
    }
}
