import './GifCard.css';

const GifCard = ({ gif, onGifClick }) => {
    const handleClick = () => {
        onGifClick(gif);
    }

    return (
        <div className="gif-card" onClick={handleClick}>
            <div className="gif-card-image">
                <img src={gif.images.fixed_height.url} alt={gif.title} />
            </div>
            <div className="gif-card-content">
                <h3 className="gif-card-title">{gif.title}</h3>
            </div>
        </div>
    );
}

export default GifCard;