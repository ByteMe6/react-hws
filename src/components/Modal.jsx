import { Component } from 'react';
import './Modal.css';

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            this.props.onClose();
        }
    }

    render() {
        const { isOpen, onClose, gif } = this.props;

        if (!isOpen) return null;

        return (
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={onClose}>×</button>
                    <img src={gif.images.original.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                </div>
            </div>
        );
    }
}

export default Modal; 