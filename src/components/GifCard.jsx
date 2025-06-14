import { Component } from 'react';
import './GifCard.css';

class GifCard extends Component {
    render() {
        const { gif } = this.props;
        
        return (
            <div className="gif-card">
                <div className="gif-card-image">
                    <img src={gif.images.fixed_height.url} alt={gif.title} />
                </div>
                <div className="gif-card-content">
                    <h3 className="gif-card-title">{gif.title}</h3>
                </div>
            </div>
        );
    }
}

export default GifCard; 