export const ImageGalleryItem = ({ pictures, onClose }) => {
    return pictures.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
            <li className="gallery-item" key={id}>
                <img
                    src={webformatURL}
                    alt={tags}
                    onClick={() => onClose(largeImageURL)}
                    // onClick={() => modal(largeImageURL)}
                />
            </li>
        );
    });
};
